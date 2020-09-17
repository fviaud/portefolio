import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout, LaunchScreen } from "components";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  New as NewLayout,
} from "layouts";

import Home from "./components/Home";

// const LazyMovies = lazy(() => import("./components/Home/Home"));

export default () => {
  return (
    // <Suspense fallback={<LaunchScreen />}>
    <Switch>
      <RouteWithLayout component={Home} layout={MainLayout} path="/movies" />
      <Redirect to="/movies" />
    </Switch>
    // </Suspense>
  );
};
