import * as React from "react";
import { Button, TextField } from "@material-ui/core";
import { useCallback, useMemo } from "react";

export default function CallbackSamples() {
  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);
  const calcFn: () => number = useCallback(() => a + b, [a, b]);
  const calcVal: number = useMemo(() => a + b, [a, b]);

  return (
    <>
      <TextField
        label="A"
        margin="dense"
        variant="outlined"
        type="number"
        value={a}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setA(e.target.valueAsNumber);
        }}
      />
      <TextField
        label="B"
        margin="dense"
        variant="outlined"
        type="number"
        value={b}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setB(e.target.valueAsNumber);
        }}
      />
      <TextField
        label="="
        margin="dense"
        variant="outlined"
        type="number"
        value={calcFn()}
        InputProps={{
          readOnly: true
        }}
      />
      <TextField
        label="="
        margin="dense"
        variant="outlined"
        type="number"
        value={calcVal}
        InputProps={{
          readOnly: true
        }}
      />
    </>
  );
}
