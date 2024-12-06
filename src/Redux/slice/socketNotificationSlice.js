
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const socketNotificationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    socketNotificationAction: (state, action) => {
    return  {
        ...state,
        value: action.payload
      }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  socketNotificationAction } = socketNotificationSlice.actions

export default socketNotificationSlice.reducer