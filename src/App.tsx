import "./App.css";
import axios from "axios";
import React, { StrictMode } from "react";
import { useNavigate, RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer 
         position="top-center"
         autoClose={3000}
         theme="colored"
         limit={1}
        />
        <RouterProvider router={Routes}></RouterProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
