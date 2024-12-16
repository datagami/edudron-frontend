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
        <div className="row">
          <div className="col-md-8">
            {courseList?.map((item) => (
              <div className="course-card p-3">
                <div className="course-card-top">
                  <h5 className="mb-0 ">{item?.courseName}</h5>
                  <span>{item?.duration}</span>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="course-card-point">
                      <p className="mb-0">Total Tuition Fees</p>
                      <span>{item?.tuitionFees}</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="course-card-point">
                      <p className="mb-0">Total Tuition Fees</p>
                      <span>{item?.eligibility}</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="my-btn-cus">Brochure</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="course-details">
              <div className="head">
                <h5 className="mb-0">
                  B.Tech. in Computer Science and Engineering
                </h5>
                <small>3 Year</small>
              </div>
              <div className="mt-3">
                <ul>
                  <li>Computer Science and Engineering</li>
                  <li>Electrcal and Engineering</li>
                </ul>
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
