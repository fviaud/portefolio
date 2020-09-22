import * as actions from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case actions.REQUEST_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.FETCH_USER_SUCCESS: {
      console.log(action);
      if (action.users) {
        return {
          ...state,
          data: [...action.users],
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
