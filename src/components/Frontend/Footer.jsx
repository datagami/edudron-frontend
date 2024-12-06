import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMail,AiFillFacebook,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai'
import { BsTelephonePlus } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { SlSocialFacebook } from 'react-icons/sl'
import { api_instance } from './Header/HeaderApi`s'
import { search_by_course ,search_by_stream} from '../../Redux/slice/search_values_college';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const[courseList,setCouresList]=useState([]);
  const[streamList,setStreamList]=useState([]);

  const navigate=useNavigate()
  const dispatch=useDispatch();

  function getall_course() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-course?course=&page=${1}&limit=5`)
      .then((response) => {
        if (response) {
          // console.log(response.data)
          setCouresList(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }
  function getAllStream() {
    // setIsLoading(true)
    api_instance
      .get(`/api/get-stream?page=1&limit=5`)
      .then((response) => {
        if (response) {
          console.log(response.data)
          setStreamList(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false)
      });
  }

  useEffect(()=>{
    getall_course();
    getAllStream();
    dispatch(search_by_course(''));
  },[])

  const courseFooter=(value)=>{
    dispatch(search_by_course(value));
    if(value){
      navigate('/Top-Universities')
    }
  }
  const streamFooter=(value)=>{
    dispatch(search_by_stream(value));
    if(value){
      navigate('/Top-Universities')
    }
  }
  const term_cond=()=>{
    navigate("/term")
  }

  return (
    <>
      <footer className="footer_main">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading">Top College</h3>
              <div className="footer_menus">
              {
                courseList && courseList.map((item)=>{
                   return <NavLink key={item._id} to="" onClick={()=>courseFooter(item._id.split())}>{item.name}</NavLink>
                })
              }
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading">Top Streams</h3>
              <div className="footer_menus">
              {
                streamList && streamList.map((item)=>{
                  return <NavLink key={item._id} to="" onClick={()=>streamFooter(item._id.split())} style={{
                    textTransform:"capitalize"
                  }}>{item.name}</NavLink>
                })
              }
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading">Top Exam</h3>
              <div className="footer_menus">
                <NavLink to="">CAT</NavLink>
                <NavLink to="">GATE</NavLink>
                <NavLink to="">JEE-Main</NavLink>
                <NavLink to="">XAT</NavLink>
                <NavLink to="">Clat</NavLink>
                <NavLink to="">MAT</NavLink>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading">Study Abroad</h3>
              <div className="footer_menus">
                <NavLink to="">Canada</NavLink>
                <NavLink to="">USA</NavLink>
                <NavLink to="">UK</NavLink>
                <NavLink to="">UAE</NavLink>
                <NavLink to="">Australia</NavLink>
                <NavLink to="">Germany</NavLink>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading">Board Exams</h3>
              <div className="footer_menus">
                <NavLink to="">CBSE Class 12</NavLink>
                <NavLink to="">CBSE Class 12th Results</NavLink>
                <NavLink to="">CBSE Class 12th Syllabus</NavLink>
                <NavLink to="">CBSE Class 12th Exam Dates</NavLink>
                <NavLink to="">CBSE Class 10</NavLink>
                <NavLink to="">CBSE Class 10th Result</NavLink>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6 col-sm-6">
              <h3 className="footer_menu_heading_logo">Edudron</h3>
              <div className="footer_address_col">
                <p>
                  5th Floor, BPTP Centra One, Sector 61, Golf Course Extension
                  Road, Gurugram, Haryana 122002
                </p>
                <div className="phone_email">
                  <NavLink to="">
                    <sapn>
                      <BsTelephonePlus className="footer_socail_icon" />
                    </sapn>
                    1800-572-9877
                  </NavLink>
                </div>
                <div className="phone_email">
                  <NavLink to="">
                    <sapn>
                      <AiOutlineMail className="footer_socail_icon" />
                    </sapn>
                    hello@edudron.com
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="other_links_row">
            <div className="other_links_col">
              <h3>Other Links</h3>
              <div className="other_links_col_inner">
                <NavLink to="/"> About Edudron </NavLink>
                <NavLink to="/"> Contact Us </NavLink>
                <NavLink to="/"> Advertising </NavLink>
                <NavLink to="/"> Careers </NavLink>
                <NavLink to="/term" onClick={term_cond}>Terms & Conditions </NavLink>
              </div>
            </div>

            <div className="other_links_social_col">
              <div className="other_links_col_inner">
                <NavLink to="/" className='footer_socail_bg' >   <SlSocialFacebook className="footer_socail_icon" /> </NavLink>
                <NavLink to="/" className='footer_socail_bg' > <AiOutlineInstagram className="footer_socail_icon" /></NavLink>
                <NavLink to="/" className='footer_socail_bg' > <FiTwitter className="footer_socail_icon" /> </NavLink>
                <NavLink to="/" className='footer_socail_bg' > <AiOutlineYoutube className="footer_socail_icon" /> </NavLink>
                <NavLink to="/" className='footer_socail_bg' > <FaLinkedinIn className="footer_socail_icon" /> </NavLink>
              </div>
            </div>


            
          </div>


          <div className="copyright_row">
            <p>© 2022 Edudron Web Pvt. Ltd. All Rights Reserved</p>
            </div>
            
        </div>
      </footer>
    </>
  )
}

export default Footer
