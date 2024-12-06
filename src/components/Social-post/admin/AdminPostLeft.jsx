import React from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlinePlus,AiOutlineEdit } from 'react-icons/ai';
import { BsCalendar4Event , BsHash} from 'react-icons/bs';


const AdminPostLeft = () => {
  return (
    <>
      <section className="admin_social_left_side">
        <div className="profile_col ">
          <img
            className="img-fluid bg_img"
            src="https://media.licdn.com/dms/image/D4D3DAQGzs1OKEClGOA/image-scale_191_1128/0/1663798188395?e=1672887600&v=beta&t=SA5qaMzyWrGtg5b___Y9rIlmxmK8G-QzADglj1GaK6Y"
            alt=""
          />
          <div className="profile_sec">
            <img
              className="img-fluid"
              src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_200_200/0/1663796888791?e=1680134400&v=beta&t=kMBiz1SI6MSJd9f5cHY0hI5CoyM2mkMKgsteSiBjvd4"
              alt=""
            />
            <h4 className='text_center'>Hybrid Plus Infotech Solution PVT LTD</h4>
            <p className='text_center'>
              {' '}
              <button className="admin_followers_btn">
                {' '}
                2546 Followers
              </button>{' '}
            </p>
          </div>
          <div className="profile_views_div">
            <NavLink to="#">
              <button>Edit Page</button>
            </NavLink>
            <NavLink to="#">
              <button>Share Page</button>
            </NavLink>
          </div>

          <div className=""></div>
        </div>
      </section>

      <section className="">
        <div className="profile_col admin_left_right_second_col">
          <h3>Manage</h3>
          <div className='add_event_div'>
          <h5><BsCalendar4Event />   Events</h5> <button> <AiOutlinePlus /></button>
          </div>
          <div className='show_all_events'>
            <button>Show all events</button>
          </div>



          <div className='add_event_div'>
          <h5><BsHash />   Hashtags</h5> <button> <AiOutlineEdit /></button>
          </div>
          <div className='manage_hashtags_div'>
            <ul>
              <li>
              <NavLink to="#">
              <p>#findapro </p><p> 12,881 followers</p>
            </NavLink>
              </li>
              <li>
              <NavLink to="#">
              <p>#findapro </p><p> 12,881 followers</p>
            </NavLink>
              </li>
              <li>
              <NavLink to="#">
              <p>#findapro </p><p> 12,881 followers</p>
            </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default AdminPostLeft
