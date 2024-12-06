import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'

const Exam = () => {
  return (
      <>
       <section className="hero_section  top_course_bg_img">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hero_content top_course_bg_img_content">
                <h1>Entrance Exams In India</h1>
                <Form className="hero_search_form">
                  <Form.Group
                    className="input_box"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      className="input_box_inner"
                      placeholder="Search Entrance Exams"
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
           

            <div className="col-lg-12 col-md-12 col-sm-12">
              {/* Exams Category */}
              <div className="white_box select_stream_course_box">
                <h3>Exams Category</h3>
                <div>
                  <ul>
                    <li>
                      <NavLink to="">
                        Management 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Medical 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Science 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Engineering 
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

            
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Exam
