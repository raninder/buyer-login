import { createSlice } from '@reduxjs/toolkit'

// initial user state
const initialState = {
  userName: null,
  userEmail: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // functions to update state
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    logout: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  }
});

export const {login,logout} = userSlice.actions

//exporting user state
export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail

export default userSlice.reducer