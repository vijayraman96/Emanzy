import axios from "axios";
const url = process.env.REACT_APP_FRONT_BACK_URL;
export const frontendAxiosUrl = axios.create({
    baseURL: `${url}`, // Your backend API base URL// Timeout duration
    // Other Axios configurations...
  });