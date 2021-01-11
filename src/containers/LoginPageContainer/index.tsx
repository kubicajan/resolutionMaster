import React, { FunctionComponent } from "react";
import { Box, Card, Container } from "@material-ui/core";
import { useIntl } from "react-intl";
import { LoginForm } from "../../forms/LoginForm";

const LoginPageContainer: FunctionComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <Container component={Card}>
      <Box my={2}>
        <LoginForm onSubmit={console.log("asd")} />
      </Box>
    </Container>
  );
};

export default LoginPageContainer;
