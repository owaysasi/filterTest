import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";
import { purge } from "../redux/slice/filter-slice";
import store from "../redux/store/store";

const filterArray = ["filtered-button-0", "filtered-button-1"];

const addFilter = (filterIds, name) => {
  const firstFilteredButton = screen.getByRole("button", { name });

  userEvent.click(firstFilteredButton);

  filterIds.forEach((id) => {
    const filterButton = screen.getByTestId(id);
    userEvent.click(filterButton);
  });

  const applyButton = screen.getByRole("button", { name: "apply" });
  userEvent.click(applyButton);

  expect(applyButton).not.toBeInTheDocument();
};

describe("asdasd", () => {
  afterEach(() => {
    act(() => store.dispatch(purge()));
  });
  it("Check the filter to be applied", () => {
    renderWithProviders(<App />);
    addFilter(filterArray, "size");
    expect(screen.getByText(/2' X 3'/)).toBeInTheDocument();
    expect(screen.getByText(/3' X 5'/)).toBeInTheDocument();
  });

  it("Check the clear all button", () => {
    renderWithProviders(<App />);
    addFilter(filterArray, `size`);
    const clearAllButton = screen.getByRole("button", { name: "Clear All" });
    expect(clearAllButton).toBeInTheDocument();
    userEvent.click(clearAllButton);
    expect(clearAllButton).not.toBeInTheDocument();
  });

  it("Check the clear all button22", () => {
    renderWithProviders(<App />);
    addFilter(filterArray, `size`);
    const filterButton = screen.getByText(`size ( ${filterArray.length} )`);

    expect(filterButton).toBeInTheDocument();
  });
});
