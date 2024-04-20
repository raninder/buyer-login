// Define action types
<<<<<<< HEAD
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

=======
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_BUYING_TIMEFRAME = 'UPDATE_BUYING_TIMEFRAME';
export const UPDATE_FINANCIAL_DATA = 'UPDATE_FINANCIAL_DATA';
export const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';

// Action creators for updating form data
export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

// Action creator for updating location
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

<<<<<<< HEAD
export const updateIncomeSource = (incomeSource) => ({
  type: UPDATE_INCOME_SOURCE,
  payload: incomeSource,
});

export const UPDATE_RENT_DATA = 'UPDATE_RENT_DATA';

export const updateRentData = (rentData) => ({
  type: UPDATE_RENT_DATA,
  payload: rentData,
});
=======
// Action creator for updating buying timeframe (Form 3)
export const updateBuyingTimeframe = (timeframe) => ({
  type: UPDATE_BUYING_TIMEFRAME,
  payload: timeframe,
});

// Action creator for updating financial data (Form 4)
export const updateFinancialData = (financialData) => ({
  type: UPDATE_FINANCIAL_DATA,
  payload: financialData,
});

// Action creator for updating down payment (Form 5)
export const updateDownPayment = (downPayment) => ({
  type: UPDATE_DOWN_PAYMENT,
  payload: downPayment,
});
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
