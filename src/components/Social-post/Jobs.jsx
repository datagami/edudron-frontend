import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineTeam, AiOutlineUser } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'

import { BiGroup } from 'react-icons/bi'
import { MdEventAvailable } from 'react-icons/md'
import { RiPagesLine, RiContactsBookLine } from 'react-icons/ri'
import Pagination from 'react-bootstrap/Pagination'

const Jobs = () => {
  return (
    <>
      <section className="socail_pages_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="socail_post_white_box">
                <div className="manage_network_col pt-2">
                  <ul>
                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <AiOutlineTeam className="icon" />{' '}
                          </span>
                          <h5>My Jobs</h5>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <RiContactsBookLine className="icon" />{' '}
                          </span>
                          <h5>Job Alerts</h5>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <AiOutlineUser className="icon" />{' '}
                          </span>
                          <h5>Skill Assessments </h5>
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <BiGroup className="icon" />{' '}
                          </span>
                          <h5>Interview Prep</h5>
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <MdEventAvailable className="icon" />{' '}
                          </span>
                          <h5>Resume Builder</h5>
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <RiPagesLine className="icon" />{' '}
                          </span>
                          <h5>Job Seekar Guidence</h5>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9 col-sm-12 network_col">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Jobs
