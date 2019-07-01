import * as React from "react";
import { useRef } from "react";
import { Button, TextField } from "@material-ui/core";

export default function RefSample() {
  const firstInput = useRef<HTMLDivElement | null>(null);
  const secondInput = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <TextField
        inputRef={firstInput}
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
          firstInput.current && firstInput.current.focus();
          setValue("Focused");
        }}
      >
        Focus the input
      </Button>

      <input ref={secondInput} type="text" />
      <Button
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          // `current` points to the mounted text input element
          secondInput.current && secondInput.current.focus();
        }}
      >
        Focus the input
      </Button>
    </>
  );
}
