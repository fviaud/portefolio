import * as actions from "./actions";

const initialState = {
  data: { values: [] },
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case actions.REQUEST_MOVIE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.FETCH_MOVIE_SUCCESS: {
      if (action.movies) {
        return {
          ...state,
          data: { ...action.movies },
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    }
    default: {
      return state;
    }
  }
};
