
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const getCollege2Slice = createSlice({
  name: 'college2',
  initialState,
  reducers: {
    college2Action: (state, action) => {
      state.value = action.payload
    },
  },
})


export const {  college2Action } = getCollege2Slice.actions

export default getCollege2Slice.reducer