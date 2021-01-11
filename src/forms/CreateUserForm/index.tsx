import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Form as FormikForm, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import {cUser, UserInterface} from "../../models/User";
import { messages } from "../../localization/messages";

interface CreateUserFormProps {
  onSubmit: (values: UserInterface) => void;
}

const CreateUserForm: FunctionComponent<CreateUserFormProps> = ({
  onSubmit,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Formik onSubmit={onSubmit} initialValues={cUser}>
      {() => {
        return (
          <FormikForm>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Typography variant={"h3"}>
                {formatMessage(messages.unique.authentication.createUser)}
              </Typography>
              <Grid item xs={12}>
                <TextField name={cUser.nickname} label="{do me bro}" />
              </Grid>
              <Button
                disableElevation
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                what the fuck si this
              </Button>
            </Grid>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default CreateUserForm;
