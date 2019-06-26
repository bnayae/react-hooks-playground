// https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

import * as React from "react";
import { useReducer, useState } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementAmount"; amount: number }
  | { type: "setAmount"; amount: number }
  | { type: "" };

export interface IReducerSampleProps {}
interface State {
  value: number;
  lastAction: string;
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ReducerSample(props: IReducerSampleProps) {
  const classes = useStyles();

  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case "increment":
          return { value: state.value + 1, lastAction: action.type };
        case "decrement":
          return { value: state.value - 1, lastAction: action.type };
        case "incrementAmount":
          return {
            value: state.value + action.amount,
            lastAction: action.type
          };
        case "setAmount":
          return {
            value: action.amount,
            lastAction: action.type
          };
        default:
          throw new Error();
      }
    },
    {
      value: 0,
      lastAction: ""
    }
  );

  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          dispatch({
            type: "setAmount",
            amount: state.value * 2
          });
        }}
      >
        x * 2
      </Button>
      <TextField
        id="standard-name"
        label="State"
        value={state.value}
        margin="dense"
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />
    </>
  );
}
