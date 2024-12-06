import React from "react";
import "./CSS/post_style.css";
import Button from "@mui/material/Button";
import { useState, useEffect,useRef } from "react";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import TextField from "@mui/material/TextField";
import { Scrollbars } from "react-custom-scrollbars-2";
import { RxDot } from "react-icons/rx";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FiEdit, FiSearch } from "react-icons/fi";
import { GrDocumentWord } from "react-icons/gr";
import { RxBorderDotted, RxDotFilled,RxCross2 } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { BsFillFileEarmarkPdfFill ,BsFiletypeDoc} from "react-icons/bs";
import CircularProgress from "@mui/material/CircularProgress";
import {
  BsCardImage,
  BsEmojiSmile,
  BsArrowLeft,
  BsBoxArrowUp,
  BsArrowBarDown,
} from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineGif } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { api_instance ,baseurl,common_token} from "../Frontend/Header/HeaderApi`s";
import moment from "moment";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { socket } from "../../App";
import EmojiPicker,{Emoji,EmojiStyle,EmojiClickData} from 'emoji-picker-react';

const Chat = () => {
  //====================================avatar styled comp================================================

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  //=======================================avatar styled component ends=========================================

  const user_data = JSON.parse(localStorage.getItem("login_result"));
  const { pathname } = useLocation();
  const [msg, setMsg] = useState('');
  const [msg1, setMsg1] = useState([]);
  const [sender_msg, setSender_msg] = useState([]);
  const [reciver_msg, setReciver_msg] = useState([]);
  const [reciverid, setReciverid] = useState(null);
  const [expand, setExpand] = useState("none");
  const [converge, setConverge] = useState("block");
  const [expansion, setExpansion] = useState(false);
  const [userList, setUserList] = useState([]);
  const [toId, setToId] = useState("");
  const [lastMmsg, setLastMsg] = useState("");
  const [userOnline, setUserOnline] = useState("");
  const [onlineUserName, setOnlineUserName] = useState("");
  const [welcomeScreen, setWelcomeScreen] = useState("block");
  const [chatBodyScreen, setChatBodyScreen] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const[generate__url,setGenerateUrl]=useState([])
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const[showEmoji,setShowEmoji]=useState(false);
const[files,setFiles]=useState([])
const[file,setFile]=useState([]);
const containerRef = useRef(null);
const [hasMore, setHasMore] = useState(true);
const [page, setPage] = useState(1);
  const data = {
    type:'user',
    text: msg,
    sender: user_data?.data?._id,
    name: user_data?.data?.fullname,
    recipient: toId,
    media: generate__url,
    socketID: socket.id,
    emoji:selectedEmoji,
    createdAt: new Date(),
  };
  var formdata = new FormData();

function generate_url(){
  var myHeaders = new Headers();
myHeaders.append("Authorization", common_token);



var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`${baseurl}/api/generate-url`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    if(result){
      setGenerateUrl(result.data)
    //   socket.emit("addMessage", data);
    // setMsg1([...msg1, data]);
    }
  })
  .catch(error => console.log('error', error));
}

  // console.log(clone_msg)
  const suggested_users = () => {
    setIsLoading(true);
    api_instance
      .get(`/api/suggestionsUser`)
      .then((response) => {
        if (response) {
          setIsLoading(false);
          setUserList(response?.data?.users);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    suggested_users();
  }, []);

  //============================SEND MSG===========================================

  const send_msg = () => {
    setMsg('');
    setFile([])
    setGenerateUrl([])
    socket.emit("addMessage", data);
    setMsg1([...msg1, data]);
  };

  //==============================RECIVE MSG============================================
  useEffect(() => {
    socket.on("addMessageToClient", (data) => {
      console.log(data);
      setMsg1([...msg1, data]);
      setLastMsg(data);
    });
  }, [socket, data]);

  //========================new user response=================================
  useEffect(() => {
    socket.on("newUserResponse", (users) => {
      console.log("online users", users);
      const online_users = users.map((online) => {
        // console.log(online)
        return online.id;
      });
      setUserOnline(online_users);
      // console.log(userOnline)
    });
  }, [socket, pathname]);
  const handlekeypress = (e) => {
    if (e.key == "Enter") {
      send_msg();
    // create_chat(data);
      setConverge("block");
      setExpand("none");
    }
  };
  //=========================CHAT RESPONSIVE===================================================================

  const [display_chat_side, setDisplayChatSide] = useState("flex");
  const [display_chat_body, setDisplayBody] = useState("block");

  function handle_responsive_chat_side() {
    setDisplayChatSide("none");
    setDisplayBody("block");
  }
  function handle_responsive_chat_body() {
    setDisplayChatSide("block");
    setDisplayBody("none");
  }
  function actualWidth(params) {
    if (screen.width <= 765) {
      setDisplayBody("none");
      document
        .getElementById("res_Side")
        ?.addEventListener("click", handle_responsive_chat_side);
    } else {
      setDisplayBody("block");
      setDisplayChatSide("block");
      document
        .getElementById("res_Side")
        ?.removeEventListener("click", handle_responsive_chat_side);
    }
  }
  useEffect(() => {
    window.addEventListener("load", () => {
      setDisplayBody("block");
      setDisplayChatSide("block");
    });
    return () => {
      window.addEventListener("load", () => {
        setDisplayBody("block");
        setDisplayChatSide("block");
      });
    };
  });
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.addEventListener("resize", actualWidth);
    };
  });
  useEffect(() => {
    if (pathname == "/newchat") {
      actualWidth();
    }
  }, [pathname]);
  function inputExpand(params) {
    setConverge("none");
    setExpand("block");
  }
  function inputConverge(params) {
    setConverge("block");
    setExpand("none");
  }
  function clearmsg() {
    setMsg1([]);
    setWelcomeScreen("none");
    setChatBodyScreen("flex");
  }

  const handleFileChange = (event) => {
    event.preventDefault();
    for (let i = 0; i < event.target.files.length; i++) {
      formdata.append('media', event.target.files[i]);
    }
  // const all=  Object.values(event.target.files)?.map((item)=>{
  //     return item
  //   })
  //   setFiles(all);
    let ImagesArray = Object.entries(event.target.files).map((e) =>
    URL.createObjectURL(e[1])
  );
  setFile([...file, ...ImagesArray]);
  generate_url();
  };

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    setFiles(' ')
    console.log(s);
  }
 

  //=====================chat api`s============================================================
const[ml,setMl]=useState('')
  const get_chat = (id) => {
    setIsLoading(true);
    api_instance
      .get(`/api/message/${id}?page=${page}&limit=10`)
      .then((response) => {
        if (response) {
          setIsLoading(false);
          setMsg1(prevMessages => [...prevMessages, ...response.data.messages])
          console.log(response.data);
          setMl(response.data.messages.length)
    setPage(prevPage => prevPage + 1);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  useEffect(()=>{
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
console.log(toId)
  },[toId,ml])
  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollTop == 0 && !isLoading) {
      // fetch more messages
      get_chat(toId);
    }
  };

  useEffect(() => {
    if(containerRef.current){
      containerRef.current.addEventListener("scroll", handleScroll);
      return () => containerRef?.current?.removeEventListener("scroll", handleScroll);
    }
    
  }, );



  function create_chat(chat_data){
var myHeaders = new Headers();
myHeaders.append("Authorization", common_token);

var formData = new FormData();
formData.append('type', chat_data?.type);
formData.append('text', chat_data?.text);
formData.append('sender', chat_data?.from);
formData.append('recipient', chat_data?.reciver);
formData.append('media', JSON.stringify(chat_data?.reciver));

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formData,
  redirect: 'follow'
};

fetch(`${baseurl}/api/message`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  function getFileExtensions(urls) {
    let extensions = [];
    for (let i = 0; i < urls.length; i++) {
      let filename = urls[i].substring(urls[i].lastIndexOf('/')+1);
      let ext = filename.substring(filename.lastIndexOf('.')+1);
      extensions.push(ext);
    }
    return extensions;
  }
  // console.log(getFileExtensions(generate__url))
  
  function emoji_fun(emojiData) {
    console.log(emojiData.unified)
    setSelectedEmoji(emojiData.unified);
  }
  return (
    <div>
      <div
        className="container-lg mb-5 mx-1 mx-auto my-4 shadow-md "
        style={{ borderRadius: "8px", boxShadow: "" }}
      >
        <div className="row">
          <div
            className="col-md-4 col-lg-3 "
            style={{
              backgroundColor: "rgb(255,255,255)",
              border: "2px solid #D3D3D3",
              display: display_chat_side,
            }}
          >
            <h6
              className=" chat_side_head px-3 mx-0"
              style={{
                borderBottom: "2px solid #D3D3D3",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "30px",
                fontFamily: "sans-serif",
              }}
            >
              <span>Messaging</span>
              <span>
                <div class="dropdown">
                  <span class="dropbtn">
                    {" "}
                    <span className="top_messaging">
                      <RxBorderDotted className="px-2 fs-2 " />
                    </span>
                  </span>
                  <div class="dropdown__content">
                    <a href="#"> Manage Conversations</a>
                    <a href="#"> Set Away Message </a>
                    <a href="#"> Manage Setting</a>
                  </div>
                </div>
                <span className="ps-3">
                  <FiEdit />
                </span>
              </span>
            </h6>
            <div
              className="chat_search_box mx-3"
              style={{ display: "flex", position: "relative" }}
            >
              <input
                type="text"
                id="chat_search_"
                placeholder="Search"
                className=" "
              />

              <span className="search_icon_positon_ab">
                <FiSearch />
              </span>
            </div>
            <h6 className="fw-bold m-3">Recent</h6>
            <Scrollbars style={{ height: "390px" }} className="custom_scroll">
              {/* {
                userList && userList?.map((item)=>{
                  console.log(item)
                })
              } */}
              {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress />
                </Box>
              ) : (
                userList &&
                userList.map((item) => {
                  return (
                    <div
                      className={
                        item._id == toId
                          ? "active_chat sidebar_users  "
                          : // : "sidebar_users mx-3 pb-4 "
                            "sidebar_users "
                      }
                      key={item._id}
                      id="res_Side"
                      onClick={() => {
                        setToId(item._id);
                        get_chat(item._id)
                        setPage(0)
                        clearmsg();
                        setOnlineUserName(item.fullname);
                        containerRef.current.scrollTop = containerRef.current.scrollHeight;
                      }}
                    >
                      <div className="">
                        {userOnline?.includes(item._id) ? (
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar alt="Remy Sharp" src={item.avatar} />
                          </StyledBadge>
                        ) : (
                          <Avatar alt="Remy Sharp" src={item.avatar} />
                        )}
                      </div>
                      <div className="px-3">
                        <span
                          className="chat_username"
                          // style={{
                          //   fontWeight: "80px",
                          //   fontFamily: "sans-serif",
                          // }}
                        >
                          {item.fullname}
                        </span>
                        <div
                          style={{ fontSize: "13px" }}
                          className="text-secondary"
                        >
                          {/* {console.log(lastMmsg?.reciver==item._id)} */}
                          {lastMmsg?.sender == item._id ? lastMmsg?.text : ""}
                          {/* <p>kljgdgjklh;jhdgfjgkhljhg</p> */}
                          {/* {lastMmsg?.length >  0 ? <span className="p-1" style={{borderRadius:'50%',backgroundColor:'red',fontSize:'10px',color:'black'}}>{lastMmsg?.length}</span>:''}  */}
                        </div>
                      </div>
                      <span
                        className="my-auto ms-auto pe-2"
                        style={{ fontSize: "12px" }}
                      >
                        {/* {moment(item.updatedAt).fromNow()} */}
                        {lastMmsg?.recipient == item._id
                          ? moment(item.createdAt).fromNow()
                          : ""}
                        {/* <span>10.25</span> */}
                      </span>
                    </div>
                  );
                })
              )}
            </Scrollbars>
          </div>

          {/* main=========================== */}

          <div
            className="col-sm-12 col-md-8 col-lg-9 "
            style={{ border: "2px solid #D3D3D3", display: display_chat_body }}
          >
            <div className="row" style={{ display: welcomeScreen }}>
              <div className="col-12">
                <div className="chat_welcome_screen">
                  <img
                    className="img-fluid"
                    src="https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png"
                    alt=""
                  />
                  <div className="chat_welcome_screen_content">
                    <h1>Welcome To Edudron</h1>
                    <p>Select the person you want to chat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ display: chatBodyScreen }}>
              <div
                className="col-12  mx-auto py-1"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  borderBottom: "2px solid #D3D3D3",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="header_avtar">
                  <span
                    className="d-md-none"
                    onClick={handle_responsive_chat_body}
                  >
                    <BsArrowLeft />
                  </span>
                  <div>
                    <div
                      className="ms-1 mt-0 fw-bold fs-6"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {onlineUserName}
                    </div>
                    <div className="d-flex">
                      <RxDot className="text-success" />
                      <div
                        className="text-center "
                        style={{ fontSize: "12px" }}
                      >
                        {/* {console.log(lastMmsg?.from, toId)} */}
                        {userOnline?.includes(toId)
                          ? "Online"
                          : "Avalable on mobile"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pe-2 mt-2">
                  <div class="dropdown">
                    <span class="dropbtn">
                      {" "}
                      <span className="top_messaging">
                        <RxBorderDotted className="px-2 fs-2" />
                      </span>
                    </span>
                    <div class="dropdown__content">
                      <a href="#"> Manage Conversations</a>
                      <a href="#"> Set Away Message </a>
                      <a href="#"> Manage Setting</a>
                    </div>
                  </div>
                  <span className="fs-3">
                    <BiVideoPlus className=" fs-3 ps-2" />
                  </span>
                </div>
              </div>
              <div
                className="col-12 mx-auto mb-0 chat_body custom_scroll message__container"
                // style={{
                //   backgroundColor: '#fff',
                //   overflow: 'auto',
                //   position: 'relative',
                // }}
                ref={containerRef}
              >
                <div>
                {
                  ml==0 ? <p className="text-center">No More Messages.....</p> :''
                }{
                  isLoading ? <p className="text-center">Loading Please Wait.....</p> :''
                }
                {
                  showEmoji ? <EmojiPicker style={{height:"125px"}} onEmojiClick={emoji_fun}/> :""
                }
                  {msg1 &&
                    msg1?.reverse().map((v) => {
                      if (v.sender === user_data?.data?._id) {
                        return (
                          <>
                          
                          
                            <div className="chat_sender_side">
                              <div className="chat_sender_side_inner">
                                <div className="chat_user_names_div">
                                  <span>{moment(v.createdAt).format("HH:mm")}</span>
                                  <span>
                                    <RxDotFilled />
                                  </span>
                                  <h2 className="chat_user_names">{v.name}</h2>
                                  <img
                                    className="chat_avatar_img"
                                    src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg"
                                  />
                                </div>
                                <div>
                                {
                                  v && v?.media?.map((img)=>{
                                    console.log(img.endsWith('.pdf'))
                                    if((img.endsWith('.jpg') || img.endsWith('.jpeg') || img.endsWith('.png'))){
                                      return <span><img style={{
                                        height:"150px",width:"200px",display:"block",paddingBottom:'10px'
                                      }} src={img} className='img-fluid'/></span>
                                   } else if(img.endsWith('.pdf') )   {
                                       return <a href={img} target="_blank" className="text-center d-block"><BsFillFileEarmarkPdfFill className="pdf_icon"/></a>
                                   } else if(img.endsWith('.xls')){
                                    return <a href={img} target="_blank" className="text-center d-block"><RiFileExcel2Fill className="pdf_icon"/></a> 
                                   }  else if(img.endsWith('.doc') || img.endsWith('.docs') || img.endsWith('.docm')){
                                    return <a href={img} target="_blank" className="text-center d-block"><GrDocumentWord className="pdf_icon"/></a> 
                                   } else if(img.endsWith('.mp4') || img.endsWith('.mov')|| img.endsWith('.avi') || img.endsWith('.mkv') || img.endsWith('.wmv')){
                                    return  (
                                      
                                      <video controls width="80%">
                                        <source src={img} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                      </video>
                   
                                    );
                                   } else if(img.endsWith('.wav') || img.endsWith('.mp3')|| img.endsWith('.aac') || img.endsWith('.mkv') || img.endsWith('.aiff')){
                                    return  (
                                      <a href={img} target='_blank'>
                                      <audio  controls width="80%">
                                        <source src={img} type="audio/mp3" />
                                        Sorry, your browser doesn't support embedded videos.
                                      </audio>
                                      </a>
                                    );
                                   } 
                                  })
                                }
                                <Emoji
                        unified={selectedEmoji}
                        emojiStyle={EmojiStyle.APPLE}
                        size={22}
                      />
                                
                                  <p className="chat_msg">{v.text}</p>
                                  
                                </div>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div className="clearfix"></div>
                            <div className="chat_receiver_side">
                              <div className="chat_receiver_side_inner">
                                <div className="chat_user_names_div">
                                  <Avatar
                                    className="chat_avatar_img"
                                    alt="Remy Sharp"
                                    src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340."
                                  />

                                  <h2 className="chat_user_names">{v.name}</h2>
                                  <span>
                                    <RxDotFilled />
                                  </span>
                                  <span>{moment(v.createdAt).format("HH:mm")}</span>
                                </div>
                                <div>
                                {
                                  v && v?.media?.map((img)=>{
                                    console.log(img.endsWith('.pdf'))
                                    if((img.endsWith('.jpg') || img.endsWith('.jpeg') || img.endsWith('.png'))){
                                      return <span><img style={{
                                        height:"150px",width:"200px",display:"block",paddingBottom:'10px'
                                      }} src={img} className='img-fluid'/></span>
                                   } else if(img.endsWith('.pdf') )   {
                                       return <a href={img} target="_blank" className="text-center d-block"><BsFillFileEarmarkPdfFill className="pdf_icon"/></a>
                                   } else if(img.endsWith('.xls')){
                                    return <a href={img} target="_blank" className="text-center d-block"><RiFileExcel2Fill className="pdf_icon"/></a> 
                                   }  else if(img.endsWith('.doc') || img.endsWith('.docs') || img.endsWith('.docm')){
                                    return <a href={img} target="_blank" className="text-center d-block"><GrDocumentWord className="pdf_icon"/></a> 
                                   }   else if(img.endsWith('.mp4') || img.endsWith('.mov')|| img.endsWith('.avi') || img.endsWith('.mkv') || img.endsWith('.wmv')){
                                    return  (
                                     
                                      <video controls width="80%">
                                        <source src={img} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                      </video>
                                      
                                    );
                                   } else if(img.endsWith('.wav') || img.endsWith('.mp3')|| img.endsWith('.aac') || img.endsWith('.mkv') || img.endsWith('.aiff')){
                                    return  (
                                      <a href={img} target='_blank'>
                                      <audio  controls width="80%">
                                        <source src={img} type="audio/mp3" />
                                        Sorry, your browser doesn't support embedded videos.
                                      </audio>
                                      </a>
                                    );
                                   } 
                                  })
                                }
                                  <p className="chat_msg">{v.text}</p>
                                  
                                </div>
                              </div>
                            </div>
                            <div className="clearfix"></div>
                          </>
                        );
                      }
                    })}
                </div>
              </div>
              <div
                className="col-12 mx-auto py-2 mt-2"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  borderTop: "2px solid #D3D3D3",
                  position:'relative'
                }}
              >
                     <div className="form-group preview">
                     {selectedEmoji ? (
                      <Emoji
                        unified={selectedEmoji}
                        emojiStyle={EmojiStyle.APPLE}
                        size={22}
                      />
                    ) : null}
            <div className="container">
              <div className="img_dis gy-4">
                {file.length > 0 &&
                  file?.map((item, index) => {
                    return (
                      <span className="  img_chat" key={item}>
                        <img src={item} alt="" />
                        <span className="cut_icon" onClick={() => deleteFile(index)}>
                          <RxCross2/>
                        </span>
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
                <div className="  input__box" style={{ position: "relative" }}>
                  <input
                    className="input_text_area"
                    // rows={expansion?'30':'2'}
                    placeholder="Type Something...."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    onKeyPress={(e) =>
                      msg?.length > 0  ? handlekeypress(e) : ""
                    }
                    style={{
                      position: expansion ? "absolute" : "relative",
                      display: "block",
                    }}
                    // onFocus={()=>setExpansion(true)}
                    onBlur={() => setExpansion(false)}
                  />

                  {/* <span className="mt-2 pt-1 me-3 fs-5" style={{cursor:'pointer',position:'absolute' ,right:'280px',display:converge}} onClick={inputExpand}><BsBoxArrowUp/></span>
                  <div style={{
                    display:expand,position:'absolute',width:'80%' ,bottom:'60px',right:'95px',
                    }}>    
                  <span className="mt-2 pt-1 me-3 fs-5" style={{cursor:'pointer',position:'absolute' ,right:'0px',display:expand}} onClick={inputConverge}><BsArrowBarDown/></span>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder='Write Something Here' rows={15} style={{backgroundColor: '#f3f2ef'}}/>
      </Form.Group>
      
      </div>  */}

                  <span
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <span className="top_messaging">
                      <label for="inputTag" className="_label">
                        <BsCardImage className="fs-5 me-3" />
                        <input
                        className="file_input"
                          id="inputTag"
                          type="file"
                          accept = "application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                          multiple
                          onChange={handleFileChange}
                          style={{display:'none'}}
                        />
                      </label>
                    </span>
                    <span className="top_messaging">
                      {" "}
                      <GrAttachment className="fs-5 me-3" onClick={()=>setShowEmoji(!showEmoji)}/>
                      
                      
                    </span>
                    <span className="top_messaging">
                      <AiOutlineGif className="fs-5 me-3" />
                    </span>
                    <span className="top_messaging">
                      <BsEmojiSmile className="fs-5 me-3" />
                    </span>
                  </span>
                  {/* top_messaging */}
                  <Button
                    variant="contained"
                    className="btn_chat"
                    onClick={() => (msg?.length > 0|| generate__url.length>0  ? send_msg() : "")}
                  >
                    <AiOutlineSend />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
