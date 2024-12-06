
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loginStatusSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginStatusAction: (state, action) => {
    
    state.value=action.payload
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  loginStatusAction } = loginStatusSlice.actions

export default loginStatusSlice.reducer