import { configureStore } from '@reduxjs/toolkit';
import hambergSlice from './slice/hambergSlice';
import loginSlice  from './slice/Forms/login';
import signupSlice from './slice/Forms/signup';
import  updateSlice from './slice/Forms/update_password';
// import otherUsers from './slice/otherusers';
import otherUserSlice from './slice/otherUserSlice';
import loginFunSlice from './slice/loginFun';
import socketNotificationSlice from './slice/socketNotificationSlice'
import loginStatusSlice from './slice/loginStatusSlice';
import getUserSlice from './slice/getUserSlice';
import searchUserSlice from './slice/searchUserSlice';
import getCollegeSlice from './slice/getCollegeSlice'
import searchCollegeSlice from './slice/search_values_college';
import  getCollege2Slice  from './slice/college2Slice';
import getCollegeList from './slice/allCollegeList'
export const store = configureStore({
  reducer: {
    hambergSlice,
    loginSlice,
    signupSlice,
    updateSlice,
    otherUserSlice,
    loginFunSlice,
    socketNotificationSlice,
    loginStatusSlice,
    getUserSlice,
    searchUserSlice,
    getCollegeSlice,
    searchCollegeSlice,
    getCollege2Slice,
    getCollegeList
  },  
})