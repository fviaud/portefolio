import React, { Suspense, useEffect } from "react";
import "./components/store";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LaunchScreen } from "components";
import { UsersList } from "./components";

import { fetchUserAction } from "./components/store/actions";

export default (props) => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");
  const search = new URLSearchParams(location.search).get("search");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction(page, search));
  }, [dispatch, location]);

  const users = useSelector((state) => {
    return state.users.data;
  });

  return (
    <>
      {useSelector((state) => {
        return state.users.loading;
      }) ? (
        <LaunchScreen />
      ) : (
        <UsersList users={users} />
      )}
    </>
  );
};
