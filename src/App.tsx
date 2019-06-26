// https://fettblog.eu/typescript-react/hooks/

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Divider } from "@material-ui/core";
import SimpleTexts from "./components/SimpleTexts";
import ReducerSample from "./components/ReduceSample";
import DropdownSample from "./components/DropdownSample";

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleTexts />
      <Divider />
      <ReducerSample />
      <Divider />
      <DropdownSample />
    </div>
  );
};

export default App;
