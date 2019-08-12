import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";
import { apiInterceptor } from "./middlewares/api.interceptor";

const store = createStore(rootReducer, applyMiddleware(apiInterceptor));

export default store;