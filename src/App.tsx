import "./App.css";
import axios from "axios";
import React, { StrictMode, useEffect } from "react";
import { useNavigate, RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { frontendAxiosUrl } from "./axiosConfig";
import '@fortawesome/fontawesome-svg-core/styles.css';
function App() {
  useEffect(() => {
    console.log("vijay");
    const tokenValidation = async() =>{
      try {
        const response: any = await frontendAxiosUrl.get('/authenticated');
        console.log('response', response);
        let tokenMatch = await localStorage.getItem('token');
        if(tokenMatch === response?.token) {
          Routes.navigate('/dashboard');
        } else {
          Routes.navigate('/signin');
        }
       
        
      } catch (error) {
        Routes.navigate('/signin');
      }
    }
    tokenValidation();
  }, [Routes])
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
