// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import React from "react";

export interface ITheContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const TheContext = React.createContext<ITheContext | null>(null);

export default TheContext;
