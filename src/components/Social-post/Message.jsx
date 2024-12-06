// import React, { useState,useEffect } from 'react'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
// import { NavLink } from 'react-router-dom'
// import io from 'socket.io-client';
// import { FcAddImage, FcVideoCall } from 'react-icons/fc'
// import { AiOutlineGif, AiOutlinePlus, AiOutlineComment } from 'react-icons/ai'
// import { BsEmojiSmile } from 'react-icons/bs'
// import { BiLike } from 'react-icons/bi';
// import { socket } from '../../App';
// import { MDBFile } from 'mdb-react-ui-kit';
// // const socket = io.connect("http://localhost:3001");


// const Message = () => {
//   const user=JSON.parse(localStorage.getItem('login_result'));
//   const [show, setShow] = useState(false)
//   const[files,setFile]=useState('');
//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)
//   const [message, setMessage] = useState('');
//   const[usermsg,setUsermsg]=useState([]);
//   const[recived_text,setRecived_text]=useState('');
//  console.log(files)
//   const [room, setRoom] = useState('');
//   const [users, setUsers] = useState('1');
//   const [reciveMessage, setReciveMessage] = useState([]);
//   const [imagepath, setPathImage] = useState('');
//   const [profileImage, setSelectedImage] = useState('');


// // let room =1
//   function send() {
//     // socket?.emit("send_message", { message, room })
//     console.log('join user',message)
//     socket?.emit("addMessage", {
//       message:message,
//       sender_id:user?.data?._id,
//       reciver_id:recived_text,
//       media:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
//     })
//     setUsermsg((prev)=>([...prev,message]));
// }



// console.log(reciveMessage)

  

//  useEffect(()=>{
//   socket.on('addMessageToClient', (msg)=>{
//     // console.log(msg);
//       setRecived_text(msg?.sender_id)
//      setReciveMessage(prev=>([...prev,msg,...usermsg]));
     
//   })
//  },[socket])

//  const handleFileChange=(e)=>{
//      setFile(e.target.files[0]);
//      console.log(files);
     
// }


//   return (
//     <>
//       <section className="socail_pages_bg message_section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-4 col-sm-12 msg_first_col">
//               <h4>Messaging</h4>

//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Control type="email" placeholder="Search Message" />
//                 </Form.Group>
//               </Form>

//               <div className="message_side_col">
//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>

//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>

//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>

//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>

//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>

//                 <NavLink to="#">
//                   <div className="post_col_inner_div">
//                     <div className="dis_flex">
//                       <img
//                         className="img-fluid"
//                         src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                         alt=""
//                       />
//                       <div className="post_col_name">
//                         <h3>Akash Kumar</h3>
//                         <p className="followers">
//                           Hybrid Plus Infotech Solution Pvt Ltd
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <button className="follow_btn">
//                         <p className="post_time">1 Day ago</p>
//                       </button>
//                     </div>
//                   </div>
//                 </NavLink>
//               </div>
//             </div>

//             <div className="col-lg-8 col-md-8 col-sm-12 msg_second_col">
//               {/* <h4>Akash Kumar</h4> */}

//               <div className="post_col_inner_div">
//                 <div className="dis_flex">
//                   <img
//                     className="img-fluid"
//                     src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
//                     alt=""
//                   />
//                   <div className="post_col_name">
//                     <h3>Akash Kumar</h3>
//                     <p className="followers">
//                       Hybrid Plus Infotech Solution Pvt Ltd
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <button className="follow_btn">
//                     <p className="post_time">1 Day ago</p>
//                   </button>
//                 </div>
//               </div>
//               <div className="msg_body ">
//                 {/* 
//                 <div className="msg_date_time">
//                   <span> 26 Dec 2020, 8:16 AM</span>
//                 </div>
//                 <div className=" receiver_msg">
//                   <p>
//                     The Humans of Data Science’ report by Michael Page for India
//                     found that approximately 11.5 million job opportunities will
//                     be created in the field of Data Science by 2026 and you just
//                     need one.
//                   </p>
//                 </div>
//                 <div className="clearfix"></div>

//                 <div className="secder_msg_main">
//                   <div className="sender_msg">
//                     <p>
//                       Start your journey in Data Science with Great Lakes PG
//                       Program in Data Science Engineering. Get dedicated
//                       placement assistance.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clearfix"></div>
//                 <div className="msg_date_time">
//                   <span> 26 Dec 2020, 8:16 AM</span>
//                 </div>
//                 <div className=" receiver_msg ">
//                   <p>
//                     The Humans of Data Science’ report by Michael Page for India
//                     found that approximately 11.5 million job opportunities will
//                     be created in the field of Data Science by 2026 and you just
//                     need one.
//                   </p>
//                 </div>
//                  <div className="secder_msg_main">
//                   <div className="sender_msg">
//                     <p>
//                       Start your journey in Data Science with Great Lakes PG
//                       Program in Data Science Engineering. Get dedicated
//                       placement assistance.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clearfix"></div>
//                 <div className=" receiver_msg">
//                   <p>
//                     The Humans of Data Science’ report by Michael Page for India
//                     found that approximately 11.5 million job opportunities will
//                     be created in the field of Data Science by 2026 and you just
//                     need one.
//                   </p>
//                 </div>
//                 <div className="clearfix"></div>
//                  <div className="secder_msg_main">
//                   <div className="sender_msg">
//                     <p>
//                       Start your journey in Data Science with Great Lakes PG
//                       Program in Data Science Engineering. Get dedicated
//                       placement assistance.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clearfix"></div>

//                 <div className=" receiver_msg ">
//                   <p>
//                     The Humans of Data Science’ report by Michael Page for India
//                     found that approximately 11.5 million job opportunities will
//                     be created in the field of Data Science by 2026 and you just
//                     need one.
//                   </p>
//                 </div>
//                 <div className="clearfix"></div>
//                  <div className="secder_msg_main">
//                   <div className="sender_msg">
//                     <p>
//                       Start your journey in Data Science with Great Lakes PG
//                       Program in Data Science Engineering. Get dedicated
//                       placement assistance.
//                     </p>
//                   </div>
//                 </div> */}
                
//                   {
//                     reciveMessage?.map((msg)=>{
//                          return <div className='receiver_msg'>
//                          <p>{msg?.message}</p>
//                          </div>
//                     })
//                   }
//                   {/* <p>{reciveMessage?.message}</p> */}
               
//                 <div className="clearfix"></div>
                
//                  {
//                   Object.values(usermsg)?.map((item)=>{
//                    return <div className="secder_msg_main">
//                    <div className="sender_msg">
//                    <p>{item}</p>
//                    </div>
//                 </div>
//                   })
//                  }
                  
//               </div>

//               <div className="msg_footer">
//                 <Form onSubmit={(e=>e.preventDefault())}>
//                   <div>
            
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       {/* <Form.Control
//                         as="textarea"
//                         type="text"
//                         placeholder="Enter your message"
//                       /> */}
//         <Form.Control as ='textarea' type="text" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} />
//                     </Form.Group>
//                   </div>

//                   <div>
//                     <div className="post_btns_div">
//                       <ul>
//                         <li>
//                           <button onClick='' className="post_btns">
//                             <span>
                            
                            
//                               <label className='label'>   <FcAddImage className="icons" /> 
//                               <input className='input_file' type="file" accept="image/png, image/gif, image/jpeg" size="60"  onChange={handleFileChange}/> 
//                              </label> 

//                             </span>
//                           </button>
//                         </li>
//                         <li>
//                           <button onClick={handleShow} className="post_btns">
//                             <span>
//                               <FcVideoCall className="icons" />
//                             </span>
//                           </button>
//                         </li>

//                         <li>
//                           <button onClick={handleShow} className="post_btns">
//                             <span>
//                               <BsEmojiSmile className="icons" />
//                             </span>
//                           </button>
//                         </li>
//                         <li>
//                           <button onClick={handleShow} className="post_btns">
//                             <span>
//                               <AiOutlineGif className="icons" />
//                             </span>
//                           </button>
//                         </li>
//                       </ul>
//                       <Button variant="primary"  onClick={send}>
//                         Submit
//                       </Button>
//                     </div>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

// export default Message
