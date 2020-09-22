import { getMovies } from "config/api.movie";

export const REQUEST_MOVIE = "request movie";
export const FETCH_MOVIE = "fetch movie";
export const FETCH_MOVIE_SUCCESS = "fetch movie success";
export const FETCH_MOVIE_ERROR = "fetch movie error";

export const requestMovieAction = () => {
  return {
    type: REQUEST_MOVIE,
  };
};

export const fetchMovieSuccessAction = (movies) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    movies,
  };
};

export const fetchMovieErrorAction = (error) => {
  return {
    type: FETCH_MOVIE_ERROR,
    error,
  };
};

export const fetchMovieAction = (page, search) => {
  return async (dispatch) => {
    dispatch(requestMovieAction());
    try {
      const response = await getMovies(page, search);
      dispatch(fetchMovieSuccessAction(response));
    } catch (e) {
      dispatch(fetchMovieErrorAction(e));
    }
  };
};
