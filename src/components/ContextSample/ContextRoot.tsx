// https://reactjs.org/docs/hooks-reference.html
// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import React, { useState } from "react";
import TheContext from "./TheContext";
import { ContextChildA } from "./ContextChildA";
import { ContextChildB } from "./ContextChildB";
import { Divider, Grid } from "@material-ui/core";

export default function ContextRoot() {
  const [count, setCount] = useState(10);

  return (
    <TheContext.Provider value={{ count, setCount }}>
      <Grid container>
        <Grid item xs={6}>
          <ContextChildA />
        </Grid>
        <Grid item xs={6}>
          <ContextChildB />
        </Grid>
      </Grid>

      <Divider />
    </TheContext.Provider>
  );
}
