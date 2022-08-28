// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "./redux/store/store";

export const theme = createTheme();

global.theme = theme;
global.renderWithProviders = (ui) => {
  const Wrapper = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};
