import React from "react";

import { makeStyles, Grid, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "10%",
  },
  img: {
    width: "100%",
  },
}));

export default (props) => {
  const { user } = props;
  const classes = useStyles();
  return <Grid>{user.name}</Grid>;
};
