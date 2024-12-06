import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsDownload, BsStopwatch } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { TbBuildingCommunity } from "react-icons/tb";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCollageDetailService } from "../../../services/APIServices";

const CollageInfo = ({ collageInfo }) => {
  const college_id = useSelector((state) => state.getCollegeSlice.value);

  return (
    <div className="college_details_tabs_content">
      {/* <div className="white_box">
        <div className="writer_name">
          <div>
            <img src="https://images.collegedunia.com/public/image/09-Mar_10:52_collegedunia%20team.jpeg?h=35&w=35&mode=stretch" />
          </div>
          <div>
            <h4>Akash Choudhary</h4>
            <p>Senior Content Specialist</p>
          </div>
        </div>
        <p className="coll_desc">{college_id?.data?.description}</p>
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
      </div> */}

      <div
        className="white_box"
        dangerouslySetInnerHTML={{ __html: collageInfo }}
      >
        {/* <h2 className="box_headings">
          Courses Offered By {college_id?.data?.college_name}, Jhunjhunu
        </h2> */}
        {/* <div className="row">
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
                            <BsStopwatch className="icons" /> 3 Year
                          </li>
                          <li>
                            <BiBookReader className="icons" /> Degree
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
                              ₹ {item.fees} <span>Total Fees </span>
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
        </div> */}
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
  );
};

export default CollageInfo;
