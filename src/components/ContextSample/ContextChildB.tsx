// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import * as React from "react";
import TheContext from "./TheContext";
import { useContext } from "react";

export interface IContextChildBProps {}

export function ContextChildB(props: IContextChildBProps) {
  const value = useContext(TheContext);
  return (
    <>
      <input
        type="number"
        value={value == null ? 0 : value.count}
        onChange={e => value && value.setCount(e.target.valueAsNumber)}
      />
    </>
  );
}
