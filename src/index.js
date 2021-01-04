import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as pi from "./math.js";

ReactDOM.render(
  <>
    <App />
    <li>{pi.default}</li>
    <li>
      {pi.num1}
      {pi.num2}
    </li>
  </>,
  document.getElementById("root")
);
