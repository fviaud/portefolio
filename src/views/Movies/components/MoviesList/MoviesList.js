import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import Movie from "../Movie/Movie";

export default (props) => {
  const { resource } = props;
  const [movies] = useState(resource.read());
  return (
    <Container fixed>
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Movie movie={movie} index={index} />
        ))}
      </Grid>
    </Container>
  );
};
