import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../Configs/RouteConfig";

const PageRoutes = () => {
  return (
    <Switch>
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Switch>
  );
};

export default PageRoutes;
