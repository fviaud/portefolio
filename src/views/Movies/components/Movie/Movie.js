import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "10%",
  },
  img: {
    width: "100%",
  },
}));

export default (props) => {
  const { movie } = props;
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3} className={classes.grid}>
      <img className={classes.img} src={movie.img} alt={movie.title} />
      <Typography>{movie.description}</Typography>
    </Grid>
  );
};
