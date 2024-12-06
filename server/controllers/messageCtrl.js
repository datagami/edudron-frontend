const Conversations = require('../models/conversationModel')
const Messages = require('../models/messageModel')
const { uploadFile } = require("../s3");
const AWS_folder = "media/";
const { sendFireBaseNOtificationFCM } = require('../fcmNotification');

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const messageCtrl = {
    createMessage: async (req, res) => {
        console.log("file",req.file)
        req?.files?.map((v) => {
            return v.path;
          });
          const image = []
          const file = req.files.map(async (v, key) => {
            uploadResult = await uploadFile(v, AWS_folder);
    
            return await uploadResult.Location;
          })
          const imageUrls = await Promise.all(file);
        try {
            const { sender, recipient, text, url , media, call, type } = req.body

            if(!recipient || (!text.trim() && media.length === 0 && !call)) return;

            const newConversation = await Conversations.findOneAndUpdate({
                $or: [
                    {recipients: [sender, recipient]},
                    {recipients: [recipient, sender]}
                ]
            }, {
                recipients: [sender, recipient],
                text, media, call, url, type
            }, { new: true, upsert: true });

            const newMessage = {
                conversation: newConversation._id,
                sender, call,
                recipient, text, media:imageUrls,type
            }

            const newMessageSave = await Messages.create(newMessage)
            const newMessageData = await newMessageSave.populate('recipient','_id fcmToken avatar').execPopulate();

          const Conversationsdata =  await Messages.find({
            conversation: newConversation._id
            });
           const length = Conversationsdata.length;
           if(length == 1){
              if(JSON.stringify(newMessageData.recipient._id) !== JSON.stringify(req.user._id)  ){
                sendFireBaseNOtificationFCM([newMessageData.recipient?.fcmToken],'Swag', req.user.fullname+' stat a new chat',newMessageData.recipient, req.user)
                }
           }else{
            const time = Date();
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Seoul'
              });
              console.log(nDate,time);
            if(Math.round((Conversationsdata[length-1].createdAt - Conversationsdata[length-2].createdAt) / 1000) > 60){
                if(JSON.stringify(newMessageData.recipient._id) !== JSON.stringify(req.user._id)  ){
                    sendFireBaseNOtificationFCM([newMessageData.recipient?.fcmToken], req.user.fullname+' send a message',text,newMessageData.recipient, req.user)
                    }
            }
            
           }
            
            res.json({msg: 'Create Success!'})

        } catch (err) {
            console.log(err.message)
            return res.status(500).json({msg: err.message})
        }
    },
    getConversations: async (req, res) => {
        try {
            const features = new APIfeatures(Conversations.find({
                recipients: req.user._id
            }), req.query).paginating()

            // console.log(features.query)
    
            const conversations = await features.query.sort('-updatedAt')
            .populate('recipients', 'avatar username fullname blockUser')

            // console.log(conversations)
            res.json({
                conversations,
                result: conversations.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    markSeenmessage: async(req,res)=>{
        
        const {sender} = req.body
        const recipient = req.user._id
        // If the recipient hit this API then the msg will be marked seen
        const newConversation = await Conversations.findOneAndUpdate({
            $or: [
                {recipients: [sender, recipient]}
            ]
        }, {
            isSeen:1
        }, { new: true, upsert: true })

        const msgSeen = await Messages.findOneAndUpdate({
            conversation: newConversation._id},{
                isSeen:1 
            })

        res.send({msgSeen  , newConversation , Success:"Markes as seen"})

    },
    getMessages: async (req, res) => {
        try {
            // console.log(req.user._id)
            // console.log(req.user.id)
            const features = new APIfeatures(Messages.find({
                $or: [
                    {sender: req.user._id, recipient: req.params.id},
                    {sender: req.params.id, recipient: req.user._id}
                ]
            }), req.query).paginating()

            const messages = await features.query.sort('-createdAt')

            res.json({
                messages,
                result: messages.length
            })

        } catch (err) {
            console.log(err.message)
            return res.status(500).json({msg: err.message})
        }
    },
    deleteMessages: async (req, res) => {
        try {
            await Messages.findOneAndDelete({_id: req.params.id, sender: req.user._id})
            res.json({msg: 'Delete Success!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteConversation: async (req, res) => {
        try {
            
            const newConver = await Conversations.findOneAndDelete({
                $or: [
                    {recipients: [req.user._id, req.params.id]},
                    {recipients: [req.params.id, req.user._id]}
                ]
            })
            //console.log(newConver._id)
            await Messages.deleteMany({conversation: newConver._id})
            
            res.json({msg: 'Delete Success!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

module.exports = messageCtrl