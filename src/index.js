import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "core/store";
import App from "containers/App";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
