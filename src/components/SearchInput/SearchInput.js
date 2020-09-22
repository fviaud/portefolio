import React, { useState, useRef, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(1),
    display: "flex",
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  // input: {
  //   flexGrow: 1,
  //   fontSize: "14px",
  //   lineHeight: "16px",
  //   letterSpacing: "-0.05px",
  // },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 80,
      "&:focus": {
        width: 200,
      },
    },
  },
}));

export default ({ setQuery }) => {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (data) => {
    // setQuery(data.query);
    history.push(`/movies${data.query === "" ? "" : `?search=${data.query}`}`);
  };

  return (
    <Box
      component="form"
      className={classes.search}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        name="query"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        inputRef={register}
      />
    </Box>
  );
};
