import React, { FunctionComponent, lazy } from "react";
import { Route, Switch } from "react-router";
import { withSuspense } from "./hoc/WithSuspense";
import { getLink, Links } from "./links";

const LoginPage = withSuspense(lazy(() => import("./pages/LoginPage")));

const Router: FunctionComponent = () => (
  <Switch>
    <Route exact path={getLink(Links.login)} component={LoginPage} />

    {/*<Redirect to={getLink(Links.notFoundPage)} />*/}
  </Switch>
);

export default Router;
