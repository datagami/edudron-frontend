
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const getCollegeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getCollegeId: (state, action) => {
      state.value = action.payload
    },
  },
})


export const {  getCollegeId } = getCollegeSlice.actions

export default getCollegeSlice.reducer