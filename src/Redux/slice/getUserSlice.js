
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const getUserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getUserAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  getUserAction } = getUserSlice.actions

export default getUserSlice.reducer