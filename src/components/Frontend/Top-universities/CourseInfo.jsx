import React, { useEffect, useState } from "react";
import { BiBookReader, BiRightArrowAlt } from "react-icons/bi";
import { BsDownload, BsStopwatch } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { TbBuildingCommunity } from "react-icons/tb";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCourseService } from "../../../services/APIServices";

const CourseInfo = ({ courseInfo, id }) => {
  const college_id = useSelector((state) => state.getCollegeSlice.value);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCourseService(id);
      setCourseList(data);
    })();
  }, []);

  console.log("courseList", courseList);

  return (
    <div className="college_details_tabs_content">
      <div
        className="white_box"
        dangerouslySetInnerHTML={{ __html: courseInfo }}
      ></div>

      <div className="white_box">
        <div className="col-md-8">
          <div className="course-card">
            <div className="border-bottom-1 shadow rounded-md p-3">
              <h5>Master of Technology [M.Tech] </h5>
              <span>2 Year</span>
              <span>Full Time</span>
            </div>
            <div>
              <div className="">
                <p>Total Tuition Fees</p>
                <span>₹8 L Get Fee Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="white_box">
        <h2 className="box_headings">Courses Offered By JJTU, Jhunjhunu</h2>

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
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
