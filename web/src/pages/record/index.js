import React , {  Fragment }from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/RecordStore';


export default function RecordIndex() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.record.count)
  return (
    <Fragment>
        <div>RecordIndex</div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </Fragment>
  )
}
