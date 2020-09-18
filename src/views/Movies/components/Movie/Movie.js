import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";
import Rating from "./Rating";

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
      {movie.img !== "https://image.tmdb.org/t/p/w500null" ? (
        <img className={classes.img} src={movie.img} alt={movie.title} />
      ) : (
        <img
          className={classes.img}
          src={"/images/building.jpg"}
          alt={movie.title}
        />
      )}
      <Typography>{movie.details}</Typography>
      <Rating value={movie.note} />
    </Grid>
  );
};
