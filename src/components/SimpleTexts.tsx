// https://www.youtube.com/watch?v=dpw9EHDh2bM&list=PLxOjILkIACgAdunnsCvfhZDbFxaAi_95Q&index=9&t=0s

import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export interface ISimpleTextsProps {}

export function SimpleTexts(props: ISimpleTextsProps) {
  const classes = useStyles();
  const [name, setName] = useState("Bnaya");
  const [password, setPassword] = useState("Bnaya");
  const [email, setEmail] = useState("Bnaya");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  return (
    <>
      <TextField
        id="standard-name"
        label={name}
        className={classes.textField}
        value={name}
        placeholder="Add any content"
        helperText="Play with style and hook state"
        onChange={handleNameChange}
        margin="dense" // TODO: use it at WK
        variant="outlined"
        InputProps={
          {
            //readOnly: true,
          }
        }
        InputLabelProps={{
          shrink: true
        }}
        // multiline
        // rows="4"
        // rowsMax="7"
        //style={{ margin: 8 }}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name={email}
        autoComplete="email"
        margin="dense"
        variant="outlined"
      />
    </>
  );
}
