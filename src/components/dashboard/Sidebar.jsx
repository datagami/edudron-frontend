import React ,{useState} from 'react'
import './assets/css/custom.css'
// import { toggleClass } from './Header';
// react icons
import { AiTwotoneSetting, AiOutlineDashboard } from 'react-icons/ai';
import { MdWallpaper } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { FaUserSecret } from 'react-icons/fa';
import { GiTeacher,GiNotebook} from 'react-icons/gi';
import { HiOutlineClipboardList} from 'react-icons/hi';
import { IoIosNotificationsOutline ,IoIosSchool} from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';




// import { useSelector } from 'react-redux';



const Sidebar = () => {

    // const isActive=useSelector((state)=>state?.hambergSlice?.value);
  

    return (
        <>
        <div >
            <aside id="sidebar"  className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <NavLink to='/' className="nav-link ">
                            <AiOutlineDashboard className='sidebar_icons' />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/userslist' className="nav-link collapsed" >
                            <FiUsers className='sidebar_icons' />
                            <span>Users</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/adminlist' className="nav-link collapsed">
                            <FaUserSecret className='sidebar_icons' />
                            <span>Admin</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/teacherlist' className="nav-link collapsed">
                            <GiTeacher className='sidebar_icons' />
                            <span>Teacher</span>
                        </NavLink>
                    </li>

                  


                    <li className="nav-item">
                        <NavLink to='/' className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
                            <BiCategory className='sidebar_icons' /><span>Category</span>  <RiArrowDropDownLine className='bi bi-chevron-down ms-auto' />
                        </NavLink>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to='listcategory'>
                                    <i className="bi bi-circle"></i><span>List Category</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='addnewcategory'>
                                    <i className="bi bi-circle"></i><span>Add Category</span>
                                </NavLink>
                            </li>
                           
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
                            <IoIosSchool className='sidebar_icons' /><span>College</span><RiArrowDropDownLine className='bi bi-chevron-down ms-auto' />
                        </NavLink>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to='/collegelist'>
                                    <i className="bi bi-circle"></i><span>List College</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/' className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                            <MdWallpaper className='sidebar_icons' /><span>Banners</span><RiArrowDropDownLine className='bi bi-chevron-down ms-auto' />
                        </NavLink>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to='/addnewbanners'>
                                    <i className="bi bi-circle"></i><span>Add Banners</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/bannerslist'>
                                    <i className="bi bi-circle"></i><span>List Banners</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/' className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" >
                            <HiOutlineClipboardList className='sidebar_icons' /><span>CMS Management</span><RiArrowDropDownLine className='bi bi-chevron-down ms-auto' />
                        </NavLink>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to='cmslist'>
                                    <i className="bi bi-circle"></i><span>List</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/setnotification' className="nav-link collapsed">
                            <IoIosNotificationsOutline className='sidebar_icons' />
                            <span>Set Notification</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/' className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" >

                            <AiTwotoneSetting className='sidebar_icons' /><span>Setting</span><RiArrowDropDownLine className='bi bi-chevron-down ms-auto' />
                        </NavLink>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to='/settinglist'>
                                    <i className="bi bi-circle"></i><span>List</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/permissions'>
                                    <i className="bi bi-circle"></i><span>Permission</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/Settingcourses'>
                                    <i className="bi bi-circle"></i><span>Courses</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/Settingranking'>
                                    <i className="bi bi-circle"></i><span>Ranking</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>

            </aside>
            </div>
            <Outlet/>
        </>
    )
}

export default Sidebar