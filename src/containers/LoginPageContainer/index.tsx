import React, { FunctionComponent } from "react";
import { Card, Container } from "@material-ui/core";
import { useIntl } from "react-intl";
import { LoginForm } from "../../forms/LoginForm";

const LoginPageContainer: FunctionComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <Container component={Card}>
      <LoginForm onSubmit={console.log("asd")} />
    </Container>
  );
};

export default LoginPageContainer;
