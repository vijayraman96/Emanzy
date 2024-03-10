import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import App from './App';
import Login from './Login';
import Vijay from './Vijay';
import React from 'react';
const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
        path: "signin",
        element: <Signin />
    }, 
    {
        path: "signup",
        element: <Signup />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "vijay",
        element: <Vijay />
    },
  ]);

  export default Routes;