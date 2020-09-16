import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1" align="center">
        &copy;{" "}
        <Link component="a" href="https://orange.com/" target="_blank">
          Get IT
        </Link>
        . 1.8.0
      </Typography>
      <Typography variant="body1" align="center">
        Created By Orange OLS/IVA
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
