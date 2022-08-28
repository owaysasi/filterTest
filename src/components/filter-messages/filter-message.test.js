import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import FilterMessage from "./filter-message";

test(`Show the right message`, () => {
  render(
    <Provider store={store}>
      <FilterMessage type="cancel" />
    </Provider>
  );

  const cancelFilterMessage = screen.getByTestId("cancel");

  expect(cancelFilterMessage).toContainHTML(
    "Cancel !! : operation got cancelled"
  );
});
