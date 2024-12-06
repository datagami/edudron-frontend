import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { ImLocation } from "react-icons/im";
import { BsFillBookmarkFill, BsStopwatch, BsDownload } from "react-icons/bs";
import {
  AiFillPushpin,
  AiFillStar,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { BiBookReader, BiRightArrowAlt } from "react-icons/bi";
import { TbBuildingCommunity } from "react-icons/tb";

import { HiOutlineOfficeBuilding, HiAcademicCap } from "react-icons/hi";
import { GiBackwardTime } from "react-icons/gi";
import { FaBed } from "react-icons/fa";

const Universities_Details = () => {
  const college_id = useSelector((state) => state.getCollegeSlice.value);
  let images = [];

  college_id?.data?.college_pics?.map((v) => {
    let x = {};
    x = {
      original: v,
      thumbnail: v,
    };
    images.push(x);
  });

  return (
    <>
      <section>
        <div className="college_deatils_banners_main">
          {/* <img
            className="img-fluid college_deatils_banners_img"
            src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=250&w=1000&mode=crop"
            alt=""
          /> */}
          <div className="container">
            <div className="college_banner_outer">
              <div>
                <img
                  className="img-fluid college_logo"
                  src="https://images.collegedunia.com/public/college_data/images/logos/uv25816.jpg?h=80&w=80&mode=stretch"
                  alt=""
                />
              </div>
              <div className="college_banner_details">
                <h3>{college_id?.data?.college_name}</h3>
                <ul>
                  <li>
                    <ImLocation />{" "}
                    <span>{college_id?.data?.college_name}, Rajasthan</span>
                  </li>
                  <li>
                    {college_id?.data?.ugc_approved == 1 ? (
                      <>
                        <BsFillBookmarkFill /> <span>UGC</span>
                      </>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <AiFillPushpin />{" "}
                    <span>Estd {college_id?.data?.est_year}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="college_details_tabs_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <ul
                class="nav nav-pills college_details_tabs mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-info-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-info"
                    type="button"
                    role="tab"
                    aria-controls="pills-info"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-courseFees-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-courseFees"
                    type="button"
                    role="tab"
                    aria-controls="pills-courseFees"
                    aria-selected="false"
                  >
                    course Fees
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-admission-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-admission"
                    type="button"
                    role="tab"
                    aria-controls="pills-admission"
                    aria-selected="false"
                  >
                    admission
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                  >
                    reviews
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-placement-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-placement"
                    type="button"
                    role="tab"
                    aria-controls="pills-placement"
                    aria-selected="false"
                  >
                    placement
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-gallery-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-gallery"
                    type="button"
                    role="tab"
                    aria-controls="pills-gallery"
                    aria-selected="false"
                  >
                    gallery
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-faculty-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-faculty"
                    type="button"
                    role="tab"
                    aria-controls="pills-faculty"
                    aria-selected="false"
                  >
                    faculty
                  </button>
                </li>
              </ul>

              <div className="col-lg-12 col-md-12 col-sm-12 "></div>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-info"
                  role="tabpanel"
                  aria-labelledby="pills-info-tab"
                >
                  <div className="college_details_tabs_content">
                    <div className="white_box">
                      <div className="writer_name">
                        <div>
                          <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
                        </div>
                        <div>
                          <h4>Akash Choudhary</h4>
                          <p>Senior Content Specialist</p>
                        </div>
                      </div>
                      <p className="coll_desc">
                        {college_id?.data?.description}
                      </p>
                    </div>

                    <div className="white_box">
                      <h2 className="box_headings">
                        {college_id?.data?.college_name} Fees & Eligibility
                      </h2>
                      <div className="college_deatsils_tables">
                        <table>
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Fees</th>
                              <th>Eligibility</th>
                            </tr>
                          </thead>
                          {college_id?.data?.course?.map((item) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{item.course}</td>
                                  <td>{item.fees}</td>
                                  <td>{item.eligibility}</td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      </div>
                    </div>

                    <div className="white_box">
                      <h2 className="box_headings">
                        Courses Offered By {college_id?.data?.college_name},
                        Jhunjhunu
                      </h2>

                      <div className="row">
                        {college_id &&
                          college_id?.data?.course?.map((item) => {
                            return (
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="College_white_box">
                                  <div className="college_box">
                                    <div>
                                      <h3>
                                        <NavLink to="">{item.course}</NavLink>
                                      </h3>
                                      <ul class="info">
                                        <li>
                                          <BsStopwatch className="icons" /> 3
                                          Year
                                        </li>
                                        <li>
                                          <BiBookReader className="icons" />{" "}
                                          Degree
                                        </li>
                                        <li>
                                          <TbBuildingCommunity className="icons" />
                                          On Campus
                                        </li>
                                        <li>
                                          <HiOutlineOfficeBuilding className="icons" />
                                          Post Graduation
                                        </li>
                                        <li>
                                          <GiBackwardTime className="icons" />
                                          Full Time
                                        </li>
                                      </ul>

                                      <div className="courses_offers_eligibility">
                                        <div>
                                          <h4>Eligibility</h4>
                                          <h5>Graduation</h5>
                                        </div>
                                        <div className="fees_col">
                                          <h4>
                                            ₹ {item.fees}{" "}
                                            <span>Total Fees </span>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="college_box_btn">
                                    <button className="apply">
                                      <NavLink to="/">
                                        Admission Guide 2022 <BiRightArrowAlt />
                                      </NavLink>
                                    </button>
                                    <button className="details">
                                      <NavLink to="/Universities_Details">
                                        Download Brochure <BsDownload />
                                      </NavLink>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <div className="white_box">
                      <h2 className="box_headings">
                        {college_id?.data?.college_name} FACILITIES
                      </h2>
                      <div className="falitities_outer">
                        <ul>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            Hostel
                          </li>
                          <li>
                            <div className="facility_bg_box">
                              <FaBed className="icon" />
                            </div>
                            LIBRARY
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-courseFees"
                  role="tabpanel"
                  aria-labelledby="pills-courseFees-tab"
                >
                  {/* Courses And Fees */}
                  <div className="college_details_tabs_content">
                    <div className="white_box">
                      <h2 className="box_headings">
                        {college_id?.data?.college_name} Fees & Eligibility
                      </h2>
                      <div className="college_deatsils_tables">
                        <table>
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Fees</th>
                              <th>Eligibility</th>
                            </tr>
                          </thead>
                          {college_id?.data?.course?.map((item) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{item.course}</td>
                                  <td>{item.fees}</td>
                                  <td>{item.eligibility}</td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                    <div className="white_box">
                      <h2 className="box_headings">
                        Courses Offered By JJTU, Jhunjhunu
                      </h2>

                      <div className="row">
                        {college_id &&
                          college_id?.data?.course.map((item) => {
                            return (
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="College_white_box">
                                  <div className="college_box">
                                    <div>
                                      <h3>
                                        <NavLink to="">{item.course}</NavLink>
                                      </h3>
                                      <ul class="info">
                                        <li>
                                          <BsStopwatch className="icons" /> 3
                                          Year
                                        </li>
                                        <li>
                                          <BiBookReader className="icons" />{" "}
                                          Degree
                                        </li>
                                        <li>
                                          <TbBuildingCommunity className="icons" />
                                          On Campus
                                        </li>
                                        <li>
                                          <HiOutlineOfficeBuilding className="icons" />
                                          Post Graduation
                                        </li>
                                        <li>
                                          <GiBackwardTime className="icons" />
                                          Full Time
                                        </li>
                                      </ul>

                                      <div className="courses_offers_eligibility">
                                        <div>
                                          <h4>Eligibility</h4>
                                          <h5>Graduation</h5>
                                        </div>
                                        <div className="fees_col">
                                          <h4>
                                            ₹ {item.fees}{" "}
                                            <span>Total Fees </span>
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="college_box_btn">
                                    <button className="apply">
                                      <NavLink to="/">
                                        Admission Guide 2022 <BiRightArrowAlt />
                                      </NavLink>
                                    </button>
                                    <button className="details">
                                      <NavLink to="/Universities_Details">
                                        Download Brochure <BsDownload />
                                      </NavLink>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-admission"
                  role="tabpanel"
                  aria-labelledby="pills-admission-tab"
                >
                  {/* admission */}
                  <div className="college_details_tabs_content admission_details_para">
                    <div className="white_box">
                      <h2 className="box_headings">Admission Details</h2>
                      {college_id?.data?.description}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                >
                  {/* Reviews */}
                  <div className="college_details_tabs_content admission_details_para">
                    <div className="white_box">
                      <h2 className="box_headings">College Rating</h2>

                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                          <h1 className="review_heading">
                            <span> 6.5</span> out of<span> 10 </span>
                          </h1>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12">
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Academic</h4>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Accommodation</h4>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Faculty</h4>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Infrastructure</h4>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Placement</h4>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 rating_main_box">
                              <div>
                                <HiAcademicCap className="icon" />
                              </div>
                              <div>
                                <h3>6.3/10</h3>
                                <h4>Social Life</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="white_box review_box">
                      <div className="review_box_main">
                        <div className="writer_name">
                          <div>
                            <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
                          </div>
                          <div className="reviewer_name">
                            <h4>Vikash Choudhary</h4>
                            <span>B. Pharma</span> <span>April 15, 2017</span>
                          </div>
                        </div>
                        <h5>"Extra ordinary College Experience"</h5>
                        <p className="coll_desc">
                          <span>Course Curriculum Overview :</span> I am a
                          student of science. And I want to go in the doctor's
                          line so this course is my comfort job. Our faculty is
                          very good in this college all are qualified Ph.D. The
                          exam is to occur twies in as early. The exam is
                          difficult.
                        </p>
                        <p className="coll_desc">
                          <span>Remarks : </span>I am doing B-pharm in this
                          every university has 60 seats so the people who got
                          good marks in 12th have been selected for these seats.
                          Applications fees are 1000 and it is gotten from
                          dispersion. There is another branch also for
                          admission.
                        </p>
                        <div className="reciew_box_rating_main">
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Social Life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Compus life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Hostel</h5>
                          </div>
                        </div>
                        <div className="like_dislike_div">
                          <ul>
                            <li>
                              {" "}
                              <button>
                                {" "}
                                <AiOutlineLike /> <span>12</span>
                              </button>{" "}
                            </li>
                            <li>
                              {" "}
                              <button>
                                <AiOutlineDislike /> <span>1</span>{" "}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="review_box_main">
                        <div className="writer_name">
                          <div>
                            <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
                          </div>
                          <div className="reviewer_name">
                            <h4>Akash Choudhary</h4>
                            <span>MCA</span> <span>April 15, 2017</span>
                          </div>
                        </div>
                        <h5>"Best university in my area"</h5>
                        <p className="coll_desc">
                          <span>Course Curriculum Overview :</span> I am a
                          student of science. And I want to go in the doctor's
                          line so this course is my comfort job. Our faculty is
                          very good in this college all are qualified Ph.D. The
                          exam is to occur twies in as early. The exam is
                          difficult.
                        </p>
                        <p className="coll_desc">
                          <span>Remarks : </span>I am doing B-pharm in this
                          every university has 60 seats so the people who got
                          good marks in 12th have been selected for these seats.
                          Applications fees are 1000 and it is gotten from
                          dispersion. There is another branch also for
                          admission.
                        </p>
                        <div className="reciew_box_rating_main">
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Social Life</h5>
                          </div>

                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Compus life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Hostel</h5>
                          </div>
                        </div>
                        <div className="like_dislike_div">
                          <ul>
                            <li>
                              {" "}
                              <button>
                                {" "}
                                <AiOutlineLike /> <span>12</span>
                              </button>{" "}
                            </li>
                            <li>
                              {" "}
                              <button>
                                <AiOutlineDislike /> <span>1</span>{" "}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-placement"
                  role="tabpanel"
                  aria-labelledby="pills-placement-tab"
                >
                  <div className="college_details_tabs_content">
                    <div className="white_box">
                      <h2 className="box_headings">JJTU Placements</h2>
                      <div className="falitities_outer">
                        <ul>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1390462079hcl.png?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514979165Nestle%20India.png?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514375272cipla-logo.jpg?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514886632Dabur%20India%20Ltd..jpg?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1390462079hcl.png?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514979165Nestle%20India.png?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514375272cipla-logo.jpg?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                          <li>
                            <img
                              className="img-fluid"
                              src="https://images.collegedunia.com/public/college_data/images/company_image/1514886632Dabur%20India%20Ltd..jpg?h=25&w=100&mode=stretch"
                              alt=""
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="white_box review_box">
                      <div className="review_box_main">
                        <div className="writer_name">
                          <div>
                            <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
                          </div>
                          <div className="reviewer_name">
                            <h4>Vikash Choudhary</h4>
                            <span>B. Pharma</span> <span>April 15, 2017</span>
                          </div>
                        </div>
                        <h5>"Extra ordinary College Experience"</h5>
                        <p className="coll_desc">
                          <span>Course Curriculum Overview :</span> I am a
                          student of science. And I want to go in the doctor's
                          line so this course is my comfort job. Our faculty is
                          very good in this college all are qualified Ph.D. The
                          exam is to occur twies in as early. The exam is
                          difficult.
                        </p>
                        <p className="coll_desc">
                          <span>Remarks : </span>I am doing B-pharm in this
                          every university has 60 seats so the people who got
                          good marks in 12th have been selected for these seats.
                          Applications fees are 1000 and it is gotten from
                          dispersion. There is another branch also for
                          admission.
                        </p>
                        <div className="reciew_box_rating_main">
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Social Life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Compus life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Hostel</h5>
                          </div>
                        </div>
                        <div className="like_dislike_div">
                          <ul>
                            <li>
                              {" "}
                              <button>
                                {" "}
                                <AiOutlineLike /> <span>12</span>
                              </button>{" "}
                            </li>
                            <li>
                              {" "}
                              <button>
                                <AiOutlineDislike /> <span>1</span>{" "}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="review_box_main">
                        <div className="writer_name">
                          <div>
                            <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
                          </div>
                          <div className="reviewer_name">
                            <h4>Akash Choudhary</h4>
                            <span>MCA</span> <span>April 15, 2017</span>
                          </div>
                        </div>
                        <h5>"Best university in my area"</h5>
                        <p className="coll_desc">
                          <span>Course Curriculum Overview :</span> I am a
                          student of science. And I want to go in the doctor's
                          line so this course is my comfort job. Our faculty is
                          very good in this college all are qualified Ph.D. The
                          exam is to occur twies in as early. The exam is
                          difficult.
                        </p>
                        <p className="coll_desc">
                          <span>Remarks : </span>I am doing B-pharm in this
                          every university has 60 seats so the people who got
                          good marks in 12th have been selected for these seats.
                          Applications fees are 1000 and it is gotten from
                          dispersion. There is another branch also for
                          admission.
                        </p>
                        <div className="reciew_box_rating_main">
                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Faculty</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>0/10</h4>
                            <h5>Placement</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Social Life</h5>
                          </div>

                          <div className="reciew_box_rating_inner">
                            <h4>6/10</h4>
                            <h5>Compus life</h5>
                          </div>
                          <div className="reciew_box_rating_inner">
                            <h4>8/10</h4>
                            <h5>Hostel</h5>
                          </div>
                        </div>
                        <div className="like_dislike_div">
                          <ul>
                            <li>
                              {" "}
                              <button>
                                {" "}
                                <AiOutlineLike /> <span>12</span>
                              </button>{" "}
                            </li>
                            <li>
                              {" "}
                              <button>
                                <AiOutlineDislike /> <span>1</span>{" "}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-gallery"
                  role="tabpanel"
                  aria-labelledby="pills-gallery-tab"
                >
                  <div className="college_details_tabs_content">
                    <ImageGallery items={images} />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-faculty"
                  role="tabpanel"
                  aria-labelledby="pills-faculty-tab"
                >
                  <div className="college_details_tabs_content">
                    <div className="white_box">
                      <h2 className="box_headings">
                        {college_id?.id?.college_name} Faculty
                      </h2>

                      <div className="row">
                        {college_id?.data?.faculty?.map((item) => {
                          return (
                            <div className="col-lg-4 col-md-6 col-sm-12 ">
                              <div className="faculty_box">
                                <h3>{item.name}</h3>
                                <h4>{item.post}</h4>
                                <p>
                                  {" "}
                                  <span>Qualification - </span> B.Tech., M.Tech
                                </p>
                                <button className="view_profile_btn">
                                  {" "}
                                  <NavLink to="">View Profile</NavLink>{" "}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Universities_Details;
