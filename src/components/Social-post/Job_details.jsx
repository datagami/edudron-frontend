import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineTeam, AiOutlineUser } from 'react-icons/ai'
import { BsBookmark, BsFillBagFill, BsListCheck } from 'react-icons/bs'

import { BiGroup } from 'react-icons/bi'
import { MdEventAvailable } from 'react-icons/md'
import { RiPagesLine, RiContactsBookLine } from 'react-icons/ri'
import Pagination from 'react-bootstrap/Pagination'
const Job_details = () => {
  return (
    <>
      <section className="socail_pages_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 network_col">
              <div className="socail_post_white_box jobs_col pb-3">
                <h3>Recommended for you</h3>
                <p className="para">Based on your profile and search history</p>

                <div className="jobs_div">
                  <NavLink to="/jobsdetails">
                    <div className="post_details_main_outer">
                      <div className="post_details_main">
                        <div className="post_details_img">
                          <img
                            className="img-fluid"
                            src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                            alt=""
                          />
                        </div>
                        <div className="post_details">
                          <h2>React Js Developer</h2>
                          <h3>Hybrid Plus Infotech Solution Pvt Ltd</h3>
                          <div className="job_loct">
                            <span>Jaipur, Rajasthan</span>{' '}
                            <span>2 Day ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="bookmark_btn">
                        <button>
                          {' '}
                          <BsBookmark />
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="jobs_div">
                  <NavLink to="/jobsdetails">
                    <div className="post_details_main_outer">
                      <div className="post_details_main">
                        <div className="post_details_img">
                          <img
                            className="img-fluid"
                            src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                            alt=""
                          />
                        </div>
                        <div className="post_details">
                          <h2>React Js Developer</h2>
                          <h3>Hybrid Plus Infotech Solution Pvt Ltd</h3>
                          <div className="job_loct">
                            <span>Jaipur, Rajasthan</span>{' '}
                            <span>2 Day ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="bookmark_btn">
                        <button>
                          {' '}
                          <BsBookmark />
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="socail_post_white_box jobs_col">
                <h3>More Jobs for you</h3>
                <p className="para">Based on your profile and search history</p>

                <div className="jobs_div">
                  <NavLink to="/jobsdetails">
                    <div className="post_details_main_outer">
                      <div className="post_details_main">
                        <div className="post_details_img">
                          <img
                            className="img-fluid"
                            src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                            alt=""
                          />
                        </div>
                        <div className="post_details">
                          <h2>React Js Developer</h2>
                          <h3>Hybrid Plus Infotech Solution Pvt Ltd</h3>
                          <div className="job_loct">
                            <span>Jaipur, Rajasthan</span>{' '}
                            <span>2 Day ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="bookmark_btn">
                        <button>
                          {' '}
                          <BsBookmark />
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div className="jobs_div">
                  <NavLink to="/jobsdetails">
                    <div className="post_details_main_outer">
                      <div className="post_details_main">
                        <div className="post_details_img">
                          <img
                            className="img-fluid"
                            src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                            alt=""
                          />
                        </div>
                        <div className="post_details">
                          <h2>React Js Developer</h2>
                          <h3>Hybrid Plus Infotech Solution Pvt Ltd</h3>
                          <div className="job_loct">
                            <span>Jaipur, Rajasthan</span>{' '}
                            <span>2 Day ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="bookmark_btn">
                        <button>
                          {' '}
                          <BsBookmark />
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="socail_post_white_box jobs_details_col">
                <div className="job_details">
                  <h2>React Js Developer</h2>
                  <h3>Hybrid Plus Infotech Solution Pvt Ltd</h3>
                  <div className="job_loct">
                    <span>Jaipur, Rajasthan</span> <span>2 Day ago</span>
                  </div>
                  <div className="job_desc_col">
                    <ul>
                      <li>
                        <span>
                          {' '}
                          <BsFillBagFill className="icon" />{' '}
                        </span>{' '}
                        <span>Full Time</span>
                      </li>
                      <li>
                        <span>
                          {' '}
                          <AiOutlineTeam className="icon" />{' '}
                        </span>{' '}
                        <span>11-50 employees</span>
                      </li>

                      <li>
                        <span>
                          {' '}
                          <BsListCheck className="icon" />{' '}
                        </span>{' '}
                        <span>
                          7 of 10 skills match your profile, you may be a good
                          fit
                        </span>
                      </li>
                    </ul>

                    <div className="job_description">
                      <p>Hello Folks,</p>
                      <p>
                      A well-established NYSE-listed company that is becoming the industry standard by embracing innovative solutions to address complex investing challenges is looking for an HTML/CSS Developer. The selected candidate will be responsible for coming up with a common theme and style for all company's tools. The company's clientele includes some of the world's top institutions as well as private-wealth clients and retail investors. This is an exciting opportunity for developers to grow professionally while working on cutting-edge ideas and outcomes.
                      </p>
                      <h5 className='Job_Requirements_heading'>Job Requirements</h5>
                      <ul>
                        <li>
                          should have experience developing web applications
                        </li>
                        <li>
                          should have experience developing web applications
                        </li>{' '}
                        <li>
                          should have experience developing web applications
                        </li>{' '}
                        <li>
                          should have experience developing web applications
                        </li>{' '}
                        <li>
                          should have experience developing web applications
                        </li>
                      </ul>
                      <p>Thank You</p>
                    </div>
                  </div>
                </div>
                <div>
                <div className="apply_now_btn mb-3 mt-5">
                          <NavLink to="#">Apply Now</NavLink>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Job_details
