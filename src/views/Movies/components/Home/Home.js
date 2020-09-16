import React from "react";
import { MoviesList } from "..";
import { wrapPromise } from "api/api.movie";

export default (props) => {
  const { match } = props;
  const resource = wrapPromise(match.params.id);
  return <MoviesList resource={resource} />;
};
