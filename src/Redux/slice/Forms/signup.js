import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    signup_name:'',
    signup_email:'',
    signup_strream:'',
    signup_number:'',
    signup_state:'',
    signup_programtype:'',
    signup_password:'',
    signup_confirm_password:'',
    signup_error:'',
    signup_city:'',
    signup_country:'',
    signup_username:''
  },
}

export const signupSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signup_name: (state, action) => {
      state.value.signup_name = action.payload
    },
    signup_email: (state, action) => {
        state.value.signup_email = action.payload
      },
      signup_strream: (state, action) => {
        state.value.signup_strream = action.payload
      },
      signup_number: (state, action) => {
        state.value.signup_number = action.payload
      },
      signup_state: (state, action) => {
        state.value.signup_state = action.payload
      },
      signup_programtype: (state, action) => {
        state.value.signup_programtype = action.payload
      },
      signup_password: (state, action) => {
        state.value.signup_password = action.payload
      },
      signup_confirm_password: (state, action) => {
        state.value.signup_confirm_password = action.payload
      },
      signup_error: (state, action) => {
        state.value.signup_error = action.payload
      },
      signup_username: (state, action) => {
        state.value.signup_username = action.payload
      },
      signup_country: (state, action) => {
        state.value.signup_country = action.payload
      },
      signup_city: (state, action) => {
        state.value.signup_city = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const {  signup_name,signup_email,signup_number,signup_strream,signup_state,signup_programtype,signup_password,signup_confirm_password,signup_error,signup_city,signup_country,signup_username } = signupSlice.actions

export default signupSlice.reducer