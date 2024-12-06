
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    search_by_name:'',
    search_by_course:[],
    search_by_stream:[],
    search_by_state:[],
    search_by_city:[],
    sort_colleges:[]
  },
}

export const searchCollegeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    search_by_name: (state, action) => {
      state.value.search_by_name = action.payload
    },
    search_by_course: (state, action) => {
        state.value.search_by_course = action.payload
      },
      search_by_stream: (state, action) => {
        state.value.search_by_stream = action.payload
      },
      search_by_state: (state, action) => {
        state.value.search_by_state = action.payload
      },
      search_by_city: (state, action) => {
        state.value.search_by_city = action.payload
      },
      sort_colleges: (state, action) => {
        state.value.sort_colleges = action.payload
      },
  },
})


export const {  search_by_name,search_by_course,search_by_stream,search_by_state,search_by_city ,sort_colleges} = searchCollegeSlice.actions

export default searchCollegeSlice.reducer