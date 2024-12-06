import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    password:'',
    confirm_password:'',
  },
}

export const updateSlice = createSlice({
  name: 'update password',
  initialState,
  reducers: {
    update_password: (state, action) => {
      state.value.password = action.payload
    },
    update_confirm_password: (state, action) => {
        state.value.confirm_password = action.payload
      },
  },
})


export const {  update_password,update_confirm_password } = updateSlice.actions

export default updateSlice.reducer