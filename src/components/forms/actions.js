// Define action types
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'; // Renaming action type for clarity
export const UPDATE_ADDITIONAL_INFO = 'UPDATE_ADDITIONAL_INFO'; // Action type for updating additional user information
export const UPDATE_LOCATION = 'UPDATE_LOCATION'; // Action type for updating location
export const UPDATE_INCOME_SOURCE = 'UPDATE_INCOME_SOURCE'; // Action type for updating income source

// Define action creators
export const updateUserInfo = (formData) => ({
  type: UPDATE_USER_INFO,
  payload: formData,
});

export const updateAdditionalInfo = (additionalInfo) => ({
  type: UPDATE_ADDITIONAL_INFO,
  payload: additionalInfo,
});

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

export const updateIncomeSource = (incomeSource) => ({
  type: UPDATE_INCOME_SOURCE,
  payload: incomeSource,
});

export const UPDATE_RENT_DATA = 'UPDATE_RENT_DATA';

export const updateRentData = (rentData) => ({
  type: UPDATE_RENT_DATA,
  payload: rentData,
});