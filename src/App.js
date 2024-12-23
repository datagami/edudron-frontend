import React, { useState, useEffect } from "react";
import logo from "./logo.png";

import Home from "./components/dashboard/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/dashboard/Profile";
import Main from "./components/dashboard/Main";
import Users from "./components/dashboard/UsersList";
import AddNewUser from "./components/dashboard/AddNewUser";
import UsersList from "./components/dashboard/UsersList";
import AdminList from "./components/dashboard/AdminList";
import Addnewadmin from "./components/dashboard/Addnewadmin";
// import Footer from './components/dashboard/Footer'
import Collegelist from "./components/dashboard/Collegelist";
import Addnewcollege from "./components/dashboard/Addnewcollege";
import Teacherlist from "./components/dashboard/Teacherlist";
import Addnewteacher from "./components/dashboard/Addnewteacher";
import Listcategory from "./components/dashboard/Listcategory";
import Addnewcategory from "./components/dashboard/Addnewcategory";
import Bannerslist from "./components/dashboard/Bannerslist";
import Addnewbanners from "./components/dashboard/Addnewbanners";
import Cmslist from "./components/dashboard/Cmslist";
import Addnewcms from "./components/dashboard/Addnewcms";
import Setnotification from "./components/dashboard/Setnotification";
import Settinglist from "./components/dashboard/Settinglist";
import Permissions from "./components/dashboard/Permission";
import Settingcourses from "./components/dashboard/Settingcourses";
import Settingranking from "./components/dashboard/Settingranking";
// import ProtectedRoute from './ProtectedRoute'
import Frontend from "./components/Frontend/Frontend";
import Social_home from "./components/Social-post/Social_home";
import Social_main from "./components/Social-post/Social_main";
import Signup from "./components/Frontend/Form/Signup";
import Header from "./components/Frontend/Header/Header";
import Footer from "./components/Frontend/Footer";
import Courses from "./components/Frontend/Top-courses/Courses";
import TopUniversities from "./components/Frontend/Top-universities/TopUniversities";
import Universities_Details from "./components/Frontend/Top-universities/Universities_Details";
import Review from "./components/Frontend/Review";
import Admission from "./components/Frontend/Admission";
import Exam from "./components/Frontend/Exam";
import Network from "./components/Social-post/Network";
import Notification from "./components/Social-post/Notification";
import Socail_Profile from "./components/Social-post/Socail_Profile";
import Jobs from "./components/Social-post/Jobs";
import Job_details from "./components/Social-post/Job_details";
import { useLocation } from "react-router-dom";
// import Message from './components/Social-post/Message'
// import ChatTest from './ClientSocket/ChatTest'
// import DashboardLogin from './components/dashboard/DashboardLogin'
// import { useLocation } from 'react-router-dom'
// import ChatTest from './components/ClientSocket/ChatTest'
import DashboardLogin from "./components/dashboard/DashboardLogin";
import AdminMain from "./components/Social-post/admin/AdminMain";
import Job from "./components/Social-post/admin/post-job/Job";
import JobStep1 from "./components/Social-post/admin/post-job/JobStep1";
import JobStep2 from "./components/Social-post/admin/post-job/JobStep2";
import Social_Header from "./components/Social-post/Social_Header";
import ChatPage from "./components/ClientSocket/ChatPage";
import { getTokens, onMessageListener } from "./services/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import socketIO from "socket.io-client";
import Chat from "./components/Social-post/Chat";
import UsersProfile from "./components/Social-post/UsersProfile";
import Search_Result from "./components/Social-post/Search_Result";
import RegisterAdmin from "./components/Social-post/RegisterAdmin";
import AddCollege from "./components/Social-post/AddCollege";
import {
  search_by_stream,
  search_by_city,
  search_by_course,
} from "./Redux/slice/search_values_college";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler";
import WriteReview from "./components/Frontend/WriteReview";
import Term from "./components/Frontend/Term";
import CollageDetails from "./components/Frontend/Top-universities/CollageDetails";
import {BASE_API_URL} from "./components/Frontend/Header/HeaderApi`s";
export const socket = socketIO.connect(BASE_API_URL);
export let backgound_notification;

function CollegeHome() {
  return (
    <>
      {/* <Header /> */}
      <Frontend />
      {/* <Home /> */}
    </>
  );
}

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (pathname !== "/Top-Universities") {
    dispatch(search_by_stream(""));
  }

  const user = JSON.parse(localStorage.getItem("login_result"));
  const user_ = JSON.parse(sessionStorage.getItem("login_result"));

  //  console.log(user)
  //  if(user==null){
  //   console.log('user data is not available')
  //  }else if(user !==null ){
  //   // alert('user joined')
  //   socket?.emit('joinUser', {id: user?.data?._id,followers:user?.data?._id})
  //  }else{
  //   console.log('error while getting user')
  //  }

  const user_data = {
    id: user?.data?._id,
    name: user?.data?.fullname,
    socketID: socket.id,
  };
  useEffect(() => {
    socket?.emit("newUser", user_data);
  }, [socket, user_data]);

  useEffect(() => {
    socket.on("newUserResponse", (users) => {
      const online_users = users.map((online) => {});
    });
  }, [socket]);

  // useEffect(()=>{
  //   socket.on('newUserResponse',users=>{
  //     // console.log(users)
  //   })
  // },[socket])

  //==============firebase notification================================
  const [notification, setNotification] = useState([]);
  const [isTokenFound, setTokenFound] = useState({
    status: false,
    token: "",
  });
  // console.log(notification)
  useEffect(() => {
    getTokens(setTokenFound);
  }, [isTokenFound.status]);

  backgound_notification = (back_noti) => {
    console.log(back_noti);
  };
  console.log(notification);
  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        // console.log(payload);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
        toast(
          <span>
            <h3>{payload.notification.title}</h3>
            <div>{payload.notification.body}</div>
          </span>,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      })
      .catch((err) => console.log("failed: ", err));
  }, [notification]);

  //========================firebase notification ends
  return (
    <div>
      {/* <AddCollege/> */}
      {/* <Frontend /> */}
      {/* <Social_home /> */}
      {/* <DashboardLogin/> */}
      {/* <Home /> */}

      {/* <Routes>
        <Route path="/hhh" element={<Main />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/userslist" element={<UsersList />} />
        <Route path="/addnewusers" element={<AddNewUser />} />

        <Route path="/adminlist" element={<AdminList />} />
        <Route path="/Addnewadmin" element={<Addnewadmin />} />

        <Route path="/collegelist" element={<Collegelist />} />
        <Route path="/addnewcollege" element={<Addnewcollege />} />

        <Route path="/teacherlist" element={<Teacherlist />} />
        <Route path="/addnewteacher" element={<Addnewteacher />} />

        <Route path="/listcategory" element={<Listcategory />} />
        <Route path="/addnewcategory" element={<Addnewcategory />} />

        <Route path="/bannerslist" element={<Bannerslist />} />
        <Route path="/addnewbanners" element={<Addnewbanners />} />

        <Route path="/cmslist" element={<Cmslist />} />
        <Route path="/addnewcms" element={<Addnewcms />} />

        <Route path="/setnotification" element={<Setnotification />} />

        <Route path="/settinglist" element={<Settinglist />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/Settingcourses" element={<Settingcourses />} />
        <Route path="/Settingranking" element={<Settingranking />} />
      </Routes> */}
      {/* <Footer /> */}

      {pathname == "/post" ? (
        <Routes>
          <Route path="/post" element={<Social_home />} />
        </Routes>
      ) : pathname == "/network" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/network" element={<Network />} />
          </Routes>
        </>
      ) : pathname == "/jobs" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </>
      ) : pathname == "/message" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/message" element={<Message />} />
          </Routes>
        </>
      ) : pathname == "/notification" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </>
      ) : pathname == "/profile" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/profile" element={<Socail_Profile />} />
          </Routes>
        </>
      ) : pathname == "/admin" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/admin" element={<AdminMain />} />
          </Routes>
        </>
      ) : pathname == "/jobPost" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/jobPost" element={<Job />} />
          </Routes>
        </>
      ) : pathname == "/JobDetails" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/JobDetails" element={<JobStep1 />} />
          </Routes>
        </>
      ) : pathname == "/JobDetails2" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/JobDetails2" element={<JobStep2 />} />
          </Routes>
        </>
      ) : pathname == "/newchat" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/newchat" element={<Chat />} />
          </Routes>
        </>
      ) : pathname == "/users_profile" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/users_profile" element={<UsersProfile />} />
          </Routes>
        </>
      ) : pathname == "/searchresult" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/searchresult" element={<Search_Result />} />
          </Routes>
        </>
      ) : pathname == "/register-admin" ? (
        <>
          <Social_Header />
          <Routes>
            <Route path="/register-admin" element={<RegisterAdmin />} />
          </Routes>
        </>
      ) : (
        <>
          <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Header />
            <Routes>
              <Route path="/" element={<Frontend />} />
              {/* <Route path="/" element={ <ProtectedRoute Component={Social_home} /> } /> */}

              <Route path="/fontend" element={<Frontend />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Top-Courses" element={<Courses />} />
              <Route path="/Top-Universities" element={<TopUniversities />} />
              <Route
                path="/Universities_Details"
                element={<Universities_Details />}
              />
              <Route
                path="/collage-details/:id"
                element={<CollageDetails />}
              />
              <Route path="/review" element={<Review />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/network" element={<Network />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Socail_Profile />} />
              <Route path="/jobs" element={<Jobs />} />
              {/* <Route path="/jobs" element={ <ProtectedRoute Component={Jobs} /> } /> */}
              <Route path="/jobsdetails" element={<Job_details />} />
              {/* <Route path="/message" element={<Message />} /> */}
              <Route path="/admin" element={<AdminMain />} />
              <Route path="/jobPost" element={<Job />} />
              <Route path="/JobDetails" element={<JobStep1 />} />
              <Route path="/JobDetails2" element={<JobStep2 />} />
              <Route path="/chat" element={<ChatPage socket={socket} />} />
              <Route path="/newchat" element={<Chat />} />
              {/* <Route path="/newchat" element={ <ProtectedRoute Component={Chat} /> } /> */}

              <Route path="/users_profile" element={<UsersProfile />} />
              <Route path="/searchresult" element={<Search_Result />} />
              <Route path="/register-admin" element={<RegisterAdmin />} />
              <Route path="/college_home" element={<CollegeHome />} />
              <Route path="/write_review" element={<WriteReview />} />
              <Route path="/term" element={<Term />} />
            </Routes>
            {/* {
            pathname !='/' ? <Footer /> :''
          } */}
          </ErrorBoundary>
        </>
      )}
      <ToastContainer
        position="bottom-right"
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

      <ToastContainer />
    </div>
  );
}

export default App;
