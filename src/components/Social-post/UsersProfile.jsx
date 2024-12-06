import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import {FaTransgender} from 'react-icons/fa'
import { useSelector } from 'react-redux'
const UsersProfile = () => {
  const other_users = useSelector((state) => state?.otherUserSlice?.value);
  console.log(other_users);
  return (
    <div>
        <section className="socail_post_main_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="detail_profile_col">
                <img
                  className="img-fluid bg_img"
                  src="https://media-exp1.licdn.com/dms/image/C5616AQHtXTfJdTSt7g/profile-displaybackgroundimage-shrink_350_1400/0/1592808714503?e=1675900800&v=beta&t=WT4RACRzw3s6iEka05gg-QGrXLKubSJtnLVDk4X_65g"
                  alt=""
                />
                <div className="detail_profile_content">
                  <img
                    className="img-fluid"
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_400_400/0/1667357252158?e=1675900800&v=beta&t=Cnm3f_Qx9K2vNvJsdaYzYYE1QSUiCOfqWa-CzkXGecU"
                    // src=''
                    alt=""
                  />
                  <div className="detail_profile_content_main">
                    <div className="detail">
                      <h4>{other_users?.user?.fullname}</h4>
                      <p>
                        web designer and developer at Hybrid Plus Infotech
                        Solution Pvt Ltd
                      </p>
                      <div className="profile_location">
                        <span>Rewari, Haryana</span>{' '}
                        <span>
                          <button>Contact Info</button>
                        </span>
                      </div>
                      <div className="connection_count">
                        <span>500+</span> <span>Connections</span>
                      </div>
                    </div>
                    <div className="working_col">
                      {/* <div className="edit_btn_div">
                        <button>
                          <BiEditAlt className="edit_icon" />
                        </button>
                        <button >
                          <FaTransgender className="edit_icon" />
                        </button>
                      </div> */}
                      <div className="working_col_inner">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                          alt=""
                        />
                        <p>Hybrid Plus Infotech Solution Pvt Ltd</p>
                      </div>

                      <div className="working_col_inner">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/C510BAQGUb3DKT_yHeQ/company-logo_100_100/0/1536511331498?e=1678320000&v=beta&t=B-sxyEMVVRO-ewfS-NkS8OCJEecA-6OseWtXNjV_V3o"
                          alt=""
                        />
                        <p>Rajasthan Technical University</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail_profile_col p-3 profile_about">
                <h4>About</h4>
                <p>
                  I am a Web Designer and developer at Hybrid plus Infotech
                  solution Pvt Ltd. experience building websites and web
                  applications. I specialize in HTML 5, CSS3, SCSS, BOOTSTRAP 4
                  & 5, JAVASCRIPT, PHOTOSHOP, Reactstrap, Ant Design and have
                  professional experience working with Reactjs. Take a look at
                  my work and get in touch.
                </p>
              </div>

              <div className="detail_profile_col p-3 profile_about profile_exprience">
                <h4>Experience</h4>
                <div className="profile_exprience_main_div">
                  <div className="working_col_inner">
                    <img
                      className="img-fluid"
                      src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                      alt=""
                    />
                    <div>
                      <p>Hybrid Plus Infotech Solution Pvt Ltd</p>
                      <p>
                        <span> Aug 2022</span> -<span> Present </span>
                      </p>
                      <p>Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                  <div>
                    {/* <div className="edit_btn_div">
                      <button >
                        <BiEditAlt className="edit_icon" />
                      </button>
                    </div> */}
                  </div>
                </div>

                <div className="profile_exprience_main_div">
                  <div className="working_col_inner">
                    <img
                      className="img-fluid"
                      src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                      alt=""
                    />
                    <div>
                      <p>Hybrid Plus Infotech Solution Pvt Ltd</p>
                      <p>
                        <span> Aug 2022</span> -<span> Present </span>
                      </p>
                      <p>Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                  <div>
                    {/* <div className="edit_btn_div">
                      <button >
                        <BiEditAlt className="edit_icon" />
                      </button>
                    </div> */}
                  </div>
                </div>

                <div className="profile_exprience_main_div">
                  <div className="working_col_inner">
                    <img
                      className="img-fluid"
                      src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                      alt=""
                    />
                    <div>
                      <p>Hybrid Plus Infotech Solution Pvt Ltd</p>
                      <p>
                        <span> Aug 2022</span> -<span> Present </span>
                      </p>
                      <p>Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                  <div>
                    {/* <div className="edit_btn_div">
                      <button >
                        <BiEditAlt className="edit_icon" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="detail_profile_col p-3 profile_about profile_exprience">
                <div className='d-flex justify-content-between align-items-center'>
                  
                <h4>Education</h4>
                {/* <div className="edit_btn_div">
                      <button >
                        <AiOutlinePlus className="edit_icon" />
                      </button>
                    </div> */}
                    
                </div>
                <div className="profile_exprience_main_div">
                   <div className="working_col_inner">
                    <img
                      className="img-fluid"
                      src="https://media-exp1.licdn.com/dms/image/C510BAQGUb3DKT_yHeQ/company-logo_100_100/0/1536511331498?e=1678924800&v=beta&t=XMTdt6rlY5bfDBwmf_HzetdS38x-lC-qgwFvwRHJEdg"
                      alt=""
                    />
                    <div>
                      <p>Rajasthan Technical University</p>
                      <p>
                        Master of Computer Applications - MCA, Computer Science{' '}
                      </p>
                      <p>2018 - 2020</p>
                    </div>
                  </div>
                  
                
                  <div>
                    {/* <div className="edit_btn_div">
                      <button >
                        <BiEditAlt className="edit_icon" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsersProfile