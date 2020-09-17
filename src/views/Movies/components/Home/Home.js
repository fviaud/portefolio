import React, { Suspense, useEffect } from "react";

import { LaunchScreen } from "components";
import { MoviesList } from "..";
import { wrapPromise } from "api/api.movie";

export default (props) => {
  const { location } = props;

  let params = new URLSearchParams(location.search);
  useEffect(() => {}, [location.search]);

  return (
    <Suspense fallback={<LaunchScreen />}>
      <MoviesList resource={wrapPromise(params.get("page"))} />
    </Suspense>
  );
};
