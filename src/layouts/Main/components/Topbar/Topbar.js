import React, { useContext } from "react";
import { NavLink as RouterLink } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  flexGrow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "black",
    background: "white",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const Topbar = (props) => {
  const classes = useStyles();

  const {
    handleDrawerOpen,
    open,
    commandes,
    projets,
    commandesGestion,
    projetsGestion,
  } = props;

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          id="btn-menu"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <RouterLink to="/dashboard">
          <img
            id="logo"
            alt="Logo"
            src="/images/logo_getIT_small_transparent.png"
            height="20"
          />
        </RouterLink>

        <div className={classes.flexGrow} />

        {/* {curentUser && curentUser.role === "admin gestion" ? (
          <RouterLink to="/management" id="gestion">
            <IconButton aria-label="gestion">
              <Badge
                data-testid="nb-item-gestion"
                id="nb-item-gestion"
                badgeContent={commandesGestion + projetsGestion}
                color="primary"
              >
                <Check />
              </Badge>
            </IconButton>
          </RouterLink>
        ) : null} */}

        {/* <RouterLink to="/basket" id="basket">
          <IconButton aria-label="cart">
            <Badge
              data-testid="nb-item-basket"
              id="nb-item-basket"
              badgeContent={commandes + projets}
              color="primary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </RouterLink>
        <UserMenu id="avatar"/> */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
