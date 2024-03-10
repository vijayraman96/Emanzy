import { combineReducers } from 'redux';
import { SignupReducer } from './SignupReducers'

const rootReducer = combineReducers({
  SignupReducer: SignupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;