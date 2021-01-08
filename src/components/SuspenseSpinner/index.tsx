import * as React from "react";
import { FunctionComponent } from "react";
import { Box, CircularProgress } from "@material-ui/core";

interface SpinnerProps {
  inverted?: boolean;
}

const SuspenseSpinner: FunctionComponent<SpinnerProps> = ({ inverted }) => {
  return (
    <Box textAlign="center" style={{ color: "white" }}>
      <CircularProgress color={inverted ? "inherit" : "primary"} />
    </Box>
  );
};

export default SuspenseSpinner;
