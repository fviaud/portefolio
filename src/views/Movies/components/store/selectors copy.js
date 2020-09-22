import { createSelector } from "reselect";

export const filterSelector = (state, filter) => filter;
export const moviesSelector = (state) => state.movies;

export const moviesListSelector = createSelector([moviesSelector], (movies) =>
  movies ? movies.data : null
);

export const filteredMovieDataSelector = createSelector(
  [filterSelector, moviesListSelector],
  (filter, movies) => {
    if (movies && filter) {
      switch (filter) {
        case "done": {
          return movies.filter((t) => t.done);
        }
        case "active": {
          return movies.filter((t) => !t.done);
        }
        default: {
          return movies;
        }
      }
    }
  }
);
