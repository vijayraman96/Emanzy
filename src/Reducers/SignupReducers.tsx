import { SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS } from "../Action/Constant";

const initialState = {}
export const SignupReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
      case SIGNUP_DATA_REQUEST:
        console.log('fetch');
        return state;
      case SIGNUP_DATA_SUCCESS:
        console.log('success');
        return state;
      case SIGNUP_DATA_FAILURE:
        console.log('failure');
        return state;
      default:
        return state;
    }
  };