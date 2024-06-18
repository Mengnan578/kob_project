// src/store.js
import { createSlice } from '@reduxjs/toolkit';

// 创建一个简单的slice
const recordSlice = createSlice({
  name: 'record',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = recordSlice.actions;

export default recordSlice;