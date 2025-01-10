import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import App from "./App";
import Login from "./Login";
import Vijay from "./Vijay";
import React from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardLayout from "./Pages/Layouts/DashbooardLayout";
import Privacy from "./Pages/Privacy";
import Delete from "./Pages/Delete";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "vijay",
    element: <Vijay />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "delete",
    element: <Delete />,
  },
  {
    path: "*",
    element: null,
  },
]);

export default Routes;
