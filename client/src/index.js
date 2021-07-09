import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    scrollbar-face-color: #646464;
    scrollbar-base-color: #646464;
    scrollbar-3dlight-color: #646464;
    scrollbar-highlight-color: #646464;
    scrollbar-shadow-color: #646464;
    scrollbar-darkshadow-color: #646464;
  }
  body { background-color: #fff; }
  a { text-decoration: none; }

  div, span { font-family: sans-serif; }

  ::-webkit-scrollbar { width: 0; height: 3px; }
  :hover::-webkit-scrollbar { width: 1px; height: 3px; }
  }`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
