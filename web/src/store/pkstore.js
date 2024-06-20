// src/store.js
import { createSlice } from '@reduxjs/toolkit';

// 创建一个简单的slice
const pkSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    /**
     * 
     * @param {*} state 上一次仓库的状态（允许你直接修改）
     * @param {*} payload 传入的值
     */
    increment: (state, payload) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = pkSlice.actions;

export default pkSlice;