
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const otherUsersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    otherUserDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  otherUserDetails } = otherUsersSlice.actions

export default otherUsersSlice.reducer