import React, { Suspense, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LaunchScreen } from "components";
import { MoviesList } from "..";
import { wrapPromise } from "api/api.movie";

export default (props) => {
  const { location, query } = props;
  let params = new URLSearchParams(location.search);
  let page = params.get("page");

  const history = useHistory();
  useEffect(() => {
    history.push("/movies");
  }, [query]);

  return (
    <>
      <Suspense fallback={<LaunchScreen />}>
        <MoviesList resource={wrapPromise(page, query)} />
      </Suspense>
    </>
  );
};
