import React, { useState,useRef, useEffect } from 'react'
// import logo from '../../dashboard/assets/img/logo.png'
import logo from '../../../../src/logo.png'
import { NavLink ,Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import { search_by_city ,search_by_course} from '../../../Redux/slice/search_values_college'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api_instance } from './HeaderApi`s'

const Menus = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const[colleges2,setColleges2]=useState([])

  const[college_id,setCollege_id]=useState('');
const ref=useRef()
const states = useSelector((state) => state.searchCollegeSlice.value);
console.log(states.search_by_city,states.search_by_course)
  const menu_drop_down=(cityId,courseId)=>{
    // console.log(cityId,courseId)
    dispatch(search_by_city(cityId)) 
    dispatch(search_by_course(courseId))
    navigate('/Top-Universities');
  }
  function get_college2() {
    api_instance
      .get(`/api/get-colleges`)
      .then((response) => {
        if (response) {
          console.log(response.data.data)
          setColleges2(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()=>{
    get_college2();
  },[]);

  const top_city=colleges2 && colleges2.map((city)=>{
    return {
      course:"B.Tech",
      city:city.city.city,
      cityId:city.city.cityId,
      courseId:"64169b7e41c1311f4cb33e27"
    }
  })


  const topCity=['Hyderabad','Jaipur','Pune','Kolkata','Lucknow']
  // console.log([data][0]?.results)
  return (
    <>
      <header class="nav-bg-b main-header navfix fixed-top menu-white desktop_menu_none">
        <div class="container-fluid m-pad">
          <div class="menu-header">
            <div class="dsk-logo">
              <NavLink to="/" className="navbar-brand nav-brand">
                {/* <img alt="" src={logo} className="img-fluid" /> */}
          <img className='img-fluid socail_logo' src={logo} alt='logo' />

                {/* <h1 className='logo'>  Edudron</h1> */}
              </NavLink>
            </div>
            <div class="custom-nav" role="navigation">
              <ul class="nav-list">
                <li class="sbmenu">
                  <NavLink to='/' class="menu-links" >
                    Home
                  </NavLink>
                </li>

                <li class="sbmenu">
                  <NavLink to="/" className="menu-links dropdown_items">
                    B.Tech
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    {/* {
                                      [data][0]?.results?.map((values,index)=>{
                                       return <Nav.Item>
                                      <Nav.Link eventKey={values._id} onClick={()=>setCollege_id(values)}>
                                       {values.name}
                                      </Nav.Link>
                                    </Nav.Item>
                                      })
                                    } */}
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    
                                        <Tab.Pane eventKey="first">
                                              <div className="row">
                                                <div className="col-lg-4 dropdown_sub_menus">
                                                  <h2>Top Cities</h2>
                                                  {
                                                    top_city.map((v,i)=>{
                                                      return <NavLink key={i} onClick={()=>menu_drop_down(v.cityId,v.courseId)} to='/Top-Universities' ref={ref}>
                                                      Top {v.course} Colleges in {v.city}
                                                    </NavLink>
                                                    })
                                                  }
                                                 
                                                </div>
                                                <div className="col-lg-4 dropdown_sub_menus margin_top">
                                                {
                                                  top_city.map((v,i)=>{
                                                    return <NavLink key={i} onClick={()=>menu_drop_down(v.cityId,v.courseId)} ref={ref}>
                                                    Top {v.course} Colleges in {v.city}
                                                  </NavLink>
                                                  })
                                                }
                                                </div>
                                                <div className="col-lg-4 dropdown_sub_menus">
                                                  <h2>Top State</h2>
                                                  <NavLink to="">
                                                    Top B.Tech Colleges in Rajasthan
                                                  </NavLink>
                                                  <NavLink to="">
                                                    Top B.Tech Colleges in MP
                                                  </NavLink>
                                                  <NavLink to="">
                                                    Top B.Tech Colleges in UP
                                                  </NavLink>
                                                  <NavLink to="">
                                                    Top B.Tech Colleges in Harayana
                                                  </NavLink>
                                                  <NavLink to="">
                                                    Top B.Tech Colleges in Panjab
                                                  </NavLink>
                                                </div>
                                              </div>
                                            </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="sbmenu">
                  <NavLink className="menu-links dropdown_items">
                    MBA
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Cities</h2>
                                          {
                                            topCity.map((v,i)=>{
                                              return <Link to='#' key={i}   >
                                              <span onClick={()=>menu_drop_down(v)}>
                                              Top MBA Colleges in {v}
                                              </span>
                                            </Link>
                                            })
                                          }
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus margin_top">
                                        {
                                          topCity.map((v,i)=>{
                                            return <Link to='#' key={i}   >
                                            <span onClick={()=>menu_drop_down(v)}>
                                            Top MBA Colleges in {v}
                                            </span>
                                          </Link>
                                          })
                                        }
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top State</h2>
                                          <NavLink to="">
                                            Top B.MBA Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.MBA Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.MBA Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="sbmenu">
                  <NavLink to="/" className="menu-links dropdown_items">
                    MBBS
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Cities</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus margin_top">
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top State</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="sbmenu">
                  <NavLink to="/" className="menu-links dropdown_items">
                    Law
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Cities</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus margin_top">
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top State</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="sbmenu">
                  <NavLink to="/" className="menu-links dropdown_items">
                    Study Abroad
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Cities</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus margin_top">
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top State</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="sbmenu">
                  <NavLink to="/" className="menu-links dropdown_items">
                    All Courses
                  </NavLink>
                  <div class="nx-dropdown">
                    <div class="sub-menu-section">
                      <div class="container">
                        <div class="sub-menu-center-block">
                          <div class="sub-menu-column">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="first"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav
                                    variant="pills"
                                    className="flex-column header_tabs"
                                  >
                                    <Nav.Item>
                                      <Nav.Link eventKey="first">
                                        Top Cities & State
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="second">
                                        College
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="third">
                                        B. Tech Exams
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="four">
                                        Popular Stream
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="five">
                                        Ranking 2023
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="six">
                                        College Predictor
                                      </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                      <Nav.Link eventKey="seven">
                                        Cut Off
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9} className="dropdown_menus">
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Cities</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus margin_top">
                                          <NavLink to="">
                                            Top B.Tech Colleges in Hyderabad
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Jaipur
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Pune
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Kolkata
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Lucknow
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top State</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Type</h2>
                                          <NavLink to="">
                                            Top NITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top IIITs in India
                                          </NavLink>
                                          <NavLink to="">
                                            Government B.Tech Colleges in India
                                          </NavLink>
                                          <NavLink to="">
                                            Top Private B.Tech Colleges in India
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Exam & Universities</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>JEE Main Exam</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular B.Tech Exams</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>By Acceptance</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>B.TECH Colleges</h2>
                                          <div className="popular_stream">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <div className="popular_stream margin_top">
                                            <h5>
                                              Computer Science
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                          <div className="popular_stream">
                                            <h5>
                                              Civil Engineering
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>

                                          <div className="popular_stream">
                                            <h5>
                                              ELECTRICAL & ELECTRONICS
                                              <span> (3210)</span>
                                            </h5>
                                            <NavLink to="">Course Info</NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                      <div className="row">
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 dropdown_sub_menus">
                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>

                                          <div className="ranking_menus_box">
                                            <div className="imgs">
                                              <img
                                                className="img-fluid"
                                                src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?tr=w-80"
                                                alt=""
                                              />
                                            </div>
                                            <div className="ranking_menus">
                                              <h2>NIRF RANKING</h2>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in Tamil
                                                Nadu
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Maharashtra
                                              </NavLink>
                                              <NavLink to="">
                                                Ranked B.Tech colleges in
                                                Karnataka
                                              </NavLink>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>College Finder for Top Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <NavLink to="" className="margin_top">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                      <div className="row">
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Exams</h2>
                                          <NavLink to="">
                                            All About JEE Main 2022
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Registration
                                          </NavLink>
                                          <NavLink to="">
                                            Jee Main Previous Year Papers &
                                            Sample Papers
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main College Predictor
                                          </NavLink>
                                          <NavLink to="">
                                            JEE Main Cutoff
                                          </NavLink>
                                          <NavLink to="">JEE Advanced</NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Top Colleges</h2>
                                          <NavLink to="">
                                            B.Tech Colleges accepting JEE Main
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting WBJEE
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting KEAM
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting COMEDK
                                          </NavLink>
                                          <NavLink to="">
                                            B.Tech Colleges accepting TNEA
                                          </NavLink>
                                        </div>
                                        <div className="col-lg-4 dropdown_sub_menus">
                                          <h2>Popular Collection</h2>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Rajasthan
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in MP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in UP
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Harayana
                                          </NavLink>
                                          <NavLink to="">
                                            Top B.Tech Colleges in Panjab
                                          </NavLink>
                                        </div>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Menus
