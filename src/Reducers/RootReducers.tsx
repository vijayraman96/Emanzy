import { combineReducers } from 'redux';
import { SignupReducer } from './SignupReducers';
import SignInReducer from './SignInReducer';
const RootReducer = combineReducers<{}>({
  SignupReducer: SignupReducer,
  SignInReducer: SignInReducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;