import React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};