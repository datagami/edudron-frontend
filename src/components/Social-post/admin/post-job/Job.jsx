import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import jobpost from '../../../Frontend/assets/img/job-post.svg'
import { NavLink } from 'react-router-dom'

const Job = () => {
  return (
    <>
      <section className="job_post_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job_post_form">
                <Form>
                  <h1>Find a great hire, fast</h1>
                  <p>Rated #1 in increasing quality of hire.1</p>

                  <Form.Group className="job_form_input">
                    <Form.Label>Job title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the title you are hiring for"
                    />
                  </Form.Group>

                  <Form.Group className="job_form_input">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Hybrid Plus Infotech Solution PVT LTD"
                    />
                  </Form.Group>

                  <Form.Group className="job_form_input">
                    <Form.Label>Workplace type</Form.Label>
                    <Form.Select>
                      <option>On-Site</option>
                      <option>Hybrid</option>
                      <option>Remote</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="job_form_input">
                    <Form.Label>Job location</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group className="job_form_input">
                    <Form.Label>Job type</Form.Label>
                    <Form.Select>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Contract</option>
                      <option>Temporary</option>
                      <option>Other</option>
                      <option>Volunteer</option>
                      <option>Internship</option>
                    </Form.Select>
                  </Form.Group>

                  <Button type="submit" className="jobpost_submit_btn">
                  <NavLink to="/JobDetails">Get Started for Free</NavLink>
                  </Button>
                 
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='job_post_second_section'> 
      <div className="container">
      <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 content">
                <h2>Rated #1 in increasing quality of hire1</h2>
                <p>
                  Post your job on the world’s largest professional network and
                  use simple tools to prioritize the most qualified candidates -
                  so you can find the people you want to interview, faster.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className='img-fluid' src={jobpost} alt="" />
              </div>
            </div>
            </div>
      </section>
    </>
  )
}

export default Job
