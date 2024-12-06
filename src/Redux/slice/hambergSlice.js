import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const hambergSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    hambergState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  hambergState } = hambergSlice.actions

export default hambergSlice.reducer