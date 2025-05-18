import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { api_instance, BASE_URL_IMAGE } from "../Header/HeaderApi`s";
import { useDispatch, useSelector } from "react-redux";
import { getCollegeId } from "../../../Redux/slice/getCollegeSlice";
import { collegeListAction } from "../../../Redux/slice/allCollegeList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  search_by_stream,
  search_by_name,
  search_by_state,
  search_by_course,
  search_by_city,
} from "../../../Redux/slice/search_values_college";
import { useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getCollageService } from "../../../services/APIServices";
const TopUniversities = () => {
  const [colleges, setColleges] = useState([]);
  const [colleges2, setColleges2] = useState([]);
  const [AllStream, setAllStream] = useState([]);
  const [AllCourse, setAllCourse] = useState([]);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = useState("");
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const searchby = useSelector((state) => state.searchCollegeSlice.value);
  const college_by_id = useSelector((state) => state.getCollegeSlice.value);
  const [checked, setChecked] = useState("");
  // console.log(college_by_id)
  const user_data = JSON.parse(localStorage.getItem("login_result"));
  //=========================addmission query========================================================

  const [addCourseValue, setAddCourseValue] = useState("");

  const handleAddCourseChange = (event) => {
    setAddCourseValue(event.target.value);
  };

  //=========================================stream checked=======================================
  const [countDoc, setCountDoc] = useState("");

  const [collageListData, setCollageListData] = useState([]);

  useMemo(async () => {
    const res = await getCollageService();
    setCollageListData(res?.data);
  }, []);
  console.log("collageListData", collageListData);

  function get_college(search) {
    // setIsLoading(true)
    api_instance
      .get(
        `/api/get-colleges?stream=${searchby.search_by_stream ?? ""}&course=${
          searchby.search_by_course
        }&state=${searchby.search_by_state ?? ""}&city=${
          searchby.search_by_city ?? ""
        }&name=${searchby.search_by_name ?? ""}&page=${page}&limit=${10}`
      )
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          dispatch(collegeListAction(response.data));
          setTotalPages(response.data.Total);
          setColleges(response.data.data);
          setCountDoc(response.data.count);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  const handleCheckStream = (event) => {
    dispatch(search_by_course(""));
    dispatch(search_by_name(""));
    dispatch(search_by_city(""));
    var updatedListStream = [...searchby.search_by_stream];
    if (event.target.checked) {
      console.log(event.target.id);
      updatedListStream = [...searchby.search_by_stream, event.target.id];
      if (updatedListStream) {
        setChecked(updatedListStream);
        console.log(updatedListStream);
        dispatch(search_by_stream(updatedListStream));
      }
    } else {
      updatedListStream.splice(
        searchby.search_by_stream.indexOf(event.target._id),
        1
      ); // araay list
      setChecked(updatedListStream);
      dispatch(search_by_stream(updatedListStream));
      get_college();
    }
  };
  const handleCheckState = (event) => {
    dispatch(search_by_course(""));
    dispatch(search_by_name(""));
    dispatch(search_by_city(""));
    var updatedListState = [...searchby.search_by_state];
    if (event.target.checked) {
      console.log(event.target.id);
      updatedListState = [...searchby.search_by_state, event.target.id];
      if (updatedListState) {
        setChecked(updatedListState);
        dispatch(search_by_state(updatedListState));
      }
    } else {
      updatedListState.splice(
        searchby.search_by_state.indexOf(event.target.id),
        1
      ); // araay list
      setChecked(updatedListState);
      dispatch(search_by_state(updatedListState));
      get_college();
    }
  };

  const handleCheckCourse = (event) => {
    dispatch(search_by_name(""));
    dispatch(search_by_city(""));
    var updatedListCourse = [...searchby.search_by_course];
    if (event.target.checked) {
      console.log(event.target.id);
      updatedListCourse = [...searchby.search_by_course, event.target.id];
      if (updatedListCourse) {
        setChecked(updatedListCourse);
        dispatch(search_by_course(updatedListCourse));
      }
    } else {
      updatedListCourse.splice(
        searchby.search_by_course.indexOf(event.target._id),
        1
      );
      setChecked(updatedListCourse);
      dispatch(search_by_course(updatedListCourse));
      get_college();
    }
  };

  function get_college2() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-colleges?search=&name=`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          setColleges2(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(() => {
    get_college2();
  }, []);

  useEffect(() => {
    get_college();
  }, [
    searchby.search_by_name,
    searchby.search_by_stream,
    searchby.search_by_course,
    searchby.search_by_state,
    searchby.search_by_city,
    page,
  ]);

  const getCollege_id = (id) => {
    function get_college_by_id(id) {
      // setIsLoading(true)
      api_instance
        .get(`/api/get-collegebyid/${id}`)
        .then((response) => {
          if (response) {
            // setIsLoading(false)
            console.log(response.data);
            dispatch(getCollegeId(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          // setIsLoading(false)
        });
    }
    get_college_by_id(id);
  };

  let stream;
  stream =
    colleges2 &&
    colleges2.map((v) => {
      return v.stream?.map((v) => {
        return v.stream;
      });
    });
  const streamCounts = {};
  stream.forEach((element) => {
    streamCounts[element] = (streamCounts[element] || 0) + 1;
  });

  let course = [];
  colleges2 &&
    colleges2.map((v) => {
      return v.courses?.map((v) => {
        course.push({
          course: v.course,
          _id: v._id,
        });
      });
    });
  function getUnique(arr, comp) {
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  const elementCounts = {};
  course.forEach((element) => {
    elementCounts[element.course] = (elementCounts[element.course] || 0) + 1;
  });

  const ar =
    colleges2 &&
    colleges2.map((item) => {
      return item.course;
    });
  const arr = ar.flat();
  const uniqueStream = arr.reduce((acc, current) => {
    const streamId = acc.map((item) => item.streamId);
    if (!streamId.includes(current.streamId)) {
      acc.push(current);
    }
    return acc;
  }, []);
  const uniqueCourse = arr.reduce((acc, current) => {
    const courseIds = acc.map((item) => item.courseId);
    if (!courseIds.includes(current.courseId)) {
      acc.push(current);
    }
    return acc;
  }, []);

  const stateArr = colleges2.map((item) => {
    return item.state;
  });

  const uniqueState = stateArr.reduce((acc, current) => {
    const stateId = acc.map((item) => item.stateId);
    if (!stateId.includes(current.stateId)) {
      acc.push(current);
    }
    return acc;
  }, []);

  const addmissionRawData = {
    studentFullname: user_data?.data.fullname,
    studentEmail: user_data?.data.email,
    studentPhone: user_data?.data.phone,
    studentCity: user_data?.data.city,
    studentCourse: addCourseValue,
    collegeId: college_by_id?.data?._id,
    studentId: user_data?.data._id,
  };

  const handleAddmissionSubmit = (e) => {
    e.preventDefault();
    api_instance
      .post(`/api/create-add-query`, addmissionRawData)
      .then((response) => {
        if (response) {
          handleClose();
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
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

          <div className="row latest_notification_row">
            <div className="col-lg-12">
              <div>
                <h3>Latest Notifications</h3>
                <marquee direction="up" height="100px" scrollamount="2">
                  <ul>
                    <li>
                      <span>28 November, 2022 :</span>
                      <NavLink to="">
                        IIT Madras Students’ Raftar Formula Racing Team Develop
                        First Electric Racing Car; Details Here
                      </NavLink>
                    </li>
                    <li>
                      <span>28 November, 2022 :</span>
                      <NavLink to="">
                        IIT Madras Students’ Raftar Formula Racing Team Develop
                        First Electric Racing Car; Details Here
                      </NavLink>
                    </li>
                  </ul>
                </marquee>
              </div>
            </div>
          </div>

          <div className="row college_filter_row">
            <div className="col-lg-3 col-md-4 col-sm-12 college_filter_col">
              <div className="">
                <div className="college_filter_top_heading">
                  <h4>FOUND {colleges?.length} COLLEGES</h4>
                  <button>Set Default</button>
                </div>
                <div className="filter_main">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button filter_btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Stream"
                          aria-expanded="true"
                          aria-controls="Stream"
                        >
                          Stream
                        </button>
                      </h2>
                      <div
                        id="Stream"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              {uniqueStream &&
                                uniqueStream.map((item, i) => {
                                  return (
                                    <li className="filter" key={item.streamId}>
                                      <input
                                        className="filter_input_check"
                                        type="checkbox"
                                        name="course"
                                        id={item.streamId}
                                        value={item.stream}
                                        onClick={handleCheckStream}
                                      />
                                      <label>
                                        {" "}
                                        {item?.stream?.toUpperCase()}
                                      </label>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed filter_btn "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          State
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              {uniqueState &&
                                uniqueState?.map((item, i) => {
                                  return (
                                    <li className="filter" key={item.stateId}>
                                      <input
                                        className="filter_input_check"
                                        type="checkbox"
                                        name="state"
                                        id={item.stateId}
                                        value={item.state}
                                        onClick={handleCheckState}
                                      />
                                      <label> {item.state}</label>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed filter_btn"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Course
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="filter_body">
                            <ul>
                              {uniqueCourse &&
                                uniqueCourse.map((item, i) => {
                                  return (
                                    <li className="filter" key={item.courseId}>
                                      <input
                                        className="filter_input_check"
                                        type="checkbox"
                                        name="course"
                                        id={item.courseId}
                                        value={item.course}
                                        onClick={handleCheckCourse}
                                      />
                                      <label> {item.course}</label>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12">
              {/* select stream */}
              <div className="white_box select_stream_course_box">
                <h3></h3>
                <div>
                  <ul>
                    {AllStream.map((item, i) => {
                      return (
                        <li key={item._id} style={{ display: "flex" }}>
                          <input
                            style={{ margin: "4px" }}
                            type="checkbox"
                            name="course"
                            id={item._id}
                            value={item.name}
                          />
                          <label> {item.name}</label>
                        </li>
                      );
                    })}
                    {/* {colleges2 &&
                      colleges2.map((value, index) => {
                        return value.stream.map((value, index) => {
                          return (
                            <li key={index}>
                              <NavLink to="">
                                <span
                                  className="me-1"
                                  onClick={() => {
                                    dispatch(search_by_name(value.stream));
                                    dispatch(search_by_course(""));
                                    dispatch(search_by_state(""));
                                    dispatch(search_by_stream(""));
                                  }}
                                >
                                  {value.stream}
                                </span>
                                <span>{value.stream.length}</span>
                              </NavLink>
                            </li>
                          );
                        });
                      })} */}

                    {/* <li>
                      <NavLink to="">
                        Medical <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Science <span>(1236)</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Engineering <span>(1236)</span>
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="white_box select_stream_course_box">
                <h3></h3>

                <div>
                  <ul>
                    {AllCourse.map((item, i) => {
                      return (
                        <li key={item._id} style={{ display: "flex" }}>
                          <input
                            style={{ margin: "4px" }}
                            type="checkbox"
                            name="course"
                            id={item._id}
                            value={item.name}
                          />
                          <label> {item.name}</label>
                        </li>
                      );
                    })}
                    {/* {getUnique(course, "course") &&
                      getUnique(course, "course").map((value) => {
                        return (
                          <li key={value._id}>
                            <NavLink to="">
                              <span
                                className="me-1"
                                onClick={() => {
                                  dispatch(search_by_name(value.course));
                                  dispatch(search_by_course(""));
                                  dispatch(search_by_state(""));
                                  dispatch(search_by_stream(""));
                                }}
                              >
                                {value.course}
                              </span>
                              <span>{value.course}</span>
                            </NavLink>
                          </li>
                        );
                      })} */}
                  </ul>
                </div>
              </div>

              <div className="row">
                {collageListData.length > 0 ? (
                  collageListData &&
                  collageListData?.map((item) => {
                    return (
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="College_white_box">
                          <div className="college_box">
                            <div>
                              <img
                                className="img-fluid"
                                src={`${BASE_URL_IMAGE}/${item.collageIcon}`}
                              />
                            </div>
                            <div>
                              <h3>
                                <NavLink to={`/collage-details/${item?._id}`}>
                                  {item?.collageName}
                                </NavLink>
                              </h3>
                              <ul class="info">
                                <li>
                                  <span> Approved by:</span> UGC BCI PCI AIU
                                  Council of Architecture (COA) NCTE ACU
                                  Government of Haryana
                                </li>
                                <li>
                                  <span>Type:</span> Private
                                </li>
                              </ul>
                              <p>{item?.description}</p>
                            </div>
                          </div>
                          <div className="college_box_btn">
                            <button className="apply">
                              <NavLink
                                to="#"
                                onClick={() => {
                                  // handleShow();
                                  // getCollege_id(item._id);
                                }}
                              >
                                Apply Now
                              </NavLink>
                            </button>
                            <Link
                              to={`/collage-details/${item?._id}`}
                              target="_blank"
                            >
                              <button className="details">More Details</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 mx-auto"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "350px",
                    }}
                  >
                    <h1>No Result Found</h1>
                  </div>
                )}
              </div>
              {/* <div className="row">
                {colleges.length > 0 ? (
                  colleges &&
                  colleges?.map((item) => {
                    return (
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="College_white_box">
                          <div className="college_box">
                            <div>
                              <img
                                className="img-fluid"
                                src={item.college_pics[0]}
                                alt=""
                              />
                            </div>
                            <div>
                              <h3>
                                <NavLink to="">{item.college_name}</NavLink>
                              </h3>
                              <ul class="info">
                                <li>
                                  <span> Approved by:</span> UGC BCI PCI AIU
                                  Council of Architecture (COA) NCTE ACU
                                  Government of Haryana
                                </li>
                                <li>
                                  <span>Type:</span> Private
                                </li>
                              </ul>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <div className="college_box_btn">
                            <button className="apply">
                              <NavLink
                                to="#"
                                onClick={() => {
                                  handleShow();
                                  getCollege_id(item._id);
                                }}
                              >
                                Apply Now
                              </NavLink>
                            </button>
                            <button className="details">
                              <span onClick={() => getCollege_id(item._id)}>
                                <a href="/Universities_Details" target="_blank">
                                  More Details
                                </a>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 mx-auto"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "350px",
                    }}
                  >
                    <h1>No Result Found</h1>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
        {countDoc > 10 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        ) : (
          ""
        )}
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        className="apply_modal_width"
        role="apply_dialog"
        size="xl"
      >
        <Modal.Body closeButton>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 apply_col mt-2">
                <div className="apply_box_parent">
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                </div>
                <div className="apply_box_parent">
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                </div>
                <div className="apply_box_parent">
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                  <div className="apply_box">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/05/21/23/31/education-3420031__340.png"
                      alt=""
                      className="img-fluid apply_box_image"
                    />
                    <div>Brochure Details</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-3">
                <div className="row my-2">
                  <div
                    className="col-12 "
                    style={{
                      display: "flex",
                      borderBottom: "2px solid lightgray",
                    }}
                  >
                    <span className="apply_logo_parent">
                      <img
                        src="https://cdn.pixabay.com/photo/2012/04/12/13/01/compass-29936__340.png"
                        alt=""
                        className="img-fluid apply_logo"
                      />
                    </span>
                    <div>
                      <h3 className="register_how_to_apply">
                        Register Now To Apply
                      </h3>
                      <h4>
                        {college_by_id?.data?.college_name},
                        {college_by_id?.data?.city?.city}
                      </h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mt-3">
                      <Form onSubmit={handleAddmissionSubmit}>
                        <label className="pb-3 " style={{ color: "tomato" }}>
                          Edit basic details
                        </label>
                        <Form.Select
                          aria-label="Default select example"
                          className="admissin_query"
                          value={addCourseValue}
                          onChange={handleAddCourseChange}
                        >
                          <option>Select Course</option>
                          {college_by_id &&
                            college_by_id?.data?.course.map((item) => {
                              console.log(item);
                              return (
                                <option value="item.course">
                                  {item.course}
                                </option>
                              );
                            })}
                        </Form.Select>
                        <p style={{ fontSize: "13px", color: "gray" }}>
                          By submitting this form, you accept and agree to our{" "}
                          <Link> Terms of Use.</Link>
                        </p>
                        <div className="text-end mt-3">
                          <button
                            className=""
                            style={{
                              color: "white",
                              backgroundColor: "tomato",
                              fontSize: "20px",
                              padding: "10px 18px",
                              border: "1px solid white",
                              borderRadius: "3px",
                            }}
                          >
                            SUBMIT
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopUniversities;
