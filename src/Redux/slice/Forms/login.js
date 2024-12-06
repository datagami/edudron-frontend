import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    _email:'',
    _password:'',
    _loginError:'',
    data:[]
  },
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    email: (state, action) => {
      state.value._email = action.payload
    },
    password: (state, action) => {
        state.value._password = action.payload
      },
      login_error: (state, action) => {
        state.value._loginError = action.payload
      },
      login_result: (state, action) => {
        state.value.data = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const {  email,password,login_error,login_result } = loginSlice.actions

export default loginSlice.reducer