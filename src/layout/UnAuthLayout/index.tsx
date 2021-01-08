import * as React from "react";
import { ComponentType, FunctionComponent } from "react";
import { Grid } from "@material-ui/core";

interface AuthLayoutProps {}

const UnAuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh", background: "#965781" }}
    >
      <Grid item xs={8} md={4} lg={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default UnAuthLayout;

export const withUnAuthLayout = (
  WrappedComponent: ComponentType
): FunctionComponent => (props) => (
  <UnAuthLayout>
    <WrappedComponent {...props} />
  </UnAuthLayout>
);
