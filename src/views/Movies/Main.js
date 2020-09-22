import React, { Suspense, useEffect } from "react";
import "./components/store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { LaunchScreen } from "components";
import { MoviesList } from "./components";
import { wrapPromise } from "api/api.movie";

import { fetchMovieAction } from "./components/store/actions";

export default (props) => {
  // const { query } = props;
  // const history = useHistory();
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");
  const search = new URLSearchParams(location.search).get("search");

  // useEffect(() => {
  //   history.push("/movies");
  // }, [query]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(page, search));
  }, [dispatch, location]);

  const movies = useSelector((state) => {
    return state.movies.data;
  });

  return (
    <>
      {/* <Suspense fallback={<LaunchScreen />}> */}
      {useSelector((state) => {
        return state.movies.loading;
      }) ? (
        <LaunchScreen />
      ) : (
        <MoviesList movies={movies} />
      )}
      {/* <MoviesList resource={wrapPromise(page, query)} /> */}
      {/* </Suspense> */}
    </>
  );
};
