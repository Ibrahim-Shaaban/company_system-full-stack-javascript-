import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialSate = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialSate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
