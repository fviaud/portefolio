import React, { useState } from "react";
// import CssBaseline from "CssBaseline";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Box, Container } from "@material-ui/core";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Copyright from "./Copyright";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  inputRoot: {
    color: "inherit"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function Main(props) {
  const { children } = props;

  const classes = useStyles();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <TopBar isSideBarOpen={openSidebar} onSidebarOpen={handleSidebar} />
      <Sidebar onClose={handleSidebarClose} open={openSidebar} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openSidebar
        })}
      >
        <div className={classes.appBarSpacer} />
        {children}
        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node
};
