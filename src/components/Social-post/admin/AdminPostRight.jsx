import React from 'react'

import { NavLink } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai'
import { BsCalendar4Event, BsHash } from 'react-icons/bs'

const AdminPostRight = () => {
  return (
    <>
      <section className="addmin_socail_right_side">
        <div className="profile_col socail_news_col ">
          <h4>Grow your followers</h4>
          <div>
            <ul className="socail_single_news custom_scroll">
              <li>
                <img
                  className="img-fluid"
                  src="https://media.licdn.com/dms/image/C5603AQFFMVBbjmcwnQ/profile-displayphoto-shrink_100_100/0/1644844069280?e=1677715200&v=beta&t=Eh4Z_Lmy-oBcJAg2-Im22bHMBlcOILdRd3BXDAY-wuw"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="img-fluid"
                  src="https://media.licdn.com/dms/image/C4D03AQEb_jokbhe7TQ/profile-displayphoto-shrink_100_100/0/1652633766037?e=1677715200&v=beta&t=uItCn2wFlejl5ou2WJF9dO9KSg082Vsi0f9fkdR-Whc"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="img-fluid"
                  src="https://media.licdn.com/dms/image/C4E03AQE2mwPGTuwIxQ/profile-displayphoto-shrink_100_100/0/1652086718346?e=1677715200&v=beta&t=RKPoIWPTyBGvNLK3QZgoAK3rFUdUNeImivV-DVNzI7Q"
                  alt=""
                />
              </li>
            </ul>
            <p className="credits">248/250 credits available</p>
            <p>
              Build your audience and reach by inviting connections to follow
              your Page
            </p>

            <NavLink to="/network" className="invite_conn_btn">
              <button>Invite Connections</button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="">
        <div className="profile_col admin_left_right_second_col Analytics_col">
          <h3>Analytics</h3>
          <p>Last 30 day activity</p>
         

          <div className="manage_hashtags_div">
            <ul>
              <li className='Analytics_col_list'>
                <div>
                  <p>147 </p>
                  <p> Search appearances</p>
                </div>
                <div className='ana_num'>
                  <NavLink to="#">8.7%</NavLink>
                </div>
              </li>
              
              <li className='Analytics_col_list'>
                <div>
                  <p>1147 </p>
                  <p> Unique Visitors</p>
                </div>
                <div className='ana_num'>
                  <NavLink to="#">8.7%</NavLink>
                </div>
              </li>
              

              <li className='Analytics_col_list'>
                <div>
                  <p>147 </p>
                  <p> Search appearances</p>
                </div>
                <div className='ana_num'>
                  <NavLink to="#">8.7%</NavLink>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminPostRight
