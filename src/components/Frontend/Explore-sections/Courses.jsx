import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Eng_img from '../assets/img/engineering.png'
import careers_img from '../assets/img/careers.png';
import {search_by_name} from '../../../Redux/slice/search_values_college'
import { api_instance } from '../Header/HeaderApi`s';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Courses = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[page,setPage]=useState(1);
  const[courseList,setCouresList]=useState([]);
  const[totalPages,setTotalPages]=useState('');

  function getall_course() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-course?page=${page}&limit=8`)
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
        
  },[page])
  // console.log(courseList)

  const handlePageChange = (event, value) => {
    console.log(value)
    setPage(value);
  };

  return (
    <>
        <section className="explore_category_section">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-6">
            <div className="explore_category_small_card">
              <img src={careers_img} alt="" />
              <h3>Popular Courses</h3>
             <NavLink className='link' to='/'>View all Courses</NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-6">
            <div className="row">
            {
              courseList && courseList.map((item)=>{
                    return <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6" style={{cursor:'pointer'}} onClick={()=>{
                      dispatch(search_by_name(item.name));
                      navigate("/Top-Universities")
                    }}>
                    <div className="explore_category_small_box">
                      <img src={Eng_img} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  </div>
              })
            }
              
            </div>
            {
              totalPages >1 ? <div style={{display:"flex",justifyContent:"center",marginTop:'10px'}}>
              <Pagination count={totalPages} page={page ?? 1} onChange={handlePageChange}  color="primary" />
              </div>:""
            }
            
            </div>
        </div>
      </section>
    </>
  )
}

export default Courses
