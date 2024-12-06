import React from 'react'
import { NavLink } from 'react-router-dom'
import Eng_img from '../assets/img/engineering.png'
import careers_img from '../assets/img/careers.png'


const Careers = () => {
  return (
    <>
      <section className="explore_category_section">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-12">
            <div className="explore_category_small_card">
              <img src={careers_img} alt="" />
              <h3>Popular Careers</h3>
             <NavLink className='link' to='/'>View all Careers</NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="row">
              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>IAS Officer</h3>
                </div>
              </div>


              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Police Officer</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Doctor</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Pilot</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>IAS Officer</h3>
                </div>
              </div>


              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Police Officer</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Doctor</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Pilot</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>IAS Officer</h3>
                </div>
              </div>


              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Police Officer</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Doctor</h3>
                </div>
              </div>

              <div className=" col-xl-2 col-lg-3 col-md-3 col-sm-6">
                <div className="explore_category_small_box">
                  <img src={Eng_img} alt="" />
                  <h3>Pilot</h3>
                </div>
              </div>

             

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
