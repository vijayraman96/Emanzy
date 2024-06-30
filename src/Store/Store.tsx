import { applyMiddleware, legacy_createStore as createStore } from "redux";
import  { thunk, ThunkMiddleware } from 'redux-thunk';
import RootReducer, {RootState} from "../Reducers/RootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>)));

export default store;