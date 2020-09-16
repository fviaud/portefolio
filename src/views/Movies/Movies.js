import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout, LaunchScreen } from "components";
import { Main as MainLayout, Minimal as MinimalLayout } from "layouts";

const LazyMovies = lazy(() => import("./components/Home/Home"));

export default () => {
  return (
    <Suspense fallback={<LaunchScreen />}>
      <Switch>
        <RouteWithLayout
          component={LazyMovies}
          exact
          layout={MainLayout}
          path="/movies/:id"
        />
        <Redirect to="/movies/1" />
      </Switch>
    </Suspense>
  );
};
