import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InfoIcon from "@material-ui/icons/Info";
import { pink } from "@material-ui/core/colors";

import {
  List,
  IconButton,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  colors,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    // "& $icon": {
    //   color: theme.palette.primary.main,
    // },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const SidebarNav = (props) => {
  const { menu } = props;

  const classes = useStyles();
  const theme = useTheme();
  const { handleDrawerClose } = props;

  const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  ));

  return (
    <>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menu.map((client, index) => (
          <ListItem
            activeClassName={classes.active}
            button
            data-testid={client.id}
            id={client.id}
            key={index}
            component={CustomRouterLink}
            to={client.href}
            disabled={client.disabled}
          >
            <ListItemIcon>{client.icon}</ListItemIcon>
            <ListItemText primary={client.title} />
            {client.disabled ? (
              <Avatar className={classes.pink}>
                <InfoIcon />
              </Avatar>
            ) : null}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SidebarNav;
