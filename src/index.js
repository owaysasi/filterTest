import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
