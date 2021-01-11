import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Field, Form as FormikForm, Formik, useFormik } from "formik";
import React, { FunctionComponent } from "react";
import { useIntl } from "react-intl";
import { cUser, User, UserInterface } from "../../models/User";
import { messages } from "../../localization/messages";
import { FormikTextField } from "../../components/FormikFields";

interface CreateUserFormProps {
  onSubmit: (values: UserInterface) => void;
}
const useCreateInitialValues = (): UserInterface => {
  const user = User();
  return {
    ...user,
  };
};

const CreateUserForm: FunctionComponent<CreateUserFormProps> = ({
  onSubmit,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Formik onSubmit={onSubmit} initialValues={useCreateInitialValues()}>
      {() => {
        return (
          <FormikForm>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Typography variant={"h3"}>
                {formatMessage(messages.unique.authentication.createUser)}
              </Typography>
              <Grid item xs={12}>
                <FormikTextField name={cUser.nickname} label="{click on me}" />
              </Grid>
              <Button
                disableElevation
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                click me too
              </Button>
            </Grid>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default CreateUserForm;
