import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Careers from './Careers'
import College from './College'
import Courses from './Courses'
import Exams from './Exams'
// <Tab eventKey="Careers" title="Careers">
//                <Careers/>
//                 </Tab>
//                 <Tab eventKey="Exams" title="Exams" s>
//                  <Exams/>
//                 </Tab>
const Explore_sections = () => {
  return (
    <>
      <section className="Explorer_all_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 section_headeing_row">
              <h1 className="section_heading">Edudron Finder</h1>
              <h3 className="section_sub_heading">
                {' '}
                Explore <span> 35000+</span> Colleges, <span> 200+</span> Exams
                &amp; More
              </h3>
              <p className="section_para">
                Reset your research strategy by browsing through our lists of
                top colleges, exams, courses and careers based on your area of
                interest!
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Tabs
                defaultActiveKey="Colleges"
                id="uncontrolled-tab-example"
                className="Explorer_buttons_outer"
              >
                <Tab eventKey="Colleges" title="Colleges">
                 <College/>
                </Tab>
                
                <Tab eventKey="Courses" title="Courses">
                <Courses/>
                </Tab>
                
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Explore_sections
