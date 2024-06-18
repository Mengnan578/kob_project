import { configureStore } from '@reduxjs/toolkit';
import pkSlice from "./pkstore"
import recordSlice from './RecordStore';

const store = configureStore({
  reducer: {
    pk: pkSlice.reducer,
    record: recordSlice.reducer,
  },
});

export default store;