import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/pkstore';

export default function PkIndex() {
  const count = useSelector((state) => state.pk.count);
  // 派发状态
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
