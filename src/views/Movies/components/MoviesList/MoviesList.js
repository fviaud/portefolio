import React from "react";
import { Grid, Container, makeStyles, Box } from "@material-ui/core";
import Movie from "../Movie/Movie";
import Pagination from "./Pagination";
import { Nothing } from "components";

const useStyles = makeStyles((theme) => ({
  contentBody: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export default (props) => {
  const classes = useStyles();
  // const { resource } = props;
  // const movies = resource.read();

  const { movies } = props;

  return (
    <Container fixed>
      {movies.values.length ? (
        <>
          <Grid container spacing={3}>
            {movies &&
              movies.values.map((movie, index) => (
                <Movie movie={movie} index={index} />
              ))}
          </Grid>
          <Box className={classes.contentBody}>
            <Pagination total_pages={movies.total_pages} />
          </Box>
        </>
      ) : (
        <Nothing />
      )}
    </Container>
  );
};
