import React from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'

const JobStep2 = () => {
  return (
    <>
      <section className="job_details_section">
        <div className="container ">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="job_details_container">
              <h3>2 of 2: Receive qualified applicants</h3>

              <div className="job_details_two">
                <h2>Applicant collection</h2>

                <div className="form_dis_flex">
                  <Form.Group className="job_form_input">
                    <Form.Label>Receive applicants</Form.Label>
                    <Form.Select>
                      <option>By Email</option>
                      <option>At an external Website</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="job_form_input">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Email Address"
                    />
                  </Form.Group>
                </div>

                <h2>Screening questions</h2>

                <p>
                  We recommend adding 3 or more questions. Applicants must
                  answer each question.
                </p>
                <div className="skills_question">
                  <h5>
                    How many years of work experience do you have with [Skill]?
                  </h5>
                  <div className="form_dis_flex">
                    <Form.Group className="job_form_input">
                      <Form.Label>Skill </Form.Label>
                      <Form.Control type="text" placeholder="PHP" />
                    </Form.Group>

                    <Form.Group className="job_form_input">
                      <Form.Label>Ideal answer (minimum):</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1 Year"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="skills_question">
                  <h5>
                  How many years of work experience do you have with [Skill]?</h5>
                  <div className="form_dis_flex">
                    <Form.Group className="job_form_input">
                      <Form.Label>Skill </Form.Label>
                      <Form.Control type="text" placeholder="PHP" />
                    </Form.Group>

                    <Form.Group className="job_form_input">
                      <Form.Label>Ideal answer (minimum):</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1 Year"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="skills_question">
                  <h5>Have you completed the following level of education: [Degree]?</h5>
                  <div className="form_dis_flex">
                    <Form.Group className="job_form_input">
                      <Form.Label>Degree  </Form.Label>
                      <Form.Control type="text" placeholder="Bachelor's Degree" />
                    </Form.Group>

                    <Form.Group className="job_form_input">
                      <Form.Label>Ideal answer (minimum):</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1 Year"
                      />
                    </Form.Group>
                  </div>
                </div>
                
              </div>

              <div className="job_details_skills">
                <h4>Add screening questions: </h4>
                <div className="skills_list">
                  <li>Web Content</li>
                  <li>Web development</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>Ruby</li>
                  <li>Computer Science</li>
                </div>

                <Form.Group className="job_form_input">
                  <Form.Label>How did you hear about LinkedIn jobs?</Form.Label>
                  <Form.Select>
                    <option>Select a Source</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                    <option>Temporary</option>
                    <option>Other</option>
                    <option>Volunteer</option>
                    <option>Internship</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="preview_btns_div">
                <div>
                  <NavLink to="/">Preview</NavLink>
                </div>
                <div>
                  <NavLink className="bac_btn" to="/JobDetails">
                    Back
                  </NavLink>
                  <NavLink to="/">post job for free</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JobStep2
