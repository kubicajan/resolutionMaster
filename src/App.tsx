import React, { lazy } from "react";
import { withSuspense } from "./hoc/WithSuspense";
import { Route, Switch } from "react-router";
import { getLink, Links } from "./links";
import { IntlProvider } from "react-intl";
import { withUnAuthLayout } from "./layout/UnAuthLayout";

const LoginPage = withUnAuthLayout(
  withSuspense(lazy(() => import("./pages/LoginPage")))
);
const CreateUserPage = withUnAuthLayout(
  withSuspense(lazy(() => import("./pages/CreateUserPage")))
);

export default function App() {
  return (
    <IntlProvider locale="en">
      <div className="App">
        <Switch>
          <Route exact path={getLink(Links.login)} component={LoginPage} />
          <Route
            exact
            path={getLink(Links.createUser)}
            component={CreateUserPage}
          />
        </Switch>
      </div>
    </IntlProvider>
  );
}
