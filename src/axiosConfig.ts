import axios from "axios";
const url = process.env.REACT_APP_FRONT_BACK_URL;
export const frontendAxiosUrl = axios.create({
    baseURL: `${url}`, 
    withCredentials: true,
  });