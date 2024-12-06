import React, { useState, useEffect, useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { FcAddImage, FcVideoCall } from 'react-icons/fc'
import { AiOutlineEdit, AiOutlinePlus, AiOutlineComment,AiFillLike } from 'react-icons/ai'
import { BsFillImageFill, BsBagCheck } from 'react-icons/bs'
import { BiVideoPlus, BiLike } from 'react-icons/bi'
import { GrDocument } from 'react-icons/gr'
import { api_instance ,baseurl} from '../Frontend/Header/HeaderApi`s'
import moment from 'moment';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { socket } from '../../App';
import { useDispatch } from 'react-redux'


import Dropdown from 'react-bootstrap/Dropdown'
import { socketNotificationAction } from '../../Redux/slice/socketNotificationSlice'
import { getUserAction } from '../../Redux/slice/getUserSlice'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Social_main = () => {
  const dispatch=useDispatch();
  const [show, setShow] = useState(false)
  const loginUserData = JSON.parse(localStorage.getItem('login_result'));
  const[getPost,setGetPost]=useState([]);
  const[add_post_input,setAddPostInput]=useState('');
  const[add_post_results,setAddPostResult]=useState([]);
  const[add_comments,set_add_comment]=useState('');
  const[cooment_id,set_comment_id]=useState('');
  const[show_comments,setShowComments]=useState([]);
  const[forLike,setLike]=useState([]);
  const [_follow,setFollow]=useState(false);
  const[isLoading,setIsLoading]=useState(false);
  const[picloading,setPicLoading]=useState(false);
  const[getUser,setGetUser]=useState([]);
const[pic,setPic]=useState('');
const[socketNotification,setSocketNotification]=useState([]);
const[isComLoading,setComLoading]=useState(false)
const[files,setFiles]=useState('');
const[infiniteLoading,setInfiniteLoading]=useState(true);
const [page, setPage] = useState(1);
const[isLiked,setIsLiked]=useState(false);
  const[showLikes,setShowLikes]=useState([]);
  const[postDataById,setPostDataById]=useState('');
  const[get_id_for_cmnt,set_comment_id__]=useState('');
  const[displayCmtntBar,setDisplayCmntBar]=useState(false);
  // const[createNotify,setCreateNotify]=useState('');
  const[NotificationData,createNotificationData]=useState({
    id:'',
    user:"",
    recipients:"",
    content:"",
    url:"",
    text:"",
    isRead:false
  })
  // console.log(files)
// console.log(add_post_input)
// console.log(socketNotification);
  //================follow socket===========================
  console.log(document)
let arr=[]
  const like_id=forLike && forLike?.map((v)=>{
   return v.likes.map((s)=>{
    // console.log(s._id);
      arr.push(s)
      return s._id
    })
  })
//  useEffect(()=>{
//   forLike?.map((value)=>{
//     value.likes.map((value)=>{
//       if(value._id=loginUserData?.data?._id){
//         setIsLiked(true)
//       }else{
//         setIsLiked(false)
//       }
//     })
   
//    },[forLike])
//  })

  const follow = () => {
    socket.emit('follow', loginUserData?.data)
    console.log('ok emit')
    setFollow(!_follow)
  }

  useEffect(() => {
    socket.on('followToClient', (newuser) => {
      console.log('i am followed')
    })
  }, [[socket]])
  // console.log(add_post_results);
  //======================follow socket ends==========================

  //======================like socket ====================================

  const like_post = () => {
    socket.on('likePost', loginUserData?.data?._id)
    console.log('liked')
  }

  useEffect(() => {
    socket.on('likeToClient', (post_like) => {
      console.log(post_like)
    })
  }, [socket])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);


  //=======================send notify==============================================




  function send_notify(e,f){
    const user_data={
      from:loginUserData?.data?._id,
      name:loginUserData?.data?.fullname,
      socketID:socket.id,
      reciver:f,
      postId:e,
      text:'You have one Notification',
      timestamp:new Date()
    };
  // console.log(user_data)
    socket.emit('createNotify',user_data);
  }
  useEffect(()=>{
    dispatch(socketNotificationAction(socketNotification))
  },[socketNotification])


  useEffect(()=>{
    socket.on('createNotifyToClient',(data)=>{
      console.log(socketNotification);
      setSocketNotification([socketNotification,data]);
      getUserDetails(data.reciver);
    })
  },[socket])

  //======================// user details==============

  function getUserDetails(__id) {
    // setIsLoading(true)
      api_instance
      .get(`/api/user/${__id}`, )
      .then((response) => {
        console.log(response);
        if(response){
          // setIsLoading(false)
      dispatch(getUserAction(response.data))
          setGetUser(response?.data)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
   }

  //===================get post========================
const[totalPage,setTotalPage]=useState('');
// console.log(totalPage)
 function getPosts(params) {
  // setIsLoading(true)
    api_instance
    .get(`/api/getPost?page=${page}` )
    .then((response) => {
      // console.log(response);
      if(response){
        setTotalPage(Math.ceil(response.data.totalRecord/response.data.size))
        // setIsLoading(false)
        const data=response?.data?.results
        // console.log(data)
        // setGetPost(data)
        // setGetPost((prev=>[...getPost,data]);
        setGetPost((prev) => [...prev, ...data]);
        // console.log(data);
      setLike(data); //kkkkkkkk
      setInfiniteLoading(false)
  
      }
   
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false)
      setInfiniteLoading(false)
    });
 }
 useEffect(()=>{
  getPosts();
 },[page])

//  function getPosts_for_like(params) {

//   api_instance
//   .get(`/api/getPost`, )
//   .then((response) => {
//     console.log(response);
//     // setLike(response?.data);
//     setLike(response?.data?.results);
//     // setGetPost(response?.data)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }


 //=======================get post api ends==========================

 //====================add post api=================================

 const add_post_api=()=>{
  getPosts();
  var myHeaders = new Headers();
myHeaders.append("Authorization", loginUserData?.access_token);

var formdata = new FormData();
formdata.append("image", files);
formdata.append("posting_us", add_post_input?.posting_as);
formdata.append("post_us_id", loginUserData?.data?._id);
formdata.append("share_to", add_post_input?.share_to);
formdata.append("group_id", "");
formdata.append("can_comment", true);
formdata.append("description", add_post_input?.description);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`${baseurl}/api/addPost`, requestOptions)
  .then(response => response.json())
  .then(result => {
    // console.log(result);
    setAddPostResult(result?.data)
    if(result){
      handleClose();
      // var post = [...getPost?.results,...result.data]
        // console.log(post)
      // setGetPost?.results(post)
      // getPost?.results();
      
      
    }
  })
  .catch(error => console.log('error', error));
 }
function handleAddPost(e) {
  setAddPostInput(v=>({...v,[e.target.name]:e.target.value}))
}
//================================like api================================
const like_api=(post_id,user_id)=>{
  // setRemoteUserId(user_id)
  api_instance
  .patch(`/api/social/like/${post_id}`, )
  .then((response) => {
    show_likes(post_id);
    post_by_id(post_id)
    setIsLiked(!isLiked);
    create_notify()
    // console.log(response);
  })
  .catch((error) => {
    console.log(error);
    setIsLiked(!isLiked)
  });
}
//================================un like post ======================================
const un_like=(post_id,user_id)=>{

 
  api_instance
  .patch(`/api/social/unlike/${post_id}`, )
  .then((response) => {
    // console.log(response);
    show_likes(post_id);
    post_by_id(post_id)
    setIsLiked(!isLiked)

  })
  .catch((error) => {
    console.log(error);
  });
}
//==================================show like=========================================
const show_like=(id)=>{
  api_instance
  .get(`/api/social/showlikes/${id}`, )
  .then((response) => {
    console.log(response);

  })
  .catch((error) => {
    console.log(error);
  });
}
//========================================add comment====================================
const _comment={
  parent_id:'',
  comment:add_comments
}
const add_comment=()=>{
  api_instance
  .post(`/api/social/addcomment/${cooment_id}`, _comment)
  .then((response) => {
    set_add_comment("")
    console.log(response);
    show_comment(cooment_id)
  })
  .catch((error) => {
    console.log(error);
  });
}
//==================================create notification===================================

const create_notify=()=>{
  api_instance
  .post(`/api/notify`, NotificationData)
  .then((response) => {
   console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  });
}

//==================================show comments============================
const show_comment=(id)=>{
  post_by_id(id)
  api_instance
  .get(`/api/social/showcomments/${id}`, )
  .then((response) => {
    setShowComments(response.data);


  })
  .catch((error) => {
    console.log(error);
  });
}
// console.log(showLikes)
const show_likes=(id)=>{
  api_instance
  .get(`/api/social/showlikes/${id}`, )
  .then((response) => {
    setShowLikes(response.data.likes);
  })
  .catch((error) => {
    console.log(error);
  });
}
const[likesCount,setPostLikesCount]=useState('')
const post_by_id=(id)=>{
  api_instance
  .get(`/api/get-post-by-id/${id}`, )
  .then((response) => {
    setPostLikesCount(response.data.result)
    setPostDataById(response.data.result._id);
    // set_comment_id(response.data.result._id)
    set_comment_id__(response.data.result._id)
  })
  .catch((error) => {
    console.log(error);
  });
}

const showCommentBar=(id)=>{
    // if(id==get_id_for_cmnt){
    //   setDisplayCmntBar(!displayCmtntBar)
    // }
    setDisplayCmntBar(!displayCmtntBar)
}

// console.log(postDataById)
const showLikesId=useMemo(()=>{
  return showLikes.map((item)=>{
    return item._id
  });
},[showLikes])
// console.log(showLikesId)
//================================update post========================
const update_post=()=>{
  api_instance
  .get(`api/updatePost`, )
  .then((response) => {
    console.log(response);

  })
  .catch((error) => {
    console.log(error);
  });
}

const delete_comment=(id)=>{
  api_instance
  .delete(`api/comment/${id}`, )
  .then((response) => {
    show_comment(id)
    console.log(response);

  })
  .catch((error) => {
    console.log(error);
  });
}

const other_user_details=(id)=>{
  api_instance
  .get(`/api/user/${id}`, )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}

const postDetails = (pics) => {
  setPicLoading(true);
  if (pics === undefined) {
    // toast({
    //   title: "Please Select an Image!",
    //   status: "warning",
    //   duration: 5000,
    //   isClosable: true,
    //   position: "bottom",
    // });
    alert('please select image');
    return;
  }
  // console.log(pics);
  if (pics.type === "image/jpeg" || pics.type === "image/png") {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dwj1ixzbj");
    fetch("https://api.cloudinary.com/v1_1/dwj1ixzbj/image/upload", {
      method: "post",
      body: data,
      headers:{
        "content-type":"multipart/form-data",
        "Access-Control-Allow-Origin":"*"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data?.url?.toString());
        // console.log(data.url.toString());
        setPicLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPicLoading(false);
      });
  } else {
    // toast({
    //   title: "Please Select an Image!",
    //   status: "warning",
    //   duration: 5000,
    //   isClosable: true,
    //   position: "bottom",
    // });
    alert('please select image')
    setPicLoading(false);
    return;
  }
};

const handelInfiniteScroll = async () => {
  // console.log("scrollHeight" + document.documentElement.scrollHeight);
  // console.log("innerHeight" + window.innerHeight);
  // console.log("scrollTop" + document.documentElement.scrollTop);
  try {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setInfiniteLoading(true);
      setPage((prev) => prev + 1);
    }
  } catch (error) {
    console.log(error);
  }
};

// useEffect(() => {
//   window.addEventListener("scroll", handelInfiniteScroll);
//   return () => window.removeEventListener("scroll", handelInfiniteScroll);
// }, []);

const loadMore=()=>{
  setPage(page+1)
}

  return (
 
    <>
    {
      isLoading ?   <Stack spacing={1} sx={{marginTop:'50px'}}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>:<>
    <section>
        <div className="socail_main_top_div">
          <div className="dis_flex">
            <div className="imgs">
              <img
                className="img-fluid"
                // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
                src={loginUserData?.data?.avatar}
                alt=""
              />
            </div>
            <div className="start_post_btn_div">
              <button onClick={handleShow} className="start_post_btn">
                Start a post
              </button>
            </div>
          </div>

          <div className="post_btns_div">
            <ul>
              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <FcAddImage className="icons" />
                  </span>
                  <span> Photo</span>
                </button>
              </li>
              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <FcVideoCall className="icons" />
                  </span>
                  <span> Video</span>
                </button>
              </li>

              <li>
                <button onClick={handleShow} className="post_btns" style={{pointerEvents: 'none' }}>
                  <span>
                    <BsBagCheck className="icons" />
                  </span>
                  <span> Job</span>
                </button>
              </li>

              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <AiOutlineEdit className="icons" />
                  </span>
                  <span> Write a article</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
{
  getPost && getPost?.map((item,index)=>{
   
    // console.log(item);
   return <div className="post_col" key={index} >
          <div className="post_col_inner_div" >
            <div className="dis_flex">
              <img
                className="img-fluid"
                src={item.user_id?.avatar}
                alt=""
              />
              <div className="post_col_name">
                <h3>{item.user_id?.fullname}</h3>
                <p className="followers">
                  {item.user_id?.profileTitle}
                </p>
                <p className="post_time">{moment(item.updatedAt).fromNow()}</p>
              </div>
            </div>
            <div>
              {!_follow?<button className="follow_btn" onClick={follow}>
                <AiOutlinePlus /> Follow
              </button>:''}
            </div>
          </div>
          <div className="post_content">
            <p>
             {item.description}
            </p>
            <p>{
              item.media_url?.endsWith(".jpg") || item.media_url?.endsWith(".jpeg") ?
            
            <img
              className="img-fluid"
              src={item.media_url}
              alt=""
            /> 
            : item.media_url?.endsWith('.mp4') || item.media_url?.endsWith('.mov')|| item.media_url?.endsWith('.avi') || item.media_url?.endsWith('.mkv') || item.media_url?.endsWith('.wmv') ? <video controls width="100%">
            <source src={item.media_url} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video> :""
            }
            </p>
            <img
              className="img-fluid"
              src="https://media-exp1.licdn.com/dms/image/sync/D4D18AQFpsUQb_yYl7w/companyUpdate-article-image-shrink_627_1200/0/1663931324738/FB_Insta_Linkedin_CreativeBpng?e=1673481600&v=beta&t=j_KHk-yQJcHnsMcx5vZ4A-Sy5yNHaGC9atjxmgcKmYs"
              alt=""
            />
          </div>
          
          <div className="like_comment_count_div">
            {
              item.likes.length>0 ? <div>
              <span >
                <BiLike className="icons" />
              </span>
              <span>{(showLikesId.includes(loginUserData?.data?._id) && postDataById==item._id)? Number(item.likes.length)+1 : item.likes.length } </span>
            </div> : <div>
            <span >
              <BiLike className="icons" />
            </span>
            <span>{(showLikesId.includes(loginUserData?.data?._id) && postDataById==item._id)? Number(item.likes.length)+1 : "No likes" }</span>
          </div>
            }
          
            <div style={{cursor:'pointer'}} onClick={()=>show_comment(item._id)}>
              <span>{item?.comments?.length} Comments</span>
            </div>
          </div>
          <div className="like_comment_div">
          
          {


            (item.likes.includes(loginUserData?.data?._id) || showLikesId.includes(loginUserData?.data?._id) && postDataById==item._id)  ? 
                <div>
              <button
                className="like_comment_btn" 
                style={{ cursor: 'pointer' }}
                onClick={()=>{un_like(item?._id);send_notify(item?._id,item?.user_id?._id)}}
              ><AiFillLike className="icons text-primary" /> <span>like</span>
                
              </button>
            </div>    :
              <div>
              <button
                className="like_comment_btn" 
                style={{ cursor: 'progress' }}
                onClick={function(){like_api(item?._id,item?.posting_as);send_notify(item?._id,item?.user_id?._id);createNotificationData({
                  id:item._id,
                  user:loginUserData?.data?._id,
                  recipients:item.post_us_id,
                  content:item.description,
                  url:item.media_url,
                  text:"likes Your Post",
                  isRead:false
                })}}
              >
              <BiLike className="icons" /> <span>Like</span>
              </button>
            </div>
          
     
          }
          
           
            
            <div>
              <button className="like_comment_btn comment_bbtn" onClick={()=>{show_comment(item?._id); showCommentBar(item?._id)}}>
                <AiOutlineComment className="icons" /> <span>Comment</span>
              </button>
            </div>
          </div>
         {
          displayCmtntBar && item._id==get_id_for_cmnt ?  <div className="add_comment">
          <img
            className="img-fluid commenter_img"
            src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
            alt=""
          />
          <div className="add_comment_input_div mb-2">
            <Form>
              <Form.Group className="">
                <Form.Control
                  className="add_comment_input_box"
                  type="text"
                  placeholder="Add a comment"
                  value={add_comments}
                  onChange={(e)=>set_add_comment(e.target.value)}
                  onClick={()=>set_comment_id(item._id)}
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            <button className="post_btn" onClick={add_comment}>Post</button>
          </div>
        </div>:''
         }
              
          <div className="all_comments_div">
            {
              show_comments && show_comments?.map((com)=>{
                console.log(com)
                {
                  if(com.resource_id===item._id){
                    return <div className="commenters_inner_div">
                    <div className="imgs">
                      <img
                        className="img-fluid"
                        src={com?.user?.avatar}
                        alt=""
                      />
                    </div>
                    <div style={{width:"85%"}}>
                      <div className="commenter_name">
                        <div className="post_col_name ">
                          <h3>{com?.user?.fullname} </h3>
                          <p>
                            {com?.user?.profileTitle}
                          </p>
                        </div>
                        <div className="comment_time">
                          <p>{moment(com.createdAt).fromNow()}</p>
                        </div>
                      </div>
                      <div className="comment_body">
                        <p>
                          {com.comment}
                          {' '}
                        </p>
                        <div className="comments_like_comment_div">
                          <ul>
                            <li>
                              <button className="like_comment_btn">Like</button>
                            </li>
                            <li>
                              <button className="like_comment_btn">Comment</button>
                            </li>
                            {
                              loginUserData?.data?._id==com.user?._id ? <li>
                              <button className="like_comment_btn" onClick={()=>delete_comment(com._id)}>delete</button>
                            </li> :""
                            }
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                }
              
              })
            }
          </div>
        </div>
  })
}
{
  totalPage==page ? "" :<div className="text-center mb-2"><button className="btn btn-primary" onClick={loadMore}>Load More</button></div>
}


      </section>

      {/* ========Post model================ */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="post_model_flex">
              <img
                className="img-fluid"
                src={loginUserData?.data.avatar}
                alt=""
              />
              <div className='' style={{marginRight:'15px'}}>
                <Form.Select aria-label="Default select example" name='share_to' value={add_post_input.share_to  ?? 'anyone'} onChange={handleAddPost}>
                <option >select</option>
                <option value="anyone" selected>Anyone</option>
                  <option value="connection">Connections</option>
                  <option value="group">Group</option>
                </Form.Select>
              </div>
              <div className=''>
                <Form.Select aria-label="Default select example" name='posting_as' value={add_post_input.posting_as ?? 'user'} onChange={handleAddPost}>
                <option >select</option>
                <option value="user" selected>User</option>
                  <option value="group">Group</option>
                  <option value="organisation">Organisation</option>
                </Form.Select>
              </div>
            </div>
            <div className="text_area_div">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="what do you want to talk about?"
                  name='description' 
                  value={add_post_input.description}
                  onChange={handleAddPost}
                />
              </Form.Group>
            </div>
<div className='hasgtag_div'>
  <button>Add hashtag</button>
</div>
            <div className="bottom_part_buttons">
              <div>
              
        <input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => setFiles(e.target.files[0])}
        />

              </div>
              <div>
                <button className="post_btn" onClick={add_post_api}> Post</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {infiniteLoading && <Box sx={{ display: 'flex',justifyContent:'center' }}>
                  <CircularProgress />
                </Box> }
    </>
    }
      
    </>
  )
}

export default Social_main
