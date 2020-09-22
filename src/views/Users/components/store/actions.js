import { getUsers } from "config/api.users";

export const REQUEST_USER = "request user";
export const FETCH_USER = "fetch user";
export const FETCH_USER_SUCCESS = "fetch user success";
export const FETCH_USER_ERROR = "fetch user error";

export const requestUserAction = () => {
  return {
    type: REQUEST_USER,
  };
};

export const fetchUserSuccessAction = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    users,
  };
};

export const fetchUserErrorAction = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error,
  };
};

export const fetchUserAction = (page, search) => {
  return async (dispatch) => {
    dispatch(requestUserAction());
    try {
      const response = await getUsers(page, search);
      dispatch(fetchUserSuccessAction(response));
    } catch (e) {
      dispatch(fetchUserErrorAction(e));
    }
  };
};
