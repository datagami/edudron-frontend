import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineTeam, AiOutlineUser } from 'react-icons/ai'
import { BiGroup } from 'react-icons/bi'
import { MdEventAvailable, MdOutlineDelete } from 'react-icons/md'
import { RiPagesLine, RiContactsBookLine } from 'react-icons/ri'
import Pagination from 'react-bootstrap/Pagination';
import { api_instance } from '../Frontend/Header/HeaderApi`s'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { useEffect,useState } from 'react'


const Notification = () => {

  const socketNotification=useSelector(state=>state.socketNotificationSlice.value);
  const getUserDetails=useSelector(state=>state.getUserSlice.value);
  console.log(socketNotification)
  const[userDetails,setUserDetails]=useState([])
  const[notify_data,setNotifyData]=useState([])

  
 function get_notify(params) {
  // setIsLoading(true)
    api_instance
    .get(`/api/notifies`, )
    .then((response) => {
      console.log(response);
      if(response){
        // setIsLoading(false)
        setNotifyData(response?.data?.notifies)
        console.log(response.data?.notifies)
      }
    })
    .catch((error) => {
      console.log(error);
      // setIsLoading(false)
    });
 }
 useEffect(()=>{
  get_notify()
 },[])
  return (
    <>
      <section className="socail_pages_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className=" add_img">
                <img className='img-fluid' src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png' />
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 nitification_col">
              <div className="socail_post_white_box ">
                {
                  notify_data && notify_data?.map((item)=>{
                    console.log(item)
                    return  <NavLink to="#">
                    <div className="notification_box">
                      <div className="notifi_main_div">
                        <div className="notifi_img_div">
                          <img
                            className="img-fluid"
                            src={item.user.avatar}
                            alt=""
                          />
                        </div>
                        <div className="notifi_content">
                          <p>
                          <b>{item.user.fullname}</b>
                          {" "}
                           {item.text}
                          </p>
                          <p>{item.content}</p>
                        </div>
                      </div>
                      <div className="notifi_time_div">
                        <span>{moment(item?.createdAt).fromNow()}</span>
                        <span> <button className='notifi_delete_btn'> <MdOutlineDelete className='icon' /></button></span>
                      </div>
                    </div>
                  </NavLink>
                  })
                }
               

               
                {/* <NavLink to="#">
                  <div className="notification_box">
                    <div className="notifi_main_div">
                      <div className="notifi_img_div">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/C5603AQGI37bkDxEgZA/profile-displayphoto-shrink_100_100/0/1660807043127?e=1675900800&v=beta&t=z0Mvr2zDUCVuI_y7aqJxafR7xlB7K5aety3l7-8y7Iw"
                          alt=""
                        />
                      </div>
                      <div className="notifi_content">
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also
                        </p>
                      </div>
                    </div>
                    <div className="notifi_time_div">
                      <span>1h ago</span>
                      <span> <button className='notifi_delete_btn'> <MdOutlineDelete className='icon' /></button></span>
                    </div>
                  </div>
                </NavLink>

                <NavLink to="#">
                  <div className="notification_box">
                    <div className="notifi_main_div">
                      <div className="notifi_img_div">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/C5603AQGI37bkDxEgZA/profile-displayphoto-shrink_100_100/0/1660807043127?e=1675900800&v=beta&t=z0Mvr2zDUCVuI_y7aqJxafR7xlB7K5aety3l7-8y7Iw"
                          alt=""
                        />
                      </div>
                      <div className="notifi_content">
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also
                        </p>
                      </div>
                    </div>
                    <div className="notifi_time_div">
                      <span>1h ago</span>
                      <span> <button className='notifi_delete_btn'> <MdOutlineDelete className='icon' /></button></span>
                    </div>
                  </div>
                </NavLink> */}
                {/* <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pagination_div">
                        <Pagination>
                          <Pagination.First />
                          <Pagination.Prev />
                          <Pagination.Item>{1}</Pagination.Item>
                          <Pagination.Ellipsis />

                          <Pagination.Item>{10}</Pagination.Item>
                          <Pagination.Item>{11}</Pagination.Item>
                          <Pagination.Item active>{12}</Pagination.Item>
                          <Pagination.Item>{13}</Pagination.Item>
                          <Pagination.Item disabled>{14}</Pagination.Item>

                          <Pagination.Ellipsis />
                          <Pagination.Item>{20}</Pagination.Item>
                          <Pagination.Next />
                          <Pagination.Last />
                        </Pagination>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className=" add_img">
              <img className='img-fluid' src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png' />
               
                <img className='img-fluid' src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Notification
