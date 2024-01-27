import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/HomePage/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/",
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)