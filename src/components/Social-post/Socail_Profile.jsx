import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlinePlus ,AiFillCamera} from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  update_password,
  update_confirm_password,
} from "../../Redux/slice/Forms/update_password";
import moment from "moment";
import {
  api_instance,
  baseurl,
  common_token,
} from "../Frontend/Header/HeaderApi`s";

const Socail_Profile = () => {
  const updateData = useSelector((state) => state.updateSlice.initialState);
  const login_user = useSelector((state) => state?.loginSlice?.value);
  const [userProfile, setUserProfile] = useState([]);
  // console.log(login_user)
  const loginUserData = JSON.parse(localStorage.getItem("login_result"));
  const dispatch = useDispatch();
  // console.log(loginUserData?.data?._id);

  //============//=======education form hooks===================================

  const [eduInput, setEduInput] = useState("");
  const [eduUpdate, setEduUpdate] = useState("");
  const [get_edu_data, set_get_edu] = useState([]);

  //===================add edu hooks======================================

  const [eduError, setEduError] = useState("");

  //=========edit exp hook ===================
  let exp_initialState;
  const [editexp, setEditexp] = useState("");
  const [expError, setExpError] = useState("");
  const [exp_update_data, setExpUpdateData] = useState("");

  //===================================add exp ===============================================================
  const [add_exp_country, setExpCountry] = useState("");
  const [add_exp_state, setExpState] = useState("");
  const [add_exp_city, setExpCity] = useState("");
const[currently_working,setCurrentlyWorking]=useState(false);

  // console.log(add_exp_country)

  //==========================================cover update model hook==========================================
  const [coverShow, setCoverShow] = useState(false);

  const handleCoverClose = () => setCoverShow(false);
  const handleCoverShow = () => setCoverShow(true);



  const exphandelsubmit = (e) => {
    e.preventDefault();
    console.log(editexp);

    if (!editexp.company) {
      setExpError("Please enter Company Name*");
    } else if (!editexp.cities) {
      setExpError("Please enter your city");
    } else if (!editexp.states) {
      setExpError("Please enter your state");
    } else if (!editexp.countries) {
      setExpError("Please enter your country");
    } else if (!editexp.skillse) {
      setExpError("Please enter your Skills");
    } else if (!editexp.employs) {
      setExpError("please Select your employe Type");
    } else if (!editexp.role) {
      setExpError("Please enter your role");
    } else {
      setExpError("");
    }
  };

  //==========================================update edu api==================================================
  const [exp, setexp] = useState([]);
  let datas = [{ ...exp }];

  const handle_add_change = (e) => {
    setEduInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  let raw = JSON.stringify({
    school: eduUpdate?.school,
    degree: eduUpdate?.degree,
    field_of_study: eduUpdate.fieldofstudy,
    userId: eduUpdate?.data?._id,
    start_date: eduUpdate?.startdate,
    end_date: eduUpdate?.enddate,
    grade: eduUpdate?.grade,
  });
  const update_edu_api = () => {
    api_instance
      .post(`/api/update-edu/${eduUpdate?.id}`, raw)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          get_edu_api();
          EduAddhandleClose();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  };

  //=============================update exp form hooks-----=============================

  const [company, setCompany] = useState();
  const [exp_city, set_exp_City] = useState();
  const [exp_state, set_exp_State] = useState();
  const [exp_country, set_exp_Country] = useState();
  const [exp_start_date, set_exp_startDate] = useState();
  const [exp_end_date, set_exp_endDate] = useState();
  const [work_as, set_workAs] = useState();
  const [exp_role, set_expRole] = useState();
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");

  // console.log(exp_country,exp_state,exp_city)

  const update_exp_date = {
    company: company ?? exp_update_data[0]?.company,
    role: exp_role ?? exp_update_data[0]?.role,
    end_date: currently_working? null: exp_start_date ?? exp_update_data[0]?.end_date,
    start_date: exp_end_date ?? exp_update_data[0]?.start_date,
    city: exp_city ?? exp_update_data[0]?.city,
    state: exp_state ?? exp_update_data[0]?.state,
    country: exp_country ?? exp_update_data[0]?.country,
    work_as: work_as ?? exp_update_data[0]?.work,
  };

  //===============================================update exp api====================================================
  function update_exp_api(id) {
    // setIsLoading(true)
    api_instance
      .patch(`/api/exp-update/${exp_update_data[0]?._id}`, update_exp_date)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          if (response.data) {
            add_exp_get_api();
            ExpEdithandleClose();
          }
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }
  //====================================================delete edu api===================================================
  function delete_edu_api(id) {
    // setIsLoading(true)
    api_instance
      .delete(`/api/edu-delete/${loginUserData?.data?._id}/${id}`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          get_edu_api();
          EduAddhandleClose();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  //========================================== Exp Get Api=========================
  function add_exp_get_api() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-exp/${loginUserData?.data?._id}?role=`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          // console.log(response.data);
          setexp(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }
  // for update //////////////////////////////////////////////////////////////////////////////
  function update_exp_by_get_api(role) {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-exp/${loginUserData?.data?._id}?role=${role}`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data[0]?.city);
          setExpUpdateData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(() => {
    add_exp_get_api();
  }, []);

  //================================================update cover image=============================
const[cover_pic,setCoverPic]=useState();
const select_cover_image=(event)=>{
  // console.log(event.target.files[0])
  setCoverPic(event.target.files[0])
}

  function update_cover_image() {
    var myHeaders = new Headers();
myHeaders.append("Authorization", common_token);

var formdata = new FormData();
formdata.append("coverImg", cover_pic);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:5000/api/user/coverupdate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  //================================================get edu api=====================================

  function get_edu_api() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-edu/${loginUserData?.data?._id}`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          // console.log(response.data);

          set_get_edu(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(() => {
    get_edu_api();
  }, []);
  //============================================== add edu api===============================
  const edu_payload = {
    school: eduInput?.school,
    degree: eduInput?.degree,
    field_of_study: eduInput?.fieldofstudy,
    start_date: eduInput?.start_date,
    end_date: eduInput?.enddate,
    grade: eduInput?.grade,
  };
  function add_edu_api() {
    // setIsLoading(true)
    api_instance
      .post(`/api/add-edu/${loginUserData?.data?._id}`, edu_payload)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          get_edu_api();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  //==================hook edit exp ==============

  const handle_edu_Submit = (e) => {
    e.preventDefault();
    var inpDate = new Date(eduInput.startdate);
    console.log(eduError);
    var currDate = new Date();

    const enddate = new Date(eduInput.enddate);

    if (!eduInput.school) {
      setEduError("School name is Required*");
    } else if (!eduInput.degree) {
      setEduError("Degree is Required*");
    } else if (!eduInput.fieldofstudy) {
      setEduError("Field of study is Required* ");
    } else if (!eduInput.grade) {
      setEduError("grade is Required*");
    } else if (inpDate.setHours(0, 0, 0, 0) < currDate.setHours(0, 0, 0, 0)) {
      setEduError("error");
    } else if (enddate.setHours(0, 0, 0, 0) < currDate.setHours(0, 0, 0, 0)) {
      setEduError("Please Enter the valid Date");
    } else {
      setEduError("");
      add_edu_api();
      get_edu_api();
      EduEdithandleClose();
    }
  };

  const handle_edu_update_change = (e) => {
    setEduUpdate((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  //============================UPDATE PASSWORD MODAL=========================
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //=============================UPDATE PASSWORD MODAL ENDS=================

  // Profile edit model
  const [Editshow, setEditShow] = useState(false);

  const EdithandleClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  // Exprience edit model
  const [ExpEditshow, ExpsetEditShow] = useState(false);
  const ExpEdithandleClose = () => ExpsetEditShow(false);
  const ExphandleEditShow = () => ExpsetEditShow(true);
  const handleCurrentlyWorking=(e)=>{
    // console.log(e.target.checked)
    setCurrentlyWorking(e.target.checked)
  }
  // Experience Add modal

  const [ExpAddshow, ExpsetAddShow] = useState(false);
  const ExpAddhandleClose = () => ExpsetAddShow(false);
  const ExphandleAddShow = () => ExpsetAddShow(true);

  // education edit model
  const [EduEditshow, EdusetEditShow] = useState(false);

  const EduEdithandleClose = () => EdusetEditShow(false);
  const EduhandleEditShow = () => EdusetEditShow(true);

  // education add model
  const [EduAddshow, EduAddsetShow] = useState(false);

  const EduAddhandleClose = () => EduAddsetShow(false);
  const EduAddhandleShow = () => EduAddsetShow(true);

  const updatePasswordBody = {
    password: updateData?.password,
    confirm_password: updateData?.confirm_password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const update_password_api = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", loginUserData.access_token);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("password", "1234567");
    urlencoded.append("confirm_password", "1234567");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/updatePass", requestOptions)
      .then((response) => {
        response.text();
        if (response) {
          handleClose();
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onChange_company = (e) => {
    setCompany(e.target.value);
  };
  const onChange_exp_city = (e) => {
    set_exp_City(e.target.value);
  };
  const onChange_exp_state = (e) => {
    set_exp_State(e.target.value);
  };
  const onChange_exp_country = (e) => {
    // console.log(e.target.value)
    set_exp_Country(e.target.value);
  };
  const onChange_exp_start_date = (e) => {
    set_exp_startDate(e.target.value);
  };
  const onChange_exp_end_date = (e) => {
    set_exp_endDate(e.target.value);
  };
  const onChange_exp_workas = (e) => {
    console.log(e.target.value);
    set_workAs(e.target.value);
  };
  const onChange_exp_role = (e) => {
    set_expRole(e.target.value);
  };
  // console.log(work_as );

  function delete_exp_api() {
    api_instance
      .delete(`/api/exp-delete/${exp_update_data[0]?._id}`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          add_exp_get_api();
          ExpEdithandleClose();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  //=========================================== Add Experince API=======================

  const handleCountry = (event) => {
    setExpCountry(event.target.value);
    // setEditCountry(event.target.value);

    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");

    setCountryId(optionElementId);
  };

  const handleState = (event) => {
    // console.log(event.target.value)
    setExpState(event.target.value);
    // setEditState(event.target.value);
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");

    setStateId(optionElementId);
    // setStateObject(optionElementVale2);
  };
  const handleCity = (event) => {
    setExpCity(event.target.value);
    // setEditCity(event.target.value);
    // console.log(event.target.value)
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");

    setCityId(optionElementId);
  };

  const [addExp, setAddExp] = useState("");
  let add_exp_raw = {
    user_id: loginUserData?.data?._id,
    company: addExp?.company,
    role: addExp?.role,
    end_date:currently_working ? null : addExp?.s_date,
    start_date: addExp?.e_date,
    city: add_exp_city,
    state: add_exp_state,
    country: add_exp_country,

    work_as: addExp.employs,
  };
  function add_exp_api() {
    api_instance
      .post(`/api/add-exp`, add_exp_raw)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          console.log(response.data);
          add_exp_get_api();
          ExpAddhandleClose();
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  function add_exp_change(e) {
    setAddExp((values) => ({ ...values, [e.target.name]: e.target.value }));
  }
  function add_exp_submit(e) {
    e.preventDefault();
    add_exp_api();
  }

  // Country Api

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
  // console.log(countryId)
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
    // get_State();
    // get_City();
  }, []);

  //===============profile update section===================================

  const userUpdateData = {
    fullname: userProfile?.fullname,
    email: userProfile?.email,
    phone: userProfile?.phone,
    city: userProfile?.add_exp_city,
    state: userProfile?.add_exp_state,
    country: userProfile?.add_exp_country,
    profileTitle: userProfile?.profileTitle,
  };

  const [updateProfile, setUpdateProfile] = useState(userUpdateData);
  const [profilePicUpd, setProfileUpFile] = useState("");
  // console.log(userUpdateData);

  function hamdleProfileChange(params) {
    setUpdateProfile((v) => ({
      ...v,
      [params.target.name]: params.target.value,
    }));
  }

  function handleProfilePic_upd(e) {
    setProfileUpFile(e.target.files[0]);
  }
 
  function handleProfileSubmitUpd(e) {
    e.preventDefault();
    console.log(profilePicUpd);
    update_profile();
  }
  function update_profile(params) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", common_token);
    var formdata = new FormData();
    formdata.append("avatar", profilePicUpd);
    formdata.append(
      "fullname",
      updateProfile?.fullname ?? login_user?.data?.fullname
    );
    formdata.append("email", updateProfile?.email ?? login_user?.data?.email);
    formdata.append("phone", updateProfile?.phone ?? login_user?.data?.phone);
    formdata.append("city", add_exp_city ?? login_user?.data?.city);
    formdata.append("state", add_exp_state ?? login_user?.data?.state);
    formdata.append("country", add_exp_country ?? login_user?.data?.country);
    formdata.append(
      "profileTitle",
      updateProfile?.profileTitle ?? login_user?.data?.profileTitle
    );

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${baseurl}/api/user/userUpdate`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log(result);
          get_profile();
          EdithandleClose();
        }
      })
      .catch((error) => console.log("error", error));
  }

  function get_profile() {
    api_instance
      .get(`/api/user/${loginUserData?.data?._id}`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          // console.log(response.data.user);
          setUserProfile(response.data.user);
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(() => {
    // loginUserData?.data?.data ? get_profile():''
    get_profile();
  }, []);

  return (
    <>
      <section className="socail_post_main_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="detail_profile_col">
              <span style={{position:"relative"}}>
                <img
                  className="img-fluid bg_img"
                  style={{ height: "150px" }}
                  src={userProfile.coverImg}
                  alt=""
                />
                <span onClick={handleCoverShow} style={{position:"absolute",top:"-70px",right:"10px",color:"red",fontSize:"30px",cursor:"pointer",zIndex:1}}>
                <AiFillCamera/>
                </span>
                </span>
                <div className="detail_profile_content" >
                  <img
                    className="img-fluid"
                    // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_400_400/0/1667357252158?e=1675900800&v=beta&t=Cnm3f_Qx9K2vNvJsdaYzYYE1QSUiCOfqWa-CzkXGecU"
                    src={userProfile.avatar}
                    alt=""
                    style={{zIndex:2}}
                  />
                  <div className="detail_profile_content_main">
                    <div className="detail">
                      <h4>{userProfile.fullname}</h4>

                      <p>{userProfile.profileTitle}</p>

                      <div className="profile_location">
                        <span>{`${userProfile.city}, ${userProfile.state}`}</span>
                      </div>
                      <div className="connection_count">
                        <span>{`${userProfile.followers?.length } Connections`}</span>
                        {/* <span>500+</span> <span>Connections</span> */}
                      </div>
                    </div>
                    <div className="working_col">
                      <div className="edit_btn_div">
                        <button onClick={handleEditShow}>
                          <BiEditAlt className="edit_icon" />
                        </button>
                        <button onClick={handleShow}>
                          <FaTransgender className="edit_icon" />
                        </button>
                      </div>
                      <div className="working_col_inner">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                          alt=""
                        />
                        <p>Hybrid Plus Infotech Solution Pvt Ltd</p>
                      </div>
                      {
                        userProfile.Education?.slice(0,1)?.map((value)=>{
                          // console.log(value)
                          return(
                            <>
                             <div className="working_col_inner">
                        <img
                          className="img-fluid"
                          src="https://media-exp1.licdn.com/dms/image/C510BAQGUb3DKT_yHeQ/company-logo_100_100/0/1536511331498?e=1678320000&v=beta&t=B-sxyEMVVRO-ewfS-NkS8OCJEecA-6OseWtXNjV_V3o"
                          alt=""
                        />
                        <p>{value.school}</p>
                      </div></>
                
                          )
                        })
                      }
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail_profile_col p-3 profile_about">
                <h4>About</h4>
                <p>{userProfile?.profileTitle}</p>
              </div>

              <div className="detail_profile_col p-3 profile_about profile_exprience">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Experience</h4>
                  <div className="edit_btn_div">
                    <button onClick={ExphandleAddShow}>
                      <AiOutlinePlus className="edit_icon" />
                    </button>
                  </div>
                </div>

                {datas &&
                  datas?.map((element) => {
                    // console.log()
                    return Object.values(element)?.map((elements) => {
                      return (
                        <div className="profile_exprience_main_div  d-flex">
                          <div className="working_col_inner">
                            <img
                              className="img-fluid"
                              src="https://media-exp1.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1678320000&v=beta&t=BHDAw6DLjH9PQqouJfyXcTLUWhiRgiCJ297CXmKSZW8"
                              alt=""
                            />
                            <div>
                              <p style={{ color: "#000", fontWeight: 500 }}>
                                {elements.role}
                              </p>
                              <p>
                                <span>{elements.company}</span>
                                {" . "}
                                <span>{elements.work_as}</span>
                              </p>
                              <p>
                                <span
                                  style={{ color: "#666", fontWeight: 400 }}
                                >
                                  {moment(elements.start_date).format(
                                    "MM YYYY"
                                  )}
                                </span>{" "}
                                -
                                <span
                                  style={{ color: "#666", fontWeight: 400 }}
                                >
                                  {" "}
                                  {moment(elements.end_date).format(
                                    "MM YYYY"
                                  )}{" "}
                                </span>
                              </p>
                              <p>
                                <span>{elements.city},</span>{" "}
                                <span>{elements.state},</span>{" "}
                                <span>{elements.country}</span>
                              </p>
                            </div>
                          </div>
                          <div className="edit_btn_div ms-auto">
                            <button
                              onClick={() => {
                                ExphandleEditShow();
                                update_exp_by_get_api(elements.role);
                              }}
                            >
                              <BiEditAlt className="edit_icon" />
                            </button>
                          </div>
                        </div>
                      );
                    });
                  })}
              </div>

              <div className="detail_profile_col p-3 profile_about profile_exprience">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Education</h4>
                  <div className="edit_btn_div">
                    <button onClick={EduhandleEditShow}>
                      <AiOutlinePlus className="edit_icon" />
                    </button>
                  </div>
                </div>
                {/* education */}
                <div className="row profile_exprience_main_div">
                  {get_edu_data?.Education
                    ? get_edu_data?.Education?.map((item) => {
                        return (
                          <>
                            <div className="col-lg-12 working_col_inner d-flex exprience_border_bottom">
                              <img
                                className="img-fluid"
                                src="https://media-exp1.licdn.com/dms/image/C510BAQGUb3DKT_yHeQ/company-logo_100_100/0/1536511331498?e=1678924800&v=beta&t=XMTdt6rlY5bfDBwmf_HzetdS38x-lC-qgwFvwRHJEdg"
                                alt=""
                              />
                              <div>
                                <div>
                                  <h4>{item?.school}</h4>
                                  <div className="d-flex">
                                    <p
                                      style={{ color: "#333", fontWeight: 400 }}
                                    >
                                      {item?.degree?.toUpperCase()}
                                    </p>
                                    <p style={{ marginLeft: "10px" }}> - </p>
                                    <p
                                      style={{
                                        color: "#000",
                                        fontWeight: 500,
                                        marginLeft: "10px",
                                      }}
                                    >
                                      {item?.field_of_study?.toUpperCase()}
                                    </p>
                                  </div>
                                  <div className="d-flex">
                                    <p
                                      style={{ color: "#666", fontWeight: 400 }}
                                    >
                                      {moment(item.start_date).format(
                                        "MMMM  YYYY"
                                      )}
                                    </p>
                                    <span> - </span>
                                    <p
                                      style={{ color: "#666", fontWeight: 400 }}
                                    >
                                      {moment(item.endt_date).format(
                                        "MMMM  YYYY"
                                      )}
                                    </p>
                                  </div>
                                  <p style={{ color: "#666", fontWeight: 400 }}>
                                    Grade - {item.grade}
                                  </p>
                                </div>
                              </div>
                              <div className="edit_btn_div ms-auto">
                                <button
                                  onClick={() => {
                                    EduAddhandleShow(),
                                      setEduUpdate({
                                        id: item?._id,
                                        school: item.school,
                                        degree: item.degree,
                                        fieldofstudy: item.field_of_study,
                                        startdate: moment(
                                          item.start_date
                                        ).format("YYYY-MM-DD"),
                                        enddate: moment(item.end_date).format(
                                          "YYYY-MM-DD"
                                        ),
                                        grade: item.grade,
                                      });
                                  }}
                                >
                                  <BiEditAlt className="edit_icon" />
                                </button>
                              </div>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12"></div>
          </div>
        </div>
      </section>

      {/*  profile edit  Model */}
      <Modal
        show={Editshow}
        onHide={EdithandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="forms" onSubmit={handleProfileSubmitUpd}>
            <Form.Label className="form_label">Full Name</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="fullname"
                value={updateProfile.fullname}
                onChange={hamdleProfileChange}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Email</Form.Label>
              <Form.Control
                className="input_box"
                type="email"
                placeholder=""
                name="email"
                value={updateProfile.email}
                onChange={hamdleProfileChange}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Phone</Form.Label>
              <Form.Control
                className="input_box"
                type="number"
                placeholder=""
                name="phone"
                value={updateProfile.phone}
                onChange={hamdleProfileChange}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label" htmlFor="disabledSelect">
                Country
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="country"
                onChange={handleCountry}
              >
                <option>select Country</option>
                {country.map((item) => {
                  return (
                    <option value={item.name} id={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label" htmlFor="disabledSelect">
                State
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="state"
                onChange={handleState}
              >
                <option>select State</option>
                {state.map((item) => {
                  return (
                    <option value={item.name} id={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label" htmlFor="disabledSelect">
                City
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="city"
                onChange={handleCity}
              >
                <option>select City</option>
                {city.map((item) => {
                  return (
                    <option value={item.name} id={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Form.Select>
              {/* <Form.Select
                className="input_box"
                name="city"
                value={updateProfile.city}
                onChange={hamdleProfileChange}
              >
                <option>Select City</option>
                <option value={updateProfile.city} selected>
                  {updateProfile.city}
                </option>
                <option>City 2</option>
                <option>City 3</option>
                <option>City 4</option>
              </Form.Select> */}
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Profile Image</Form.Label>
              <Form.Control
                className="input_box"
                type="file"
                placeholder=""
                name="profile_image"
                onChange={handleProfilePic_upd}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Profile Title</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="profileTitle"
                value={updateProfile?.profileTitle}
                onChange={hamdleProfileChange}
              />
            </Form.Group>
            <Modal.Footer className="form_footer">
              <Button className="form_submit_btn" type="submit">
                Save
              </Button>

              <div></div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* exprience edit Model */}
      <Modal
        show={ExpEditshow}
        onHide={ExpEdithandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Exprience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="forms" onSubmit={exphandelsubmit}>
            <p className="text-center">{expError}</p>
            <Form.Label className="form_label">Company Name</Form.Label>

            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="company"
                value={company ?? exp_update_data[0]?.company}
                onChange={onChange_company}
              />
            </Form.Group>
            <Form.Label className="form_label">City</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="cities"
                value={exp_city ?? exp_update_data[0]?.city}
                onChange={onChange_exp_city}
              />
            </Form.Group>
            <Form.Label className="form_label">State</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="states"
                value={exp_state ?? exp_update_data[0]?.state}
                onChange={onChange_exp_state}
              />
            </Form.Group>
            <Form.Label className="form_label">Country</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="countries"
                value={exp_country ?? exp_update_data[0]?.country}
                onChange={onChange_exp_country}
              />
            </Form.Group>
            <Form.Label className="form_label">Start Date</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="sdates"
                value={
                  exp_start_date ??
                  moment(exp_update_data[0]?.start_date).format("YYYY-MM-DD")
                }
                onChange={onChange_exp_start_date}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I am currently working here" />
      </Form.Group>
            <Form.Label className="form_label">End Date</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="edates"
                value={
                  exp_end_date ??
                  moment(exp_update_data[0]?.end_date).format("YYYY-MM-DD")
                }
                onChange={onChange_exp_end_date}
              />
            </Form.Group>
            <Form.Label className="form_label">Skills</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="skillse"
                value=""
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label" htmlFor="disabbbledSelect">
                Employment Type
              </Form.Label>
              <Form.Select
                className="input_box"
                name="employs"
                value={work_as}
                onChange={onChange_exp_workas}
              >
                <option>Employment Time</option>
                <option
                  value="full time"
                  selected={exp_update_data[0]?.work_as == "full time"}
                >
                  Full Time
                </option>
                <option
                  value="part time"
                  selected={exp_update_data[0]?.work_as == "part time"}
                >
                  Part Time
                </option>
                <option
                  value="self employed"
                  selected={exp_update_data[0]?.work_as == "self employed"}
                >
                  Self Employed
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Role</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="role"
                value={exp_role ?? exp_update_data[0]?.role}
                onChange={onChange_exp_role}
              />
            </Form.Group>
            {/* <Form.Group className="form_group">
              <Form.Label className="form_label">Description</Form.Label>
              <Form.Control
                as="textarea"
                className="input_box"
                type="text"
                placeholder=""
                name="description"
                value={editexp?.description}
                onChange={onChange_exp_role}
              />
            </Form.Group> */}

            <Modal.Footer className="form_footer">
              <Button
                className="form_submit_btn"
                type="submit"
                onClick={update_exp_api}
              >
                Save
              </Button>
              <Button className="form_submit_btn" onClick={delete_exp_api}>
                Delete
              </Button>
              <div></div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ======================exp add model================================================== */}

      <Modal
        show={ExpAddshow}
        onHide={ExpAddhandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Exprience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="forms" onSubmit={add_exp_submit}>
            <p className="text-center">{expError}</p>
            <Form.Label className="form_label">Company Name</Form.Label>

            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="company"
                value={addExp?.company}
                onChange={add_exp_change}
              />
            </Form.Group>

            <Form.Label className="form_label">Country</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="country"
              value={exp_country}
              // onChange={add_exp_change}
              onChange={handleCountry}
            >
              <option>select country</option>

              {country.map((value) => {
                // console.log(value.name);
                return (
                  <option value={value.name} id={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </Form.Select>

            <Form.Label className="form_label">State</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="state"
              value={exp_state}
              // onChange={add_exp_change}
              onChange={handleState}
            >
              <option>select state</option>
              {state.map((item) => {
                // console.log(item);
                return (
                  <option value={item.name} id={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Label className="form_label">City</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="state"
              value={exp_city}
              // onChange={add_exp_change}
              onChange={handleCity}
            >
              <option>select city</option>
              {city.map((value) => {
                // console.log(value);
                return (
                  <option value={value.name} id={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Label className="form_label">Start Date</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="s_date"
                value={addExp?.s_date}
                onChange={add_exp_change}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I am currently working here" checked={currently_working} onChange={handleCurrentlyWorking}/>
      </Form.Group>
            <Form.Label className={currently_working ?"form_label text-muted":"form_label"} >End Date</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="e_date"
                value={addExp?.e_date}
                disabled={currently_working}
                onChange={add_exp_change}
              />
            </Form.Group>
            <Form.Label className="form_label">Skills</Form.Label>
            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="skillse"
                value=""
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label" htmlFor="disabbbledSelect">
                Employment Type
              </Form.Label>
              <Form.Select
                className="input_box"
                name="employs"
                value={addExp.employs}
                onChange={add_exp_change}
              >
                <option>Employment Type</option>
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="self employed">Self Employed</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Role</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="role"
                value={addExp?.role}
                onChange={add_exp_change}
              />
            </Form.Group>
            {/* <Form.Group className="form_group">
              <Form.Label className="form_label">Description</Form.Label>
              <Form.Control
                as="textarea"
                className="input_box"
                type="text"
                placeholder=""
                name="description"
                value={editexp?.description}
                onChange={onChange_exp_role}
              />
            </Form.Group> */}

            <Modal.Footer className="form_footer">
              <Button className="form_submit_btn" type="submit">
                Save
              </Button>
              <div></div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Education add Model */}
      <Modal
        show={EduEditshow}
        onHide={EduEdithandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="forms" onSubmit={handle_edu_Submit}>
            <p className="text-center">{eduError}</p>
            <Form.Label className="form_label">School</Form.Label>

            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="school"
                value={eduInput?.school}
                onChange={handle_add_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Degree</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="degree"
                value={eduInput?.degree}
                onChange={handle_add_change}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Field of study</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="fieldofstudy"
                value={eduInput?.fieldofstudy}
                onChange={handle_add_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Start Date</Form.Label>
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="startdate"
                value={eduInput?.startdate}
                onChange={handle_add_change}
              />
            </Form.Group>
            
            <Form.Group className="form_group">
              <Form.Label className="form_label">End Date</Form.Label>
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="enddate"
                value={eduInput?.enddate}
                onChange={handle_add_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Grade</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="grade"
                value={eduInput?.grade}
                onChange={handle_add_change}
              >
                <option>Open this select menu</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Form.Select>
            </Form.Group>
            {/* <Form.Group className="form_group">
              <Form.Label className="form_label">Description</Form.Label>
              <Form.Control
                as="textarea"
                className="input_box"
                type="text"
                placeholder=""
              />
            </Form.Group> */}

            <Modal.Footer className="form_footer">
              <Button className="form_submit_btn" type="submit">
                Save
              </Button>

              <div></div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* {===========================================update password modal starts==============================} */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password"
                value={updateData?.password}
                onChange={(e) => dispatch(update_password(e.target.value))}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={updateData?.confirm_password}
                onChange={(e) =>
                  dispatch(update_confirm_password(e.target.value))
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update_password_api}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* {=========================udate password modal ends=========================================================} */}

      {/* {=========================education update=========================================================} */}

      <Modal
        show={EduAddshow}
        onHide={EduAddhandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="forms" onSubmit={(e) => e.preventDefault()}>
            <Form.Label className="form_label">School</Form.Label>

            <Form.Group className="form_group">
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="school"
                value={eduUpdate?.school}
                onChange={handle_edu_update_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Degree</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="degree"
                value={eduUpdate?.degree}
                onChange={handle_edu_update_change}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">Field of study</Form.Label>
              <Form.Control
                className="input_box"
                type="text"
                placeholder=""
                name="fieldofstudy"
                value={eduUpdate?.fieldofstudy}
                onChange={handle_edu_update_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Start Date</Form.Label>
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="startdate"
                value={eduUpdate?.startdate}
                onChange={handle_edu_update_change}
              />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="form_label">End Date</Form.Label>
              <Form.Control
                className="input_box"
                type="date"
                placeholder=""
                name="enddate"
                value={eduUpdate?.enddate}
                onChange={handle_edu_update_change}
              />
            </Form.Group>

            <Form.Group className="form_group">
              <Form.Label className="form_label">Grade</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="grade"
                value={eduUpdate?.grade}
                onChange={handle_edu_update_change}
              >
                <option>Open this select menu</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Form.Select>
            </Form.Group>
            {/* <Form.Group className="form_group">
              <Form.Label className="form_label">Description</Form.Label>
              <Form.Control
                as="textarea"
                className="input_box"
                type="text"
                placeholder=""
              />
            </Form.Group> */}

            <Modal.Footer className="form_footer">
              <Button
                className="form_submit_btn"
                type="submit"
                onClick={update_edu_api}
              >
                Save
              </Button>
              <Button
                className="form_submit_btn"
                onClick={() => delete_edu_api(eduUpdate.id)}
              >
                Delete
              </Button>

              <div></div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      
      <Modal show={coverShow} onHide={handleCoverClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Cover Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="file" accept="image/" onChange={select_cover_image}/>
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={()=>{handleCoverClose();update_cover_image()}}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>

    </>
  );
};

export default Socail_Profile;
