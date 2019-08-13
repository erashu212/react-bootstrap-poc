import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import ProtectedRoute from "components/ProtectedRoute";

import routes from "./AppRoutes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}
        <Switch>
          {routes.map((route, index) => (
            <ProtectedRoute
              key={index}
              path={route.path}
              component={route.component}
              isAuthenticated={true}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
