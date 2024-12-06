const Conversations = require('./models/conversationModel')
const Messages = require('./models/messageModel')
const { uploadFile } = require("./s3");
const AWS_folder = "media/";

let users = [];
let all_users = [];

// const fs = require("fs");
// const rawData = fs.readFileSync("messages.json");
// const messagesData = JSON.parse(rawData);

const EditData = (data, id, call) => {
  const newData = data.map((item) =>
    item.id === id ? { ...item, call } : item
  );
  return newData;
};

const SocketServer = (socket) => {
  // Connect - Disconnect
  // socket.on('joinUser', user => {
  //     console.log('user is joined and its id is'+' '+user.id);
  //     all_users.push({id: user._id, socketId: socket.id, followers: user.followers})
  // });

  // socket.on('disconnect', () => {
  //     const data = users.find(user => user.socketId === socket.id)
  //     if(data){
  //         const clients = users.filter(user =>
  //             data?.followers?.find(item => item._id === user.id)
  //         )

  //         if(clients.length > 0){
  //             clients.forEach(client => {
  //                 socket.to(`${client.socketId}`).emit('CheckUserOffline', data.id)
  //             })
  //         }

  //         if(data.call){
  //             const callUser = users.find(user => user.id === data.call)
  //             if(callUser){
  //                 users = EditData(users, callUser.id, null)
  //                 socket.to(`${callUser.socketId}`).emit('callerDisconnect')
  //             }
  //         }
  //     }

  //     users = users.filter(user => user.socketId !== socket.id)
  // })

  //=====disoconnect=====================================
  //   socket.on('disconnect', () => {
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    all_users = users.filter((user) => user.socketID !== socket.id);
    socket.emit("newUserResponse", all_users);
    socket.disconnect();
  });

  //==========newuser==============================

  socket.on("newUser", (data) => {
    all_users.push(data);
    socket.emit("newUserResponse", all_users);
  });

  // Likes
  socket.on("likePost", (newPost) => {
    // const ids = [...newPost.user.followers, newPost.user._id]
    // const clients = users.filter(user => ids.includes(user.id))

    // if(clients.length > 0){
    //     clients.forEach(client => {
    //         socket.to(`${client.socketId}`).emit('likeToClient', newPost)
    //     })
    // }
    socket.emit("likeToClient", newPost);
  });

  socket.on("unLikePost", (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit("unLikeToClient", newPost);
      });
    }
  });

  // Comments
  socket.on("createComment", (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit("createCommentToClient", newPost);
      });
    }
  });

  socket.on("deleteComment", (newPost) => {
    const ids = [...newPost.user.followers, newPost.user._id];
    const clients = users.filter((user) => ids.includes(user.id));

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket.to(`${client.socketId}`).emit("deleteCommentToClient", newPost);
      });
    }
  });

  // Follow
  socket.on("follow", (newUser) => {
    console.log("newUser follow");
    const user = users.find((user) => user.id === newUser._id);
    user && socket.to(`${user.socketId}`).emit("followToClient", newUser);
    console.log(users);
    // socket.emit('followToClient', newUser)
  });

  socket.on("unFollow", (newUser) => {
    const user = users.find((user) => user.id === newUser._id);
    user && socket.to(`${user.socketId}`).emit("unFollowToClient", newUser);
  });

  // Notification
  socket.on("createNotify", (msg) => {
    // const client = all_users.find((user) => msg?.reciver?.includes(user.id));
    // console.log(client);
    // client && socket.to(client.socketID).emit("createNotifyToClient", msg);
    //  socket.broadcast.emit('createNotifyToClient', msg)
    console.log(all_users)
    const rs = all_users.find((v) => {
        if (msg.reciver == v.id) {
          console.log(msg.reciver===v.id)
          socket.to(v.socketID).emit("createNotifyToClient", msg);
        }
      });

  });

  socket.on("removeNotify", (msg) => {
    const client = users.find((user) => msg?.reciver?.includes(user.id));
    client && socket.to(client.socketID).emit("removeNotifyToClient", msg);
  });
  

  // Message
  socket.on("addMessage", (msg) => {
    // console.log(msg)
    const{type,text,sender,recipient,media}=msg;
    const fun= async () => {
      // console.log("file",req.file)

          const newConversation = await Conversations.findOneAndUpdate({
              $or: [
                  {recipients: [sender, recipient]},
                  {recipients: [recipient, sender]}
              ]
          }, {
              recipients: [sender, recipient],
              text, media,  type
          }, { new: true, upsert: true });
          console.log('chat',sender,recipient)
          const newMessage = {
              conversation: newConversation._id,
              sender,
              recipient, text, media,type
          }

          const newMessageSave = await Messages.create(newMessage)
          const newMessageData = await newMessageSave.populate('recipient','_id fcmToken avatar').execPopulate();
  }
  fun();
    const rs = all_users.find((v) => {
      if (msg.recipient == v.id) {
        // console.log(recipient.reciver===v.id)
        socket.to(v.socketID).emit("addMessageToClient", msg);
      }
    });
  });
  // socket.on("message", (data) => {
  //     messagesData["messages"].push(data)
  //     const stringData = JSON.stringify(messagesData, null, 2)
  //     fs.writeFile("messages.json", stringData, (err)=> {
  //         console.error(err)
  //       })
  //     socket.emit("messageResponse", data)
  //   })

  socket.on("join-room", (data) => socket.join(data));

  //=======user typing=======================
  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  // Check User Online / Offline
  socket.on("checkUserOnline", (data) => {
    const following = users.filter((user) =>
      data.following.find((item) => item._id === user.id)
    );
    socket.emit("checkUserOnlineToMe", following);

    const clients = users.filter((user) =>
      data.followers.find((item) => item._id === user.id)
    );

    if (clients.length > 0) {
      clients.forEach((client) => {
        socket
          .to(`${client.socketId}`)
          .emit("checkUserOnlineToClient", data._id);
      });
    }
  });

  // Call User
  socket.on("callUser", (data) => {
    users = EditData(users, data.sender, data.recipient);

    const client = users.find((user) => user.id === data.recipient);

    if (client) {
      if (client.call) {
        socket.emit("userBusy", data);
        users = EditData(users, data.sender, null);
      } else {
        users = EditData(users, data.recipient, data.sender);
        socket.to(`${client.socketId}`).emit("callUserToClient", data);
      }
    }
  });

  socket.on("endCall", (data) => {
    const client = users.find((user) => user.id === data.sender);

    if (client) {
      socket.to(`${client.socketId}`).emit("endCallToClient", data);
      users = EditData(users, client.id, null);

      if (client.call) {
        const clientCall = users.find((user) => user.id === client.call);
        clientCall &&
          socket.to(`${clientCall.socketId}`).emit("endCallToClient", data);

        users = EditData(users, client.call, null);
      }
    }
  });
};

const multiExport = {
  SocketServer,
  // messagesData,
  users,
};
module.exports = multiExport;
