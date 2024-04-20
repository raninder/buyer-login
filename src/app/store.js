import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import userReducer from '../features/userSlice';
import formReducer from '../reducers'; // Adjust the path to point to reducers.js



=======
import userReducer from '../featureForm/userSlice';
import formReducer from '../reducers'; // Adjust the path to point to reducers.js


>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer, // Add the form-related reducer to the root reducer
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
