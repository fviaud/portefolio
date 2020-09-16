import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

export default () => {
  return (
    <Box
      data-testid="loading"
      style={{ transform: "translate(-50%, -50%)" }}
      position="absolute"
      top="50%"
      left="50%"
      textAlign="center"
    >
      {/* <div>
        <img
          id="logo"
          alt="Logo"
          src="/images/logo_getIT_large_transparent.png"
          height="60"
        />
      </div> */}
      <CircularProgress />
    </Box>
  );
};
