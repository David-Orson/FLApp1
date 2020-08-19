import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Location } from "@reach/router";

render(
  <Location>{({ location }) => <App />}</Location>,
  document.getElementById("root")
);
