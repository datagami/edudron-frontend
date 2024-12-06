import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FormLabel from "@mui/material/FormLabel";
import Table from "react-bootstrap/Table";
import * as Yup from "yup";
import Spinner from 'react-bootstrap/Spinner';
import { api_instance,baseurl } from "../Frontend/Header/HeaderApi`s";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VerticalLinearStepper() {
  const user_data = JSON.parse(localStorage.getItem("login_result"));
  const [course, setCourse] = useState([]);
  const [stream, setStream] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categoryOfOrgId, setCategoryOfOrgId] = useState("");
  const [fos, setFos] = useState([]);
  const [AllCatogary, setAllCatogary] = useState([]);
  const [AllCourse, setAllCourse] = useState([]);
  const [SingleCourse, setSingleCourse] = useState([]);
  const [faculty, Data] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const[countryObject,setCountryObject]=useState({});
  const[stateObject,setStateObject]=useState({});
  const[cityObject,setCityObject]=useState({});
  const [org, setOrg] = useState([]);

  // All Single Input Field Hooks

  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [phone, setPhone] = useState("");
  const [establistedYr, setEstablistedYr] = useState("");
  const [ucg, setUcg] = useState("");
  const [description, setDescription] = useState("");
  const[webUrl,setWebUrl]=useState('');

  // console.log(email,college,phone,establistedYr,ucg,description, country, state,city)

  const handleEmail = (e) => {
    setEmail((value) => ({ ...value, [e.target.name]: e.target.value }));
  };
  const handleCollegeName = (e) => {
    setCollege((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handlePhone = (e) => {
    setPhone((value) => ({ ...value, [e.target.name]: e.target.value }));
  };
  const handleEstablisted = (e) => {
    setEstablistedYr((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUcg = (e) => {
    setUcg((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handleDescription = (e) => {
    setDescription((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const handleDetailSubmit = (e) => {
    e.preventDefault();
  };

  const [courseValue, setCourseValue] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleCourse = (e) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    setCourseValue(e.target.value);
    setCourseId(optionElementId);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [initialValues, setValues] = React.useState({
    email: "",
    college_name: "",
    phone: "",
    est_year: "",
    city: "",
    state: "",
    country: "",
    description: "",
    ugc_approved: "",
    stream: "63f3861559006245acc008fd",
  });
  const formSchema = Yup.object({
    email: Yup.string().min(5).max(30).email().required("Requied"),
    college_name: Yup.string().max(40, "max 40").required("Required"),
    phone: Yup.string().max(15, "max 15").required("Required"),
    est_year: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().max(25, "max 25").required("Required"),
    description: Yup.string()
      .min(6, "Too Short")
      .max(12, "Too Long")
      .required("please fill the password"),
    state: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    fees: Yup.string().required("Required"),
    eligibility: Yup.string().required("Required"),
    // gallery: Yup.string().required("Required"),
    faculty_name: Yup.string().required("Required"),
    post: Yup.string().required("Required"),
    faculty_email: Yup.string().required("Required"),
    faculty_phone: Yup.string().required("Required"),
    ugc_approved: Yup.boolean().required("Required"),
    stream: Yup.string().required("Required"),
  });
  const { touched, handleChanges, handleSubmit, errors, values } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      setValues(values);
    },
  });

  // search bar
  const [query, setQuery] = useState("");
  const [facultyData, setFacultyData] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    // search(value);
  };
  function get_faculty() {
    api_instance
      .get(`/api/get-faculty`)
      .then((response) => {
        if (response) {
          setFacultyData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [file, setFile] = useState([]);
  const [files, setFiles] = useState([]);

  function uploadSingleFile(e) {
    // console.log(e.target.files)
    setFiles(e.target.files);
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    // console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }


  // ===city,state, country API =====

  function get_Country() {
    api_instance
      .get(`/api/get-country`)
      .then((response) => {
        if (response) {
          console.log(response.data.data);
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
          console.log(response.data.data);
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
          console.log(response.data.data);
          setCity(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // =======stream ========

  function get_Course() {
    api_instance
      .get(`/api/get-course`)
      .then((response) => {
        if (response) {
          console.log(response.data.data);
          setAllCourse(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function get_SingleCourse(id) {
    api_instance
      .get(`/api/get-single-course/${id}`)
      .then((response) => {
        if (response) {
          console.log(response.data.data);
          setSingleCourse(response.data.data);
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
    get_Course();
    get_faculty();
  }, []);

  useEffect(() => {
    get_SingleCourse(courseId);
  }, [courseId]);

  var formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("college_pics", files[i]);
  }
  formData.append("college_name", college.college_name);
  formData.append("user_id", user_data?.data?._id);
  formData.append("email", email.email);
  formData.append("phone", phone.phone);
  formData.append("est_year", establistedYr.est_year);
  formData.append("ugc_approved", ucg.ucg);
  formData.append("city", JSON.stringify({
    city:cityObject,
    cityId:cityId
  }));
  formData.append("state", JSON.stringify({
    state:stateObject,
    stateId:stateId
  }));
  formData.append("country", JSON.stringify({
    country:countryObject,
    cityId:countryId
  }));
  formData.append("description", description.description);
  formData.append("course", JSON.stringify(course));
  formData.append("web_url",webUrl);
  formData.append("streamId",SingleCourse?.streamId?._id)


  function handleCoursesSubmit(e) {
    e.preventDefault();
    let pushCF = {
      course: courseValue,
      courseId: courseId,
      fees: FeesValue,
      eligibility: EligibilityValue,
      stream: SingleCourse?.streamId?.name,
      streamId: SingleCourse?.streamId?._id,
      category: SingleCourse?.categoryId?.name,
      categoryId: SingleCourse?.categoryId?._id,
      parent: SingleCourse?.categoryId?.parent,
    };

    setCourse([...course, pushCF]);
  }

  const [EligibilityId, setEligibilityId] = useState("");
  const [EligibilityValue, setEligibilityValue] = useState("");

  const [FeesId, setFeesId] = useState("");
  const [FeesValue, setFeesValue] = useState("");

  const [streamId, setStreamId] = useState(SingleCourse?.streamId?._id ?? "");
  const [streamValue, setStreamValue] = useState(SingleCourse?.streamId?.name ?? "");

  const [categoryId, setCategoryId] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  // console.log(courseValue,EligibilityValue, FeesValue, streamValue, categoryValue)

  function handleEligibility(event) {
    setEligibilityValue(event.target.value)
  }

  function handleFees(event) {
    setFeesValue(event.target.value);
    setFeesId(event.target.id);
  }
  function handleStream(event) {
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    const index2 = event.target.selectedIndex;
    const optionElement2 = event.target.childNodes[index2];
    const optionElementVale2 = optionElement2.getAttribute("value");
    
    setStreamValue(optionElementVale2);
    setStreamId(optionElementId);
  }

  function handleCategory(event) {
    const index = event.target.selectedIndex;

    console.log(event.target.value);
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    const index2 = event.target.selectedIndex;
    const optionElement2 = event.target.childNodes[index2];
    const optionElementVale2 = optionElement2.getAttribute("value");
    setCategoryValue(optionElementVale2);
    setCategoryId(optionElementId);
  }
  // console.log(countryId);
  function handleCountry(event) {
    console.log(event.target.value);
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    const index2 = event.target.selectedIndex;
    const optionElement2 = event.target.childNodes[index2];
    const optionElementVale2 = optionElement2.getAttribute("value");
    setCountryId(optionElementId);
    setCountryObject(optionElementVale2)
    // setCountry([...country,pushCF])
    // setCountry(pushCF);
  }

  function handleState(event) {
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    const index2 = event.target.selectedIndex;
    const optionElement2 = event.target.childNodes[index2];
    const optionElementVale2 = optionElement2.getAttribute("value");
    setStateId(optionElementId);
    setStateObject(optionElementVale2)
  }

  const handleCheckFOS = (event) => {
    var updatedFOS = [...fos];
    var updatedFOSId = [...categoryOfOrgId];
    if (event.target.checked) {
      updatedFOS = [...fos, event.target.value];
      updatedFOSId = [...categoryOfOrgId, event.target.id];
      if (updatedFOS) {
        setFos(updatedFOS);
      }
    } else {
      updatedFOS.splice(fos.indexOf(event.target.value), 1); // araay list
      setFos(updatedFOS);
    }
    if (updatedFOSId) {
      setCategoryOfOrgId(updatedFOSId);
    } else {
      updatedFOSId.splice(categoryOfOrgId.indexOf(event.target.id), 1);
      setCategoryOfOrgId(updatedFOSId);
    }
  };
  
  function handleCity(event) {
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");

    const index2 = event.target.selectedIndex;
    const optionElement2 = event.target.childNodes[index2];
    const optionElementVale2 = optionElement2.getAttribute("value");
    setCityId(optionElementId);

    setCityObject(optionElementVale2)
  }

  function handleFaculty(e) {
    console.log(faculty);
    e.preventDefault();
    console.log("ok");
    let pushF = {
      name: values.faculty_name,
      post: values.post,
      email: values.faculty_email,
      phone: values.faculty_phone,
    };
    Data([...faculty, pushF]);
  }

  const add_college = () => {
    setIsLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Og==");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch(`${baseurl}/api/add-college`, requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        if(result){
    setIsLoading(false)
    toast(result.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
        }
         console.log(result)
        })
      .catch((error) => {
    setIsLoading(false)
    toast(error.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
        console.log("error", error)
      });
  };

  const handleWebUrkChange=(e)=>{
    setWebUrl(e.target.value)
  }

  const submit = () => {
    console.log(values);
    setValues(values);
    add_college();
  };

  const steps = [
    {
      label: "College Info",
      description: (
        <Form onSubmit={handleDetailSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email.email ?? ""}
                    onChange={handleEmail}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCollege">
                  <Form.Label>College Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="College"
                    name="college_name"
                    value={college.college_name ?? ""}
                    onChange={handleCollegeName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Enter Phone"
                    name="phone"
                    value={phone.phone ?? ""}
                    onChange={handlePhone}
                  />
                </Form.Group>

                <Form.Label>Establisted Year</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="est_year"
                  value={establistedYr.est_year ?? ""}
                  onChange={handleEstablisted}
                >
                  <option>Establisted Year</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                </Form.Select>
              </div>
              <div className="col-6">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    UGC Approved
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // defaultValue={1}
                    onChange={handleUcg}
                    value={ucg.ucg ?? ""}
                  >
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Yes"
                      name="ugc_approved"
                    />
                    <FormControlLabel
                      value={0}
                      control={<Radio />}
                      label="No"
                      name="ugc_approved"
                    />
                    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                  </RadioGroup>
                </FormControl>
                <Form.Label>Country</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="country"
                  // value={values.country}
                  onChange={handleCountry}
                >
                  <option>select country</option>
                  {country.map((value) => {
                    return (
                      <option value={value.name} id={value.id}>
                        {value.name}
                      </option>
                    );
                  })}
                </Form.Select>

                <Form.Label>State</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="state"
                  onChange={handleState}
                >
                  <option>select state</option>
                  {state.map((item) => {
                    return (
                      <option value={item.name} id={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>

                <Form.Label className="mt-2">City</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="city"
                  onChange={handleCity}
                >
                  <option>select city</option>
                  {city.map((value) => {
                    return (
                      <option value={value.name} id={value.id}>
                        {value.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>

              <div className="col-12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={description.description ?? ""}
                    onChange={handleDescription}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiurl">
                  <Form.Label>Web Url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Url"
                    name="web_url"
                    value={webUrl ?? ""}
                    onChange={handleWebUrkChange}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </Form>
      ),
    },
    {
      label: "Course & Fee",

      description: (
        <span>
          <Form onSubmit={handleCoursesSubmit}>
            <Form.Label>Course</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="course"
              id={courseId}
              value={courseValue}
              onChange={handleCourse}
            >
              <option>select Course</option>
              {AllCourse.map((item) => {
                return (
                  <option value={item.name} id={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>

            <Form.Label>Stream</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="stream"
              onChange={handleStream}
            >
              <option
                value={SingleCourse?.streamId?.name}
                id={SingleCourse?.streamId?._id}
              >
                {SingleCourse?.streamId?.name}
              </option>
              ;
            </Form.Select>
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="course"
              value={values.course}
              onChange={handleCategory}
            >
              <option
                value={SingleCourse?.categoryId?.name}
                id={SingleCourse?.categoryId?._id}
              >
                {SingleCourse?.categoryId?.name}
              </option>
              ;
              {/* {org &&
                org.map((v) => {
                  return v?.course?.map((v) => {
                    return <option value={v.name}>{v.name}</option>;
                  });
                })}'' */}
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicCollege">
              <Form.Label>Fees</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fees"
                name="fees"
                value={values.fees}
                onChange={handleFees}
              />
            </Form.Group>

            <Form.Label>Eligibility</Form.Label>

            <Form.Select
              aria-label="Default select example"
              name="eligibility"
              value={EligibilityValue}
              onChange={handleEligibility}
            >
              <option>Select Eligibility</option>
              <option value="10+2">10+2</option>
              <option value="PG">PG</option>
              <option value="UG">UG</option>
            </Form.Select>
            <div className="text-end mt-2 mb-4">
              <Fab color="primary" aria-label="add" type="submit">
                <AddIcon />
              </Fab>
            </div>
          </Form>
          {course?.length>0 ?<Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Fees</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              { course &&
                course.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.course}</td>
                      <td>{item.fees}</td>
                      <td>{item.eligibility}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table> :''}
        </span>
      ),
    },
    {
      label: "Gallery",
      description: (
        <div className="mb-4">
          <div className="text-center mb-5 mt-2">
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                // name="gallery"
                type="file"
                onChange={uploadSingleFile}
                multiple
              />

              <Fab
                color="secondary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon /> Upload photo
              </Fab>
            </label>
          </div>
          <div className="form-group preview">
            <div className="container">
              <div className="row gy-4">
                {file.length > 0 &&
                  file.map((item, index) => {
                    return (
                      <div className="col-md-4 mx-auto img_setting" key={item}>
                        <img src={item} alt="" />
                        <span onClick={() => deleteFile(index)}>
                          <Fab color="secondary" aria-label="add">
                            <DeleteIcon />
                          </Fab>
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Faculty",
      description: (
        <span>
          <Form onSubmit={handleFaculty}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h4>Faculty</h4>
                    <input
                      type="text"
                      value={query}
                      onChange={handleInputChange}
                    />
                    <ul>
                      {facultyData.map((result) => (
                        <li>{result.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end mt-2 mb-4">
              <Fab color="primary" aria-label="add" type="submit">
                <AddIcon />
              </Fab>
            </div>
          </Form>
        
          <div className="col-lg-6 col-md-6 col-sm-12">
            {faculty &&
              faculty.map((item) => {
                return (
                  <div className="faculty_details_box">
                    <div className="faculty_name">
                      <h3>{item.name}</h3>
                      <p>{item.post}</p>
                    </div>
                    <div className="faculty_contact">
                      <h3>Contact this faculty</h3>
                      <div>
                        <span className="faculty_contact_span">Email:</span>
                        <span className="faculty_contact_span_detail">
                          {item.email}
                        </span>
                      </div>
                      <div>
                        <span className="faculty_contact_span">Phone:</span>
                        <span className="faculty_contact_span_detail">
                          +91 {item.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </span>
      ),
    },
  ];
console.log(activeStep)
  return (
    <div className="container">
      <div className="row">
        <div className={ activeStep==4?`col-6 mx-auto mt-5`:`col-8 mx-auto mt-5`}>
        <div style={{display:'flex',justifyContent:'center',fontSize:'2rem'}}>
        <span className='text-center mb-2' style={{color:'tomato',borderBottom:'2px solid tomato'}}>Add College</span>
        </div>
          <Box sx={{ maxWidth: "100%" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 3 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
                <Button
                  onClick={submit}
                  variant="contained"
                  sx={{ mt: 1, mr: 1 }}
                >
                 {isLoading ? <Spinner animation="border" variant="primary" />:'Submit'} 
                </Button>
              </Paper>
            )}
          </Box>
        </div>
        {
          activeStep==4 ? <div className='col-6' style={{marginTop:'110px'}}>
          <p className='text-primary fw-bold'>Instructions before Submitting the Form</p>
          <ul className='form_ins'>
          <li>Check All the Fields are Filled Properly</li>
          <li><span className='text-danger'>*</span> Marked Fields are Compulsory</li>
          <li>Check any checkboxes or radio buttons that need to be selected.</li>
          <li>Double-check your contact information, such as your email address and phone number, to make sure they are correct.</li>
          <li>Finally, make a note of any reference number or confirmation number provided after submitting the form, which can be used to track the status of your submission.</li>

          </ul>
          </div>:''
      }
      </div>
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
theme="light"
/>
    </div>
  );
}
