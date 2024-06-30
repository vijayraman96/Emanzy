import { SIGNIN_DATA_FAILURE, SIGNIN_DATA_REQUEST, SIGNIN_DATA_SUCCESS } from "../Action/Constant";
import { SignInAction, SignInDataAction } from "../Action/Signin";
interface SignInState {
  data: any;
  error?: Error | null;
}

const initialState: SignInState = {
  data: null,
  error: null
};
 const SignInReducer = (state = initialState, action: SignInDataAction): SignInState => {
    switch (action.type) {
      case SIGNIN_DATA_REQUEST:
        return state;
      case SIGNIN_DATA_SUCCESS:
        return {...state, data: action.payload};
      case SIGNIN_DATA_FAILURE:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };

  export default SignInReducer;