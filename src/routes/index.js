import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import SignIn from "../pages/Auth/SignIn";
import EnterprisesList from "../pages/Enterprises/EnterprisesList";
import EnterpriseInfo from "../pages/Enterprises/EnterpriseInfo";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/" exact component={SignIn} />
      <Guest path="/signIn" component={SignIn} />

      <Private path="/enterprises" exact component={EnterprisesList} />
      <Private path="/enterpriseinfo" exact component={EnterpriseInfo} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
