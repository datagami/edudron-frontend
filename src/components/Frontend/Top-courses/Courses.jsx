import React,{useEffect,useMemo,useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { api_instance } from '../Header/HeaderApi`s'
import Pagination from '@mui/material/Pagination';
import {search_by_course, search_by_name} from '../../../Redux/slice/search_values_college';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Courses = () => {
  const searchby = useSelector((state) => state.searchCollegeSlice.value);
  const navigate=useNavigate();
  const[colleges,setColleges]=useState([]);
  const[display,setDisplay]=useState("none");
  const[totalPages,setTotalPages]=useState('');
  const[page,setPage]=useState(1);
  const[courseList,setCouresList]=useState([]);
  const dispatch=useDispatch();
  function get_college() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-colleges`)
      .then((response) => {
        if (response) {
          // setIsLoading(false)
          // console.log(response.data.data);
          setColleges(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(()=>{
    get_college()
  },[]);

  function getall_course() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-course?course=${searchby.search_by_name}&page=${page}&limit=9`)
      .then((response) => {
        if (response) {
          console.log(response.data)
          setTotalPages(response.data.TotalPages)
          setCouresList(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }
  useEffect(()=>{
    getall_course() ;
        
  },[page,searchby.search_by_course,searchby.search_by_name]);
const new_course_list=useMemo(()=>{
 return courseList.map((item)=>{
    return {
      courseId:item._id,
      course:item.name,
      streamId:item.streamId._id,
      stream:item.streamId.name,
      course_pic:item.course_pic
    }
  })
},[courseList])
// console.log(new_course_list);

const coursesByStream = new_course_list.reduce((result, course) => {
  if (!result[course.stream]) {
    result[course.stream] = [];
  }
  result[course.stream].push(course);
  return result;
}, {});
// console.log(coursesByStream)
  

  const handlePageChange = (event, value) => {
    console.log(value)
    setPage(value);
  };

  const search_college=(value)=>{
    dispatch(search_by_course(value));
    navigate("/Top-Universities")
  }
  useEffect(()=>{
    dispatch(search_by_course(""));
    dispatch(search_by_name(""))
  },[])

//   <section className="top_courses_sections">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="top_courses_sections_heading_row">
//           <h2>DON'T KNOW WHAT TO CHOOSE ?</h2>
//           <h2>CHOOSE BY YOUR LEVEL</h2>
//           <p>
//             Edudron is an extensive search engine for the students,
//             parents, and education industry players who are seeking
//             information
//           </p>
//         </div>
//       </div>
//     </div>

//     <div className="row top_courses_sections_content_row">
//       {
//         colleges.map((item)=>{
//           // console.log(item.college_pics[0])
//           return <div className="col-lg-4 col-md-6 col-sm-12">
//           <div>
//             <div className="top_courses_box_images ">
//               <div className="top_courses_box_images_content_outer" style={{backgroundImage:`url(${item.college_pics[0]})`}}>
//                 <div className="top_courses_box_images_content">
//                   <NavLink to="">
//                     <h1> AFTER 10TH COURSES </h1>
//                     <p>
//                       APPLICABLE FOR DIPLOMA COURSES & CERTIFICATION COURSES
//                     </p>
//                   </NavLink>
//                 </div>
//               </div>
//               <div className="courses_ways_number_main">
//                 <div className="courses_ways_number">
//                   <NavLink to="">
//                     <h3>Arts</h3>
//                     <span>20</span>
//                   </NavLink>
//                 </div>

//                 <div className="courses_ways_number">
//                   <NavLink to="">
//                     <h3>ITI</h3>
//                     <span>20</span>
//                   </NavLink>
//                 </div>

//                 <div className="courses_ways_number">
//                   <NavLink to="">
//                     <h3>Dental</h3>
//                     <span>20</span>
//                   </NavLink>
//                 </div>

//                 <div className="courses_ways_number">
//                   <NavLink to="">
//                     <h3>Hotel Management</h3>
//                     <span>20</span>
//                   </NavLink>
//                 </div>

//                 <div className="courses_ways_number">
//                   <NavLink to="">
//                     <h3>Animation</h3>
//                     <span>20</span>
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         })
//       }  
//     </div>
//   </div>
// </section>
  return (
    <>
      <section className="hero_section  top_course_bg_img mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hero_content top_course_bg_img_content">
                <h1>Search From Over 10000 Courses in India</h1>
                <Form className="hero_search_form">
                  <Form.Group
                    className="input_box"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      className="input_box_inner"
                      placeholder="Search courses for Ex. MCA, BA Finance or B.Tech Courses"
                      onFocus={()=>setDisplay("block")}
                      onBlur={()=>{
                        setTimeout(() => {
                        setDisplay('none')
                        
                        }, 1000);
                      }}
                      autoComplete="off"
                      onChange={(e)=>{
                        dispatch(search_by_name(e.target.value))
                      }}
                    />
                    <Button type="submit" className="hero_search_form_btn">
                      <BiSearch className="hero_search_icon" />
                    </Button>
                  </Form.Group>
                  {
                    searchby.search_by_name &&  searchby.search_by_name.length>1 ?
                  <div className='search_results' style={{display:display,cursor:"pointer"}}>
                  <ul >
                  {courseList.length >0 ?
                    courseList && courseList.map((item)=>{
                      // console.log(item)
                      return <li key={item._id}   onClick={()=>search_college(item._id)}>{item.name}</li>
                    }) : <div className='search_results'>
                    <ul style={{display:display,cursor:"pointer"}}>
                    <li>No Result Found</li>
                    </ul>
                    </div>
                  }
                  </ul>
                  </div>:""
                }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ============CHOOSE BY INTEREST=========== */}
      <section className="top_courses_sections choose_by_intersest_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top_courses_sections_heading_row choose_by_intersest_heading_row">
                <h2 style={{ color: '#012970;' }}>CHOOSE BY INTEREST</h2>
                <p>
                  Edudron.in is an extensive search engine for the
                  students, parents, and education industry players who are
                  seeking information
                </p>
              </div>
            </div>
          </div>

          <div className="row choose_interst_box_main_row">
          {
            Object.keys(coursesByStream).map((stream,index)=>{
              return <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="choose_interst_box_main">
                <div className="interest_top_div">
                  <div className="interest_img_bg">
                    <img
                      className="img-fluid"
                      src="https://cdn-icons-png.flaticon.com/512/3079/3079165.png"
                      alt=""
                    />
                  </div>
                  <h3 style={{textTransform:"capitalize"}}>{stream}</h3>
                </div>
                <div className="choose_interest_course_outer">
                {
                  coursesByStream[stream].map((course)=>{
                      return <div className="choose_interest_course" key={course.courseId}>
                      <NavLink onClick={()=>dispatch(search_by_course(course.courseId.split()))} to="/Top-Universities">{course.course}</NavLink>
                    </div>
                  })
                  
                }
                </div>
                <div className="explore_div">
                  <NavLink to="">Explore All Courses</NavLink>
                </div>
              </div>
            </div>
            })
          }
            <div style={{display:"flex",justifyContent:"center"}}>
            <Pagination count={totalPages} page={page ?? 1} onChange={handlePageChange}  color="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ======tranding_courses_section======== */}
      <section className="top_courses_sections tranding_courses_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="top_courses_sections_heading_row choose_by_intersest_heading_row">
                <h2 style={{ color: '#012970;' }}>#TRENDING COURSE SEARCH</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className="tranding_courses_main">
                  <div className="choose_interest_course">
                    <NavLink to="">B.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">M.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">BE/B.TECH</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">B.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">M.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">BE/B.TECH</NavLink>
                  </div>

                  <div className="choose_interest_course">
                    <NavLink to="">B.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">M.Tech</NavLink>
                  </div>
                  <div className="choose_interest_course">
                    <NavLink to="">BE/B.TECH</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Courses
