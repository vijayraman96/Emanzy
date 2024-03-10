import { applyMiddleware, createStore } from "redux";
import  { thunk, ThunkMiddleware } from 'redux-thunk';
import rootReducer, {RootState} from "../Reducers/RootReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as unknown as ThunkMiddleware<RootState>)));

export default store;