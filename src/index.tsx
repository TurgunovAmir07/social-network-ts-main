import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/base.scss"
import {ThemeProvider, } from "styled-components"
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);