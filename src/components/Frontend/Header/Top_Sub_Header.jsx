import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BiUser } from "react-icons/bi";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { loginFunAction } from "../../../Redux/slice/loginFun";
import { loginStatusAction } from "../../../Redux/slice/loginStatusSlice";
import { socket } from "../../../App";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  email,
  password,
  login_error,
  login_result,
} from "../../../Redux/slice/Forms/login";
import {
  signup_name,
  signup_email,
  signup_number,
  signup_strream,
  signup_state,
  signup_programtype,
  signup_password,
  signup_confirm_password,
  signup_error,
  signup_country,
  signup_city,
  signup_username,
} from "../../../Redux/slice/Forms/signup";
import { useDispatch, useSelector } from "react-redux";
import { Blocks } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Form/formstyle.css";
import { api_instance, usePostFetch } from "./HeaderApi`s";
import { useEffect } from "react";

const Top_Sub_Header = () => {
  const login_input = useSelector((state) => state?.loginSlice?.value);
  const signup_input = useSelector((state) => state?.signupSlice?.value);
  const loginStatus = useSelector((state) => state?.loginStatusSlice?.value);
  const [isLoading, setIsLoading] = useState(false);
  const [handleForgotPassword, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  console.log(loginStatus);
  const dispatch = useDispatch();
  const localStorage_login = JSON.parse(localStorage.getItem("login_result"));
  const navigate=useNavigate()
  // console.log(localStorage_login);
  // const user={
  //   _id:localStorage_login?._id,
  //   followers:3
  // }
  //   const user_join=()=>{
  //     socket.emit('joinUser',user)
  //   }

  const handleCloseForgot = () => {
    setShowForgot(false);
    setForgotEmail("");
  };
  const handleShowForgot = () => setShowForgot(true);

  // ===========HOOKS==============

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");

  //===================================login toaster===================================

  //=================================login api===================================================================
  const login_data = {
    email: login_input?._email,
    password: login_input?._password,
  };
  const signup_data = {
    fullname: signup_input?.signup_name,
    phone: signup_input?.signup_number,
    email: signup_input.signup_email,
    password: signup_input.signup_password,
    confirm_password: signup_input.signup_confirm_password,
    country: signup_input.signup_country,
    state: signup_input.signup_state,
    city: signup_input.signup_city,
    course: signup_input.signup_programtype,
    username: signup_input.signup_username,
  };
  const loginapi = () => {
    setIsLoading(true);
    api_instance
      .post("/api/login", login_data)
      .then((response) => {
        dispatch(login_result(response.data?.data));
        // user_join();
        // console.log(login_input)
        if (response) {
          localStorage.setItem("login_result", JSON.stringify(response.data));
          sessionStorage.setItem("login_result", JSON.stringify(response.data));
          LoginhandleClose();
          dispatch(email(""));
          dispatch(password(""));
          setIsLoading(false);
          toast.success("Login Successfull", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { color: "white", backgroundColor: "#61F292" },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error(error?.response?.data?.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { color: "white", backgroundColor: "red" },
        });
      });
    // console.log(signup_input.signup_error);
  };
  //=============login api ends====================================================================================

  //=================================================SIGNUP API=====================================================
  const signupapi = () => {
    setIsLoading(true);
    api_instance
      .post("/api/register", signup_data)
      .then((response) => {
        console.log(response);
        dispatch(login_result(response.data));

        if (response) {
          //  localStorage.setItem('login_result',JSON.stringify(login_input?.data))
          SignuphandleClose();
          LoginhandleShow();
          dispatch(signup_name(""));
          dispatch(signup_email(""));
          dispatch(signup_username(""));
          dispatch(signup_number(""));
          dispatch(signup_country(""));
          dispatch(signup_state(""));
          dispatch(signup_city(""));
          dispatch(signup_password(""));
          dispatch(signup_confirm_password(""));
          dispatch(signup_programtype(""));
          setIsLoading(false);
          toast.success("Signup Successfull", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { color: "white", backgroundColor: "#61F292" },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error(error?.response?.data?.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { color: "white", backgroundColor: "red" },
        });
      });
    console.log(signup_input.signup_error);
  };

  // console.log(stateId,countryId)

  const getCountryId = (e) => {
    console.log(e.target.value);
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setCountryId(optionElementId);
  };

  const getStateId = (e) => {
    console.log(e.target.value);
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setStateId(optionElementId);
  };

  const getCityId = (e) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");

    setCityId(optionElementId);
  };

  // =========Signupform==========
  const [Signupshow, setSignupShow] = useState(false);
  const SignuphandleClose = () => setSignupShow(false);
  const SignuphandleShow = () => {
    dispatch(loginStatusAction(false));
    setSignupShow(true);
    LoginShow(loginStatus);
  };

  // =========login form==========
  const [Loginshow, LoginShow] = useState(false);
  const LoginhandleClose = () => {
    dispatch(loginStatusAction(false));
    // LoginShow(loginStatus);
    dispatch(email(""));
    dispatch(password(""));
  };

  const LoginhandleShow = () => {
    dispatch(loginStatusAction(true));
    // LoginShow(loginStatus);
    setSignupShow(false);
  };

  let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  function handleSubmit(event) {
    event.preventDefault();

    if (!login_input?._email || !login_input?._password) {
      dispatch(login_error("Required"));
    } else if (login_input?._password.length < 6) {
      dispatch(login_error("Password Short"));
    } else if (!login_input?._email.match(validRegex)) {
      dispatch(login_error("Enter valid email"));
    } else if (login_input?._password.length > 12) {
      dispatch(login_error("Password Too Large"));
    }
    // }else if(login_input?._passwod?.search(/[a-z]/) < 0){
    //   dispatch(login_error(" Password must contain at least one lowercase letter"));
    // }else if(login_input?._password?.search(/[A-Z]/) < 0){
    //   dispatch(login_error(" Password must contain at least one uppercase letter"));
    // }else if(login_input?._password?.search(/[0-9]/) < 0) {
    //   dispatch((login_error("Password must contain at least one number")));
    //   }
    else {
      dispatch(login_error(""));
      loginapi();
    }
  }

  //========================signup validation ========================================
  // console.log(signup_input.signup_name);

  function handleSignupSubmit(event) {
    event.preventDefault();
    if (!signup_input.signup_name) {
      dispatch(signup_error("Name Required"));
    } else if (!signup_input.signup_email) {
      dispatch(signup_error("Email Required"));
    } else if (!signup_input.signup_number) {
      dispatch(signup_error("Phone  Required"));
    } else if (!signup_input.signup_state) {
      dispatch(signup_error("State Required"));
    } else if (!signup_input.signup_password) {
      dispatch(signup_error("Password  Required"));
    } else if (!signup_input.signup_confirm_password) {
      dispatch(signup_error("Password  Required"));
    } else if (!signup_input.signup_city) {
      dispatch(signup_error("City Required"));
    } else if (!signup_input.signup_country) {
      dispatch(signup_error("Country  Required"));
    } else if (!signup_input.signup_username) {
      dispatch(signup_error("username  Required"));
    } else {
      dispatch(signup_error(""));
      signupapi();
    }
  }

  const handleforgotChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const forgotPasswordEmail = {
    email: forgotEmail,
  };

  const forgotpassApi = () => {
    setIsLoading(true);
    api_instance
      .post("/api/forgotPass", forgotPasswordEmail)
      .then((response) => {
        console.log(response);

        if (response) {
          handleCloseForgot();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    forgotpassApi();
  };
  // ============Country api=========

  function get_Country() {
    api_instance
      .get(`/api/get-country`)
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          setCountry(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function get_State() {
    api_instance
      .get(`/api/get-state/${countryId}`)
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          setState(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function get_City() {
    api_instance
      .get(`/api/get-city/${stateId}`)
      .then((response) => {
        if (response) {
          // console.log(response.data.data);
          setCity(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    get_State();
  }, [countryId]);
  useEffect(() => {
    get_City();
  }, [stateId]);

  useEffect(() => {
    get_Country();
  }, []);

  const handlePost=()=>{
    // console.log(localStorage_login.status,"388")
    if(localStorage_login?.status==true){
      navigate("/post")
      console.log("it is true")
    }else{
      SignuphandleShow()
    }
  }

  return (
    <>
      <div className="sub_haeder_outer_bg desktop_menu_none">
        <Navbar>
          <Container fluid>
            <Navbar.Toggle />
            <Navbar.Collapse className="">
              <div className="sub_haeder_outer_main">
                <div className="sub_haeder_top_menus">
                  <NavLink className=" top_menus" to="/Top-Universities">
                    Top Universities & Colleges
                  </NavLink>
                  <NavLink className=" top_menus" to="/Top-Courses">
                    Top Courses
                  </NavLink>
                  <NavLink className=" top_menus" to="/exam">
                    Exams
                  </NavLink>
                  <NavLink
                    className=" top_menus"
                    to="/review"
                    style={{ pointerEvents: "none" }}
                  >
                    Reviews
                  </NavLink>
                  <NavLink
                    className=" top_menus"
                    to="/admission"
                    style={{ pointerEvents: "none" }}
                  >
                    Admission 2022
                  </NavLink>
                  <NavLink
                    className=" top_menus"
                    to="/write_review"
                    style={{ pointerEvents: "none" }}
                  >
                    Write a Review
                  </NavLink>
                  <NavLink
                    className=" top_menus"
                    to="/xcvb"
                    style={{ pointerEvents: "none" }}
                  >
                    Top Coupons
                  </NavLink>
                </div>

                <div className="top_header_btns">
                  {!localStorage_login?.status === true ? (
                    <>
                      <NavLink className="post_btn" onClick={SignuphandleShow}>
                        Signup <BiUser />
                      </NavLink>
                      <NavLink className="post_btn" onClick={LoginhandleShow}>
                        Login <BiUser />
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink className="post_btn">
                        {localStorage_login?.data?.fullname} <BiUser />
                      </NavLink>
                      <NavLink
                        className="post_btn"
                        onClick={() => {
                          localStorage.removeItem("login_result");
                        }}
                      >
                        Logout <BiUser />
                      </NavLink>
                    </>
                  )}
                  <NavLink to={localStorage_login?.status ? `/post` : "/"} onClick={handlePost}  className="post_btn" >
                    Post
                  </NavLink>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>

      {/* =========login form model========== */}
      <Modal
        show={loginStatus}
        onHide={LoginhandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="form_header" closeButton>
          <Modal.Title className="form_heading">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger text-center">{login_input._loginError}</p>
          <Form className="forms" onSubmit={handleSubmit}>
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <Blocks
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                />
              </div>
            ) : (
              ""
            )}
            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Email address</Form.Label> */}
              <Form.Control
                className="input_box"
                type="email"
                placeholder="Enter email"
                value={login_input._email}
                onChange={(e) => dispatch(email(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Password</Form.Label> */}
              <Form.Control
                className="input_box"
                type="password"
                placeholder="Enter Password"
                value={login_input._password}
                onChange={(e) => dispatch(password(e.target.value))}
              />
            </Form.Group>

            <Modal.Footer className="form_footer">
              <Button className="form_submit_btn" type="submit">
                Login
              </Button>

              <div>
                <p className="footer_botton_text">
                  New to Edudron?{" "}
                  <button type="button" onClick={SignuphandleShow}>
                    Signup
                  </button>
                  <Button className="" type="button" onClick={handleShowForgot}>
                    forgot password
                  </Button>
                </p>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* =========Signupform model========== */}
      <Modal
        show={Signupshow}
        onHide={SignuphandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="form_header" closeButton>
          <Modal.Title className="form_heading">Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger text-center">{signup_input.signup_error}</p>
          <Form onSubmit={handleSignupSubmit}>
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <Blocks
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                />
              </div>
            ) : (
              ""
            )}
            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Name</Form.Label> */}
              <Form.Control
                className="input_box"
                type="text"
                placeholder="Enter Name"
                value={signup_input.signup_name}
                onChange={(e) => dispatch(signup_name(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Email address</Form.Label> */}
              <Form.Control
                className="input_box"
                type="email"
                placeholder="Enter email"
                value={signup_input.signup_email}
                onChange={(e) => dispatch(signup_email(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Email address</Form.Label> */}
              <Form.Control
                className="input_box"
                type="text"
                placeholder="Enter username"
                value={signup_input.signup_username}
                onChange={(e) => dispatch(signup_username(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Mobile Number</Form.Label> */}
              <Form.Control
                className="input_box"
                type="number"
                placeholder="Enter mobile number"
                value={signup_input.signup_number}
                onChange={(e) => dispatch(signup_number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Select
                aria-label="Default select example"
                className="input_box"
                value={signup_input.signup_country}
                onChange={(e) => {
                  getCountryId(e);
                  dispatch(signup_country(e.target.value));
                }}
              >
                <option>Select Current Country</option>

                {country.map((value) => {
                  return (
                    <option value={value.name} id={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Select
                aria-label="Default select example"
                className="input_box"
                onChange={(e) => {
                  getStateId(e);
                  dispatch(signup_state(e.target.value));
                }}
              >
                <option>Select Current State</option>

                {state.map((value) => {
                  return (
                    <option value={value.name} id={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Select
                aria-label="Default select example"
                className="input_box"
                onChange={(e) => {
                  getCityId(e);
                  dispatch(signup_city(e.target.value));
                }}
              >
                <option>Select Current City</option>

                {city.map((value) => {
                  return (
                    <option value={value.name} id={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Select
                className="input_box"
                value={signup_input.signup_programtype}
                onChange={(e) => dispatch(signup_programtype(e.target.value))}
              >
                <option>Select Program Type</option>
                <option>UG</option>
                <option>PG</option>
                <option>Diploma</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Password</Form.Label> */}
              <Form.Control
                className="input_box"
                type="password"
                placeholder="Enter Password"
                value={signup_input.signup_password}
                onChange={(e) => dispatch(signup_password(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="form_group">
              {/* <Form.Label className="form_label">Password</Form.Label> */}
              <Form.Control
                className="input_box"
                type="password"
                placeholder="Enter confirm Password"
                value={signup_input.signup_confirm_password}
                onChange={(e) =>
                  dispatch(signup_confirm_password(e.target.value))
                }
              />
            </Form.Group>

            <Modal.Footer className="form_footer">
              <Button className="form_submit_btn" type="submit">
                Signup
              </Button>

              <div>
                <p className="footer_botton_text">
                  Already have an account?{" "}
                  <button type="button" onClick={LoginhandleShow}>
                    Login
                  </button>
                </p>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {/* {=========================forgot password modal start========================================} */}

      <Modal show={handleForgotPassword} onHide={handleCloseForgot}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={forgotPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={forgotEmail || ""}
                onChange={handleforgotChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgot}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={forgotPassword}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {=====================================forgot password modal ends================================} */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Top_Sub_Header;
