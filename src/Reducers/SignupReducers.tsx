import { SIGNUP_DATA_FAILURE, SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS } from "../Action/Constant";
import { FetchDataAction } from "../Action/Signup";
interface SignupState {
  data: any;
  error?: Error | null;
}

const initialState: SignupState = {
  data: null,
  error: null
};
export const SignupReducer = (state = initialState, action: FetchDataAction): SignupState => {
    switch (action.type) {
      case SIGNUP_DATA_REQUEST:
        return state;
      case SIGNUP_DATA_SUCCESS:
        return {...state, data: action.payload};
      case SIGNUP_DATA_FAILURE:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };