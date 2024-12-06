import React, { useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { api_instance } from '../Frontend/Header/HeaderApi`s';

const Socail_left = () => {
const[getUser,setGetUser]=useState('')
  const loginUserData=JSON.parse(localStorage.getItem('login_result'));
  // console.log(getUser)
  function getUserDetails() {
      api_instance
      .get(`/api/user/${loginUserData?.data?._id}`, )
      .then((response) => {
        if(response){
          setGetUser(response?.data.user)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
   }
  useEffect(()=>{
    getUserDetails()
  },[])
  return (
    <>
      <section className='Socail_left_right_static profile_mob_none'>
        <div className="profile_col ">
       
          <img
            className="img-fluid bg_img"
            src={getUser?.coverImg}
            alt=""
          />
          <div className="profile_sec">
            <img
              className="img-fluid"
              // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
             src={getUser?.avatar}
              alt=""
            />
              <NavLink to="/profile" className="">
            <h4>{getUser?.fullname}</h4>
              </NavLink>
            <p>
              {getUser?.profileTitle}
            </p>
          </div>
          <div className='profile_views_div'>
            <NavLink to="#">
              <h3>Followers</h3>
              <h3>{getUser?.followers?.length}</h3>
            </NavLink>
          </div>

          <div className='profile_views_div mb-5 pb-3'>
            <NavLink to="#">
              <h3>Following</h3>
              <h3>{getUser?.following?.length}</h3>
            </NavLink>
          </div>

        </div>
      </section>
    </>
  )
}

export default Socail_left
