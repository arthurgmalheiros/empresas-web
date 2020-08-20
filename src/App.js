import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import store from "./store";

import Routes from "./routes";
import history from "./routes/history";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
        <ReduxToastr preventDuplicates closeOnToastrClick />
      </Router>
    </Provider>
  );
};

export default App;
