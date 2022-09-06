import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Mensagem from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Mensagem />
  </StrictMode>,
  rootElement
);