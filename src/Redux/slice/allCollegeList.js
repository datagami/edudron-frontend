
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const getCollegeList = createSlice({
  name: 'list',
  initialState,
  reducers: {
    collegeListAction: (state, action) => {
      state.value = action.payload
    },
  },
})


export const {  collegeListAction } = getCollegeList.actions

export default getCollegeList.reducer