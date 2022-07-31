import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
