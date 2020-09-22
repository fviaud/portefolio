import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout, LaunchScreen } from "components";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  Standard as StandardLayout,
} from "layouts";

import Main from "./Main";

// const LazyMovies = lazy(() => import("./components/Home/Home"));

export default () => {
  return (
    // <Suspense fallback={<LaunchScreen />}>
    <Switch>
      <RouteWithLayout component={Main} layout={StandardLayout} path="/users" />
      <Redirect to="/users" />
    </Switch>
    // </Suspense>
  );
};
