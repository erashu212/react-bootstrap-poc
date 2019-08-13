import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";
import httpInterceptor from "./middlewares/http.interceptor";

const store = createStore(rootReducer, applyMiddleware(httpInterceptor));

export default store;
