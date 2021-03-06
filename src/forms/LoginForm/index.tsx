import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Field, Form as FormikForm, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import { cUser, UserInterface } from "../../models/User";
import { messages } from "../../localization/messages";

interface LoginFormProps {
  onSubmit: any;
  // onSubmit: (values: UserInterface) => void;
}

export const LoginForm: FunctionComponent<LoginFormProps> = ({ onSubmit }) => {
  const { formatMessage } = useIntl();

  return (
    <Formik onSubmit={onSubmit} initialValues={cUser}>
      {() => {
        return (
          <FormikForm>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Typography variant={"h3"}>
                {formatMessage(messages.unique.authentication.login)}
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
                do it
              </Button>
            </Grid>
          </FormikForm>
        );
      }}
    </Formik>
  );
};
