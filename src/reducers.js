// Define initial state for form data
const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  residentStatus: 'Canadian Resident or Citizen',
  emailConsent: true,
  gender: '',
  race: '',
  veteranStatus: '',
  disability: '',
  location: '',
  incomeSource: '',
  currentRent: '',
  desiredPayment: '',
};

// Define action types
const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

// Define action creators
export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

export const updateLocation = (location) => ({
  type: 'UPDATE_LOCATION',
  payload: location,
});


// Define reducer function
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;