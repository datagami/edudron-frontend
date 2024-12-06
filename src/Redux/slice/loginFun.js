
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const loginFunSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginFunAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  loginFunAction } = loginFunSlice.actions

export default loginFunSlice.reducer