import React, { FunctionComponent } from "react";
import { Box, Card, Container } from "@material-ui/core";
import CreateUserForm from "../../forms/CreateUserForm";
import { UserApi } from "../../api/firebase/UserAPI";

const CreateUserPageContainer: FunctionComponent = () => {
  return (
    <Container component={Card}>
      <Box my={2}>
        <CreateUserForm onSubmit={(values) => UserApi.signUp(values)} />
      </Box>
    </Container>
  );
};

export default CreateUserPageContainer;
