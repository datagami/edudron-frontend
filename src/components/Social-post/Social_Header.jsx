import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../Social-post/CSS/post_style.css'

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineTeam,
  AiOutlineClose,
} from 'react-icons/ai';
import {ImFeed} from 'react-icons/im'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsBagCheck } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'
import { loginStatusAction } from '../../Redux/slice/loginStatusSlice'
import { searchUserAction } from '../../Redux/slice/searchUserSlice'

const Social_Header = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  // const auth = JSON.parse(localStorage.getItem('login_result'))
  const navigate = useNavigate()
  const loginUserData = JSON.parse(localStorage.getItem('login_result'))
// console.log(loginUserData?.status)
  const socketNotification = useSelector(
    (state) => state.socketNotificationSlice.value,
  )
  // console.log(socketNotification?.length)
  const [isOpen, setIsopen] = useState(false)
  const [searchInput, setSearchInput] = useState('');

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true)
  }

  // const loginFun=useSelector(state=>state.loginFunSlice.value);
  // console.log(auth?.status);

  const loginButton = () => {
    // loginFun.LoginShow();
    dispatch(loginStatusAction(true))

  }
  const logout = () => {
    localStorage.clear()
  }

  const handleSearchChange=(e)=>{
    setSearchInput(e.target.value)
      dispatch(searchUserAction(searchInput))
      // console.log(searchInput)
  }

  return (
    <>
    {/* import logo from './logo.png' */}
      <Navbar bg="light" expand="lg" className="socail_header" sticky="top">
        <Container >
          <Navbar.Brand onClick={() => navigate('/fontend')}>Edudron</Navbar.Brand>
          {/* <Navbar.Brand onClick={() => navigate('/college_home')}>Edudron</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink to="/searchresult" className="socail_menu_a">
            <div className="header_search_box">
              <input type="text" placeholder="Search" value={searchInput} onChange={handleSearchChange} />
            </div>
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="socail_menu_a">
                <div className="socail_menus">
                  <AiOutlineHome className="icons" />
                  <h5>Home</h5>
                </div>
              </NavLink>
              <NavLink to="/post" className="socail_menu_a">
              <div className="socail_menus">
                <ImFeed className="icons" />
                <h5>Feeds</h5>
              </div>
            </NavLink>
              <NavLink to="/network" className="socail_menu_a">
                <div className="socail_menus">
                  <AiOutlineTeam className="icons" />
                  <h5>My Network</h5>
                </div>
              </NavLink>

              <NavLink to="/jobs" className="socail_menu_a" style={{pointerEvents: 'none' }}>
                <div className="socail_menus">
                  <BsBagCheck className="icons" />
                  <h5>Jobs</h5>
                </div>
              </NavLink>
              {}
              <NavLink
                to={loginUserData?.status ? '/newchat' : ''}
                className="socail_menu_a"
              >
                <div className="socail_menus">
                  <AiOutlineMessage className="icons" />
                  <h5>Messageing</h5>
                </div>
              </NavLink>

              <NavLink to="/notification" className="socail_menu_a">
                <div className="socail_menus" style={{ position: 'relative' }}>
                  <IoIosNotificationsOutline className="icons" />
                  <h5 className="">Notification</h5>
                  {socketNotification?.length > 0 &&
                  pathname !== '/notification' ? (
                    <span
                      style={{
                        position: 'absolute',
                        right: '21px',
                        bottom: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        fontSize: '10px',
                        padding: '1px 5px',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      {socketNotification?.length}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </NavLink>
                <NavLink to="#" className="socail_menu_a">
                  <div className="socail_menus">
                    <div className="dropdown">
                      <button
                        className=" profile_btn "
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          className="img-fluid"
                          // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
                          src={loginUserData?.data?.avatar}
                          alt=""
                        />

                        <h5 className="profile_text">Me</h5>
                      </button>
                      <div
                        className="dropdown-menu socail_profile_dropdown"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="profile_dropdown_main">
                          <div className="profile_dropdown_main_div">
                            <div className="profile_dropdown_img">
                              <img
                                className="img-fluid"
                                // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
                                src={loginUserData?.data?.avatar}
                                alt=""
                              />
                            </div>
                            <div className="name">
                              <h3>{loginUserData?.data?.fullname}</h3>
                              <p>
                                web designer and developer at Hybrid Plus
                                Infotech Solution Pvt Ltd
                              </p>
                            </div>
                          </div>

                          <div className="drop_view_profile_btn">
                            <NavLink to="/profile">View Profile</NavLink>
                          </div>
                          <div className="profile_another_tags">
                            <h4>Account</h4>
                            <ul>
                              <li>
                                <NavLink to="#">Setting & Privacy</NavLink>
                              </li>
                              <li>
                                <NavLink to="#">Help</NavLink>
                              </li>
                              <li>
                                <NavLink to="#">Language</NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="profile_another_tags">
                            <h4>Manage</h4>
                            <ul>
                              <li>
                                <NavLink to="#">Post & Activity</NavLink>
                              </li>
                              <li>
                                <NavLink to="/admin" style={{pointerEvents: 'none' }}>Hybrid Plus</NavLink>
                              </li>
                              <li>
                                <NavLink to="/jobPost">
                                  {' '}
                                  Post a Free Job
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/register-admin">College Admin</NavLink>
                              </li>
                            </ul>
                          </div>
                          <div className="profile_another_tags">
                            <ul>
                              <li>
                                <NavLink to="#" onClick={logout}>
                                  Sign Out
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              <NavLink to="#" className="socail_menu_a socail_work_menu" style={{pointerEvents: 'none' }}>
                <div className="socail_menus" onClick={ToggleSidebar}>
                  <GiHamburgerMenu className="icons" />
                  <h5>Work</h5>
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
        <div className="sd-header">
          <h4 className="mb-0">Work</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
            <NavLink to="/fontend" className="sd-link">Home</NavLink>
            </li>
            <li>
              <a className="sd-link">Menu Item 2</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 3</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 4</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 5</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 6</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 7</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 8</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div
        className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`}
        onClick={ToggleSidebar}
      ></div> */}

      {/* =========Mobile top header=============== */}
      <header className="mobile_socail_header_top">
        <div className="container">
          <nav className="top_nav">
            <NavLink to="/profile" className="socail_menu_a">
              <div className="socail_menus">
                <img className='img-fluid' src='https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png' alt='' />
              </div>
            </NavLink>

            <NavLink to="/searchresult" className="socail_menu_a header_search_box_div">
            <div className="header_search_box">
              <input type="text" placeholder="Search" />
            </div>
          </NavLink>

            <NavLink to="/newchat" className="socail_menu_a">
              <div className="socail_menus">
                <AiOutlineMessage className="icons" />
                {/* <h5>Message</h5> */}
              </div>
            </NavLink>
            {}
          
          </nav>
        </div>
      </header>

      {/* =========Mobile bottom header=============== */}
      <header className="mobile_socail_header_bottom">
        <div className="container">
          <nav className="bottom-nav">
            <NavLink to="/" className="socail_menu_a">
              <div className="socail_menus">
                <AiOutlineHome className="icons" />
                <h5>Home</h5>
              </div>
            </NavLink>

            <NavLink to="/network" className="socail_menu_a">
              <div className="socail_menus">
                <AiOutlineTeam className="icons" />
                <h5>My Network</h5>
              </div>
            </NavLink>

            <NavLink to="/jobs" className="socail_menu_a">
              <div className="socail_menus">
                <BsBagCheck className="icons" />
                <h5>Jobs</h5>
              </div>
            </NavLink>
            {}
            <NavLink
              to={loginUserData?.status ? '/newchat' : ''}
              className="socail_menu_a"
            >
              <div className="socail_menus">
                <AiOutlineMessage className="icons" />
                <h5>Messageing</h5>
              </div>
            </NavLink>

            <NavLink to="/notification" className="socail_menu_a">
              <div className="socail_menus" style={{ position: 'relative' }}>
                <IoIosNotificationsOutline className="icons" />
                <h5 className="">Notification</h5>
                {socketNotification?.length > 0 &&
                pathname !== '/notification' ? (
                  <span
                    style={{
                      position: 'absolute',
                      right: '21px',
                      bottom: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'red',
                      fontSize: '10px',
                      padding: '1px 5px',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {socketNotification?.length}
                  </span>
                ) : (
                  ''
                )}
              </div>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Social_Header
