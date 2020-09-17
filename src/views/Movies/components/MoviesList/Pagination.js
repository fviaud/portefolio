import React, { forwardRef } from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

export default function PaginationLink() {
  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get("page") || "1", 10);
        return (
          <Pagination
            page={page}
            count={25}
            renderItem={(item) => (
              <PaginationItem
                component={CustomRouterLink}
                to={`/movies${item.page === 1 ? "" : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        );
      }}
    </Route>
  );
}
