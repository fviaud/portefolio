import React from "react";
import { Grid, Container, makeStyles, Box } from "@material-ui/core";
import UserItem from "../UserItem";
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
  // const users = resource.read();

  const { users } = props;

  return (
    <Container fixed>
      {users.length ? (
        <>
          <Grid container spacing={3}>
            {users &&
              users.map((user, index) => (
                <UserItem user={user} index={index} />
              ))}
          </Grid>
          {/* <Box className={classes.contentBody}>
            <Pagination total_pages={users.total_pages} />
          </Box> */}
        </>
      ) : (
        <Nothing />
      )}
    </Container>
  );
};
