import { render, screen } from "@testing-library/react";
import FilterButton from "./filter-button";

it(`Make sure to show the right title of filterButton`, () => {
  render(<FilterButton title="size" />);

  const firstFilteredButton = screen.getByText("size");

  expect(firstFilteredButton).toContainHTML("size");
});

it(`Check filterButton default color`, () => {
  render(<FilterButton title="size" index={0} />);

  const firstFilteredButton = screen.getByTestId("filtered-button-0");
  const color = "#0288d1";

  expect(firstFilteredButton).toHaveStyle({ color });
});

it(`Check filterButto`, () => {
  render(<FilterButton title="size">( {[1, 2, 3].length} )</FilterButton>);

  const firstFilteredButton = screen.getByText("size ( 3 )");

  expect(firstFilteredButton).toBeInTheDocument();
});
