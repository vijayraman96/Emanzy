import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../Reducers/RootReducers';
import {
  SIGNIN_DATA_REQUEST,
  SIGNIN_DATA_SUCCESS,
  SIGNIN_DATA_FAILURE
  } from './Constant';
import { frontendAxiosUrl } from '../axiosConfig';
import { toast } from 'react-toastify';

  interface SigninDataRequestAction {
    type: typeof SIGNIN_DATA_REQUEST;
    error: null;
  }
  
  interface SigninDataSuccessAction {
    type: typeof SIGNIN_DATA_SUCCESS;
    payload: any;
  }
  
  interface SigninDataFailureAction {
    type: typeof SIGNIN_DATA_FAILURE;
    error: Error;
  }
  type AppAction = {
    type: string;
    payload?: any;
    error?: string;
  };
  export type SignInDataAction =
  | SigninDataRequestAction
  | SigninDataSuccessAction
  | SigninDataFailureAction;

export const SignInAction = (values: any): ThunkAction<
  void,
  RootState,
  unknown,
  AppAction
> => {
  return async (dispatch) => {
    dispatch({ type: SIGNIN_DATA_REQUEST });
    try {
      const response = await frontendAxiosUrl.post('/auth/login', values);
        const data = await response.data;
        console.log('data sign', data); // Your async API call
        toast.success("You have successfully Logged in to your account");
        const finalData = data.success;
        dispatch({ type: SIGNIN_DATA_SUCCESS, payload: finalData });
        let token = localStorage.setItem('token', finalData);
        return finalData;
      } catch (error) {

        const errorMessgae = error instanceof Error ?  error.message : (error as any)?.response?.data?.error || "An unknown error occurred";
        toast.error(errorMessgae);
        dispatch({ type: SIGNIN_DATA_FAILURE, error: "the Signin is failed" });
        return error;
      }
    };
  };