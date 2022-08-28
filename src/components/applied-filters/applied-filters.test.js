import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import AppliedFilters from "./applied-filters";

test(`Make sure of the empty text`, () => {
  render(
    <Provider store={store}>
      <AppliedFilters title="size" />
    </Provider>
  );

  const emptyText = screen.getByTestId("empty");

  expect(emptyText).toHaveTextContent("No filters to be shown");
});
