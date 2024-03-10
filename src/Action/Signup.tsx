import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../Reducers/RootReducers';
import {
  SIGNUP_DATA_REQUEST,
  SIGNUP_DATA_SUCCESS,
  SIGNUP_DATA_FAILURE
  } from './Constant';
import { frontendAxiosUrl } from '../axiosConfig';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

  interface FetchDataRequestAction {
    type: typeof SIGNUP_DATA_REQUEST;
  }
  
  interface FetchDataSuccessAction {
    type: typeof SIGNUP_DATA_SUCCESS;
    payload: any;
  }
  
  interface FetchDataFailureAction {
    type: typeof SIGNUP_DATA_FAILURE;
    error: string;
  }
  type AppAction = {
    type: string;
    payload?: any;
    error?: string;
  };
  export type FetchDataAction =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export const fetchData = (values: any): ThunkAction<
  void,
  RootState,
  unknown,
  AppAction
> => {
    return async (dispatch) => {
      dispatch({ type: SIGNUP_DATA_REQUEST });
      console.log("values", values);
      try {
        const response = await frontendAxiosUrl.post('/auth/register', values);
        console.log('response', response);
        const data = await response.data;
        console.log('data', data); // Your async API call
        toast.success("You have successfully Signed Up the account")
        dispatch({ type: SIGNUP_DATA_SUCCESS, payload: data.data });
        return data
      } catch (error:any) {
        toast.error(error?.response?.data?.error || error);
        dispatch({ type: SIGNUP_DATA_FAILURE, error: "the redux is failed" });
      }
    };
  };