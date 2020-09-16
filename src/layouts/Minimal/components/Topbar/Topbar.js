import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: "#EEEEEE",
    color: "white",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.head} position="fixed">
      <Toolbar>
        <RouterLink to="/"></RouterLink>
      </Toolbar>
    </AppBar>
  );
};
