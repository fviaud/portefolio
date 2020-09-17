import React from "react";
import "./assets/scss/index.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import { Auth, Movies } from "views";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/movies" component={Movies} />
          <Redirect to="/movies" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
