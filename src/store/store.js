import { applyMiddleware, combineReducers, createStore } from "redux";
import { housesReducer } from "../App/Products/store/housesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  housesReducer: housesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
