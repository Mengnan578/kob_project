import React from 'react'
import { Provider } from 'react-redux';
import { RouterProvider  } from "react-router-dom"
import router from './router';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}
