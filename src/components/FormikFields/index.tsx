import * as React from "react";
import { FunctionComponent } from "react";
import { Select, TextField, TextFieldProps } from "@material-ui/core";
import { useField } from "formik";
import { SelectProps } from "@material-ui/core/Select/Select";

export const FormikTextField: FunctionComponent<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name as string); // "cService.firstName" => "firstName"
  //todo: work this out
  return (
    <TextField
      error={!!meta.error && meta.touched}
      helperText={!!meta.error && meta.touched}
      fullWidth
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      {...field}
    />
  );
};

const FormikSelect: FunctionComponent<SelectProps> = (props) => {
  const [field, meta] = useField(props.name as string);

  return (
    <Select
      fullWidth
      error={!!meta.error && meta.touched}
      {...props}
      {...field}
    />
  );
};

export default FormikSelect;
