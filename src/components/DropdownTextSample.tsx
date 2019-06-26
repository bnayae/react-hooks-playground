import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const options = [
  {
    value: "US",
    label: "United States"
  },
  {
    value: "EUR",
    label: "Europe"
  },
  {
    value: "ISL",
    label: "Israel"
  },
  {
    value: "JP",
    label: "Japan"
  }
];

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}));

export interface IDropdownTextProps {}

export default function DropdownTextSample(props: IDropdownTextProps) {
  const classes = useStyles();
  const [value, setValue] = useState("US");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <TextField
      id="outlined-select-currency-native"
      select
      label="Native select"
      className={classes.textField}
      value={value}
      onChange={handleChange}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu
        }
      }}
      helperText="Please select your currency"
      margin="dense"
      variant="outlined"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}
