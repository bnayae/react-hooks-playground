// https://reactjs.org/docs/hooks-reference.html// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import * as React from "react";
import TheContext from "./TheContext";

export interface IContextChildAProps {}

export function ContextChildA(props: IContextChildAProps) {
  return (
    <TheContext.Consumer>
      {value => <div>{value && value.count}</div>}
    </TheContext.Consumer>
  );
}
