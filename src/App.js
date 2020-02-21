import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Header from "./components/Header/Header";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}
