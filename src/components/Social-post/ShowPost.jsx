import React from 'react'
import { api_instance } from '../Frontend/Header/HeaderApi`s'

const ShowPost = () => {
    console.log(window.location.href)
    const [post,setPost]=useState('')
    const post_by_id=(id)=>{
        api_instance
        .get(`/api/get-post-by-id/${id}`, )
        .then((response) => {
         setPost(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      }
  return (
    <div>
    {getPost && getPost?.map((item,index)=>{
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
                    onClick={function(){like_api(item?._id,item?.posting_as);send_notify(item?._id,item?.user_id?._id)}}
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
      })}
    </div>
  )
}

export default ShowPost
