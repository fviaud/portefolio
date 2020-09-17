import React from "react";
import { Grid, Container, makeStyles, Box } from "@material-ui/core";
// import Pagination from "@material-ui/lab/Pagination";
import Movie from "../Movie/Movie";
import Pagination from "./Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  contentBody: {
    marginTop: theme.spacing(2),
    display: "flex",

    justifyContent: "center",
  },
}));

export default (props) => {
  const classes = useStyles();
  const { resource, page, handleChange } = props;
  const movies = resource.read();
  return (
    <Container fixed>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Movie movie={movie} index={index} />
        ))}
      </Grid>

      {/* <Box className={classes.root} > */}
      <div className={classes.contentBody}>
        <Pagination />
        {/* <Pagination
          count={25}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        /> */}
        {/* </Box> */}
      </div>
    </Container>
  );
};
