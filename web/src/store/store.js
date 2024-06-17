import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../pages/pk/pkstore"

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;