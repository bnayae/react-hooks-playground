import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SimpleTexts } from "./components/SimpleTexts";
import { ReducerSample } from "./components/ReduceSample";
import { Divider } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <SimpleTexts />
      <Divider />
      <ReducerSample />
    </div>
  );
};

export default App;
