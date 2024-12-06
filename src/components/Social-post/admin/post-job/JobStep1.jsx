import React from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'

const JobStep1 = () => {
  return (
    <>
      <section className="job_details_section">
        <div className="container ">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="job_details_container">
              <h3>1 of 2: Tell us about the role</h3>
              <div className="job_details">
                <h4>Description </h4>
                <p>
                  The ideal candidate is a creative problem solver who will work
                  in coordination with cross-functional teams to design,
                  develop, and maintain our next generation websites and web
                  tools. You must be comfortable working as part of a team while
                  taking the initiative to take lead on new innovations and
                  projects.
                </p>
                <h5>Responsibilities</h5>
                <ul>
                  <li>Revise, edit, proofread & optimize web content</li>
                  <li>
                    Work with cross-functionally to enhance overall user
                    experience of our platforms
                  </li>
                  <li>
                    Own various design tasks involved in the web development
                    life cycle from start to finish
                  </li>
                </ul>

                <h5>Qualifications</h5>
                <ul>
                  <li>
                    Bachelor's degree or equivalent experience in Computer
                    Science
                  </li>
                  <li>
                    At least 1 - 2 years' of experience using HTML, CSS, and
                    JavaScript
                  </li>
                  <li>
                    Proficiency in at least one server-side technology (Java,
                    PHP, NodeJS, Python, Ruby)
                  </li>
                  <li>Ability to multi-task, organize, and prioritize work</li>
                </ul>
              </div>
              <div className="job_details_skills">
                <h4>Skills </h4>
                <p>
                  Add skill keywords to make your job more visible to the right
                  candidates.
                </p>

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
                  <NavLink className="bac_btn" to="/jobPost">
                    Back
                  </NavLink>
                  <NavLink to="/JobDetails2">Next</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JobStep1
