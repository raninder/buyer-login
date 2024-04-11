import { createSlice } from '@reduxjs/toolkit'

// initial user state
const initialState = {
  userName: null,
  userEmail: null,
  isAuthenticated:false,
  userId: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  residentStatus: '',
  emailConsent: true,
  // Fields from the second form
  gender: '',
  race: '',
  veteranStatus: '',
  disability: '',
  // New field for the third form
  location: '',
  // New field for the sixth form
  incomeSource: '',
  // New fields for the seventh form
  currentRent: '',
  desiredPayment: '',
 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // functions to update state
    login: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.photoURL = action.payload.photoURL;
      state.isAuthenticated=true
    },
    logout: (state) => {
 
      state.displayName = null;
      state.email = null;
   
    },
    updateUserInfo: (state, action) => {
      const { userId, firstName, lastName, phoneNumber, email, residentStatus, emailConsent } = action.payload;
      state.userId = userId;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.residentStatus = residentStatus;
      state.emailConsent = emailConsent;
    },
    updateAdditionalInfo: (state, action) => {
      const { gender, race, veteranStatus, disability } = action.payload;
      state.gender = gender;
      state.race = race;
      state.veteranStatus = veteranStatus;
      state.disability = disability;
    },
    updateLocation: (state, action) => {
      const location = action.payload;
      state.location = location;
    },
    updateIncomeSource: (state, action) => {
      const incomeSource = action.payload;
      state.incomeSource = incomeSource;
    },
    updateForm7: (state, action) => {
      const { currentRent, desiredPayment } = action.payload;
      state.currentRent = currentRent;
      state.desiredPayment = desiredPayment;
    },

  }
});

export const {login,logout, updateUserInfo, updateAdditionalInfo, updateLocation, updateIncomeSource, updateForm7} = userSlice.actions

//exporting user state
export const selectUserName = (state) => state.user.displayName
export const selectUserEmail = (state) => state.user.email
export const selectUserId = (state) => state.user.uid
export const selectUserInfo = (state) => state.user;


export default userSlice.reducer