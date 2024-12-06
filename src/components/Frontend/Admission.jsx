import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination'

import Modal from 'react-bootstrap/Modal'

const Admission = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <section className="hero_section  top_course_bg_img">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hero_content top_course_bg_img_content">
                <h1>Get Admission in Best Colleges</h1>
                <Form className="hero_search_form">
                  <Form.Group
                    className="input_box"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      className="input_box_inner"
                      placeholder="Search your dream college"
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

      <section className="college_main_box_section">
        <div className="container">
          <h2 className="box_headings">Your Dream college List</h2>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="college_main_box">
                <img
                  className="img-fluid"
                  src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=160&w=313&mode=stretch"
                  alt=""
                />
                <div className="college_name_date_button_main">
                  <div className="college_name_date_button">
                    <div>
                      <p className="date">December 2nd, 2022</p>
                      <p className="courses">
                        <span>B.COM</span> <span>B.SC</span>
                      </p>
                    </div>
                    <div className="apply">
                      <NavLink to="" onClick={handleShow}>
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                  <h3>
                    <NavLink to="/Universities_Details">
                      Jagdishprasad Jhabarmal Tibrewala University (JJTU)
                      Admission 2022:Admission, Important Dates
                    </NavLink>
                  </h3>
                  <p>
                    Jagdishprasad Jhabarwal Tibervala University was established
                    in the year 2009 in Jhunjhunu, Rajasthan. The university is
                    recognized by UGC, New Delhi. JJT University offers multiple
                    UG, PG, Doctoral, Diploma, PG Diploma, Certificate
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="college_main_box">
                <img
                  className="img-fluid"
                  src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=160&w=313&mode=stretch"
                  alt=""
                />
                <div className="college_name_date_button_main">
                  <div className="college_name_date_button">
                    <div>
                      <p className="date">December 2nd, 2022</p>
                      <p className="courses">
                        <span>B.COM</span> <span>B.SC</span>
                      </p>
                    </div>
                    <div className="apply">
                      <NavLink to="" onClick={handleShow}>
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                  <h3>
                    <NavLink to="">
                      Jagdishprasad Jhabarmal Tibrewala University (JJTU)
                      Admission 2022:Admission, Important Dates
                    </NavLink>
                  </h3>
                  <p>
                    Jagdishprasad Jhabarwal Tibervala University was established
                    in the year 2009 in Jhunjhunu, Rajasthan. The university is
                    recognized by UGC, New Delhi. JJT University offers multiple
                    UG, PG, Doctoral, Diploma, PG Diploma, Certificate
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="college_main_box">
                <img
                  className="img-fluid"
                  src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=160&w=313&mode=stretch"
                  alt=""
                />
                <div className="college_name_date_button_main">
                  <div className="college_name_date_button">
                    <div>
                      <p className="date">December 2nd, 2022</p>
                      <p className="courses">
                        <span>B.COM</span> <span>B.SC</span>
                      </p>
                    </div>
                    <div className="apply">
                      <NavLink to="" onClick={handleShow}>
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                  <h3>
                    <NavLink to="">
                      Jagdishprasad Jhabarmal Tibrewala University (JJTU)
                      Admission 2022:Admission, Important Dates
                    </NavLink>
                  </h3>
                  <p>
                    Jagdishprasad Jhabarwal Tibervala University was established
                    in the year 2009 in Jhunjhunu, Rajasthan. The university is
                    recognized by UGC, New Delhi. JJT University offers multiple
                    UG, PG, Doctoral, Diploma, PG Diploma, Certificate
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="college_main_box">
                <img
                  className="img-fluid"
                  src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=160&w=313&mode=stretch"
                  alt=""
                />
                <div className="college_name_date_button_main">
                  <div className="college_name_date_button">
                    <div>
                      <p className="date">December 2nd, 2022</p>
                      <p className="courses">
                        <span>B.COM</span> <span>B.SC</span>
                      </p>
                    </div>
                    <div className="apply">
                      <NavLink to="" onClick={handleShow}>
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                  <h3>
                    <NavLink to="">
                      Jagdishprasad Jhabarmal Tibrewala University (JJTU)
                      Admission 2022:Admission, Important Dates
                    </NavLink>
                  </h3>
                  <p>
                    Jagdishprasad Jhabarwal Tibervala University was established
                    in the year 2009 in Jhunjhunu, Rajasthan. The university is
                    recognized by UGC, New Delhi. JJT University offers multiple
                    UG, PG, Doctoral, Diploma, PG Diploma, Certificate
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="college_main_box">
                <img
                  className="img-fluid"
                  src="https://images.collegedunia.com/public/college_data/images/appImage/1590642511university.jpg?h=160&w=313&mode=stretch"
                  alt=""
                />
                <div className="college_name_date_button_main">
                  <div className="college_name_date_button">
                    <div>
                      <p className="date">December 2nd, 2022</p>
                      <p className="courses">
                        <span>B.COM</span> <span>B.SC</span>
                      </p>
                    </div>
                    <div className="apply">
                      <NavLink to="" onClick={handleShow}>
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                  <h3>
                    <NavLink to="">
                      Jagdishprasad Jhabarmal Tibrewala University (JJTU)
                      Admission 2022:Admission, Important Dates
                    </NavLink>
                  </h3>
                  <p>
                    Jagdishprasad Jhabarwal Tibervala University was established
                    in the year 2009 in Jhunjhunu, Rajasthan. The university is
                    recognized by UGC, New Delhi. JJT University offers multiple
                    UG, PG, Doctoral, Diploma, PG Diploma, Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </section>

      <Modal className='apply_popup'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="popup_details_col">
                  <h3>How Edudron helps you in Admission</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>Brochure Details</h5>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>Check Details Fees</h5>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>Shortlist & Apply</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>24/7 Counselling</h5>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>Scholarships</h5>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="admission_popup_details_box">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-icon/documents_318-916705.jpg?size=338&ext=jpg&uid=R85841513&ga=GA1.2.2037322370.1669199958&semt=sph"
                          alt=""
                        />
                        <h5>Application Deadlines</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="admission_popup_form_box">
                  <div className="admission_popup_college_name">
                    <img
                      className="img-fluid"
                      src="https://images.collegedunia.com/public/college_data/images/logos/1628582356logo.jpeg?h=50&w=50&mode=stretch"
                      alt=""
                    />
                    <div>
                      <h4>Register Now To Apply</h4>
                      <h5>K J Somaiya Institute of Management</h5>
                    </div>
                  </div>
                  <div className="popup_form">
                    <Form>
                      <Form.Group className="form_group">
                        {/* <Form.Label>Name</Form.Label> */}
                        <Form.Control
                          className="input_box"
                          type="name"
                          placeholder="Enter your full name"
                        />
                      </Form.Group>

                      <Form.Group className="form_group">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control
                          className="input_box"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>

                      <Form.Group className="form_group">
                        {/* <Form.Label>Mobile Number</Form.Label> */}
                        <Form.Control
                          className="input_box"
                          type="number"
                          placeholder="Enter your mobile number"
                        />
                      </Form.Group>

                      <Form.Group className="form_group">
                        <Form.Select className="input_box">
                          <option>Select Prefered Stream</option>
                          <option>Stream 1</option>
                          <option>Stream 2</option>
                          <option>Stream 3</option>
                          <option>Stream 4</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="form_group">
                        <Form.Select className="input_box">
                        <option>Select Program Type</option>
                          <option>UG</option>
                          <option>PG</option>
                          <option>Diploma</option>
                        </Form.Select>
                      </Form.Group>

                      <Button variant="primary" className="form_submit_btn" type="submit">
                       Apply
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default Admission
