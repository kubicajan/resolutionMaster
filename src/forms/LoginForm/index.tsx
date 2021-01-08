import { Box, Button, Grid, Typography } from "@material-ui/core";
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
                {formatMessage(messages.unique.login)}
              </Typography>
              <Grid item xs={12}>
                <Field name={cUser.nickname} label="{do me bro}" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  do it
                </Button>
              </Grid>
            </Grid>
          </FormikForm>
        );
      }}
    </Formik>
  );
};
