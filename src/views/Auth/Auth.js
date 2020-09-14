import React, { useState, useEffect } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import validate from "validate.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  grid: {
    height: "100%",
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/building.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px",
  },
  quoteText: {
    // color: theme.palette.white,
    color: "white",
    fontWeight: 300,
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  textField: {
    marginTop: theme.spacing(2),
  },

  signInButton: {
    margin: theme.spacing(2, 0),
  },

  wrapper: {
    margin: theme.spacing(0),
    position: "relative",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const schema = {
    email: {
      presence: { allowEmpty: false, message: "is required" },
      email: { message: "Cette adresse e-mail semble erronée" },
      length: {
        maximum: 64,
      },
    },
    password: {
      presence: { allowEmpty: false, message: "is required" },
      length: {
        maximum: 128,
      },
    },
  };

  const [user, setUser] = useState({
    isValid: false,
    loading: false,
    values: {},
    touched: {},
    errors: {},
    api: null,
  });

  const handleChange = (event) => {
    event.persist();
    setUser((state) => ({
      ...state,
      values: {
        ...state.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...state.touched,
        [event.target.name]: true,
      },
    }));
  };

  useEffect(() => {
    const errors = validate(user.values, schema, { fullMessages: false });
    setUser((state) => ({
      ...state,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
    // eslint-disable-next-line
  }, [user.values]);

  const hasError = (field) =>
    user.touched[field] && user.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h2">
                Inscrivez-vous pour accéder à plus d'idées
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  name="email"
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                  label="Email"
                  onChange={handleChange}
                  type="text"
                  error={hasError("email")}
                  helperText={hasError("email") ? user.errors.email[0] : null}
                />
                <TextField
                  name="password"
                  className={classes.textField}
                  variant="outlined"
                  fullWidth
                  label="Password"
                  onChange={handleChange}
                  type="password"
                  error={hasError("password")}
                  helperText={
                    hasError("password") ? user.errors.password[0] : null
                  }
                />
                <div className={classes.wrapper}>
                  <Button
                    className={classes.signInButton}
                    // color="secondary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={!user.isValid}
                  >
                    Se connecter
                  </Button>
                  {/* {formState.loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )} */}
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
