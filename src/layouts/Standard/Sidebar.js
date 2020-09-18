import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";

import {
  Divider,
  Drawer,
  IconButton,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
} from "@material-ui/core";
import {
  StarBorder,
  ExpandMore,
  ExpandLess,
  Send as SendIcon,
  Draft as DraftsIcon,
  MoveToInbox as InboxIcon,
  Work as WorkIcon,
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Contacts as ContactIcon,
  Receipt as ReceiptIcon,
  SupervisorAccount as SupervisorAccountIcon,
  LineStyle as LineStyleIcon,
  Ballot as BallotIcon,
} from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    // position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Sidebar(props) {
  // const Sidebar = props => {
  const classes = useStyles();
  const [inboxOpen, setInboxOpen] = React.useState(true);
  const [businessOpen, setBusinessOpen] = React.useState(true);

  const handleInboxClick = () => {
    setInboxOpen(!inboxOpen);
  };
  const handleBusinessClick = () => {
    setBusinessOpen(!businessOpen);
  };
  const { onClose, open } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton className={classes.toolbarIcon} onClick={onClose} />
      </div>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem
          button
          button
          // className={classes.nested}
          component={Link}
          to="/auth"
        >
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleInboxClick}>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Service Center" />
          {inboxOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={inboxOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Dashboard" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/servicecenter/customers"
            >
              <ListItemIcon>
                <ContactIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Customers" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/servicecenter/invoices"
            >
              <ListItemIcon>
                <ReceiptIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Invoices" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleBusinessClick}>
          <ListItemIcon>
            <BusinessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Business" />
          {businessOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={businessOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/business/organization"
            >
              <ListItemIcon>
                <BusinessIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Organization" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Settings" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleBusinessClick}>
          <ListItemIcon>
            <SupervisorAccountIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Service Manager" />
          {businessOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={businessOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/servicemanager/servicepackage"
            >
              <ListItemIcon>
                <BallotIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Service Package" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/servicemanager/lineitems"
            >
              <ListItemIcon>
                <LineStyleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary="Line Items" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
