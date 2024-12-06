import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'



import {
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai'


const Review = () => {
  return (
    <>
      <section className="hero_section  top_course_bg_img">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hero_content top_course_bg_img_content">
                <h1>Find reviews for over 25000 Colleges</h1>
                <Form className="hero_search_form">
                  <Form.Group
                    className="input_box"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      className="input_box_inner"
                      placeholder="Search for college review"
                    />
                    <Button type="submit" className="hero_search_form_btn">
                      <BiSearch className="hero_search_icon" />
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top_universities_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="main_heading">
                List of Top Colleges in India Based on 2022 Ranking
              </h1>
              <img
                className="img-fluid"
                src="https://images.collegedunia.com//public/image/client_images_new/TD-BANNER20220623203822.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="row college_filter_row">
            <div className="col-lg-3 col-md-4 col-sm-12 college_filter_col">
              <div className="">
                <div className="college_filter_top_heading">
                  <h4>FOUND 18818 COLLEGES</h4>
                  <button>Set Default</button>
                </div>
                <div className="filter_main">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button filter_btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Stream"
                          aria-expanded="true"
                          aria-controls="Stream"
                        >
                          Stream
                        </button>
                      </h2>
                      <div
                        id="Stream"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              <li className="filter">
                                <input type="checkbox" value="Management" />
                                <label> Management</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Medical" />
                                <label> Medical</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Science" />
                                <label> Science</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Management" />
                                <label> Management</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Medical" />
                                <label> Medical</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Science" />
                                <label> Science</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed filter_btn "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          State
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              <li className="filter">
                                <input type="checkbox" value="Rajasthan" />
                                <label> Rajasthan</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="Panjab" />
                                <label> Panjab</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed filter_btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Courses
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              <li className="filter">
                                <input type="checkbox" value="BCA" />
                                <label> BCA</label>
                              </li>
                              <li className="filter">
                                <input type="checkbox" value="MCA" />
                                <label> MCA</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12">
              {/* select stream */}
              <div className="white_box select_stream_course_box">
                <h3>Select Stram</h3>
                <div>
                  <ul>
                    <li>
                      <NavLink to="">
                        Management <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Medical <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Science <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Engineering <span>(1236)</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="white_box select_stream_course_box">
                <h3>Select Course</h3>
                <div>
                  <ul>
                    <li>
                      <NavLink to="">
                        BCA <span>(136)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        MCA <span>(16)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        B.TECH <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        M.TECH <span>(36)</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="">
                        BCA <span>(136)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        MCA <span>(16)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        B.TECH <span>(1236)</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
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
                            {' '}
                            <button>
                              {' '}
                              <AiOutlineLike /> <span>12</span>
                            </button>{' '}
                          </li>
                          <li>
                            {' '}
                            <button>
                              <AiOutlineDislike /> <span>1</span>{' '}
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
                            {' '}
                            <button>
                              {' '}
                              <AiOutlineLike /> <span>12</span>
                            </button>{' '}
                          </li>
                          <li>
                            {' '}
                            <button>
                              <AiOutlineDislike /> <span>1</span>{' '}
                            </button>
                          </li>
                        </ul>
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
  )
}

export default Review
