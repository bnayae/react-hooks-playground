// https://fettblog.eu/typescript-react/hooks/
// https://www.youtube.com/watch?v=dpw9EHDh2bM&list=PLxOjILkIACgAdunnsCvfhZDbFxaAi_95Q&index=9&t=0s
// https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Divider } from "@material-ui/core";
import SimpleTexts from "./components/SimpleTexts";
import ReducerSample from "./components/ReduceSample";
import DropdownSample from "./components/DropdownSample";
import DropdownTextSample from "./components/DropdownTextSample";
import EffectSample from "./components/EffectSample";
import ContextRoot from "./components/ContextSample/ContextRoot";

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleTexts />
      <Divider />
      <ReducerSample />
      <Divider />
      <DropdownSample />
      <Divider />
      <DropdownTextSample />
      <Divider />
      <EffectSample />
      <Divider />
      <ContextRoot />
    </div>
  );
};

export default App;
