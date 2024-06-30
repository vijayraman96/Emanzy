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
    error: null;
  }
  
  interface FetchDataSuccessAction {
    type: typeof SIGNUP_DATA_SUCCESS;
    payload: any;
  }
  
  interface FetchDataFailureAction {
    type: typeof SIGNUP_DATA_FAILURE;
    error: Error;
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
    try {
      const response = await frontendAxiosUrl.post('/auth/register', values);
        const data = await response.data;
        console.log('data', data); // Your async API call
        toast.success("You have successfully Signed Up the account");
        const finalData = data.data;
        dispatch({ type: SIGNUP_DATA_SUCCESS, payload: finalData });
        return finalData;
      } catch (error:any) {
        toast.error(error?.response?.data?.error || error);
        dispatch({ type: SIGNUP_DATA_FAILURE, error: "the redux is failed" });
        return error;
      }
    };
  };