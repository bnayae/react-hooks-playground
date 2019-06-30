import * as React from "react";
import { useRef } from "react";
import { Button, TextField } from "@material-ui/core";

export default function RefSample() {
  const theRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <TextField
        inputRef={theRef}
        label="Ref to"
        margin="dense"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          // `current` points to the mounted text input element
          theRef.current && theRef.current.focus();
          setValue("Focused");
        }}
      >
        Focus the input
      </Button>
    </>
  );
}
