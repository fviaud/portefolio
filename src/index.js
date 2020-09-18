import React from "react";
import { render } from "react-dom";

import App from "App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, purple, amber, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[800],
      // light: blue
    },
  },
});

console.log("theme->", theme);
const rootElement = document.getElementById("root");
render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  rootElement
);
