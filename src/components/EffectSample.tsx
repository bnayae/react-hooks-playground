/// https://fettblog.eu/typescript-react/hooks/#useeffect

import * as React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

export interface IEffectSampleProps {}

export default function EffectSample(props: IEffectSampleProps) {
  const [name, setName] = useState("Bnaya");
  const [location, setLocation] = useState("0x0");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name] /* when to update */);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setLocation(`${e.clientX}x${e.clientY}`);
    };
    document.addEventListener("mousemove", handler, true);
    return () => {
      // clean-up
      window.removeEventListener("mousemove", handler);
    };
  },[]);

  return (
    <>
      <TextField
        id="standard-name"
        label="Nmae"
        value={name}
        onChange={handleNameChange}
        margin="dense" // TODO: use it at WK
        variant="outlined"
        helperText="check the title (of the Tab as you type)"
      />
      <TextField
        id="location"
        label="Location"
        value={location}
        margin="dense" // TODO: use it at WK
        variant="outlined"
        helperText="The cursor location"
        InputProps={
          {
            //readOnly: true,
          }
        }
      />
    </>
  );
}
