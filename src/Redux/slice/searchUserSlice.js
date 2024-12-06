
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const searchUserSlice = createSlice({
  name: 'search_user',
  initialState,
  reducers: {
    searchUserAction: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  searchUserAction } = searchUserSlice.actions

export default searchUserSlice.reducer