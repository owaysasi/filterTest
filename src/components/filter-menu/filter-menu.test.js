import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterMenu from "./filter-menu";

test(`When click on filterButton make sure to get selected`, () => {
  renderWithProviders(<FilterMenu title="size" />);

  const firstFilteredButton = screen.getByTestId("filtered-button-0");

  const unClickedColor = theme.palette.info.main;
  const clickedColor = theme.palette.warning.main;

  userEvent.click(firstFilteredButton);

  expect(firstFilteredButton).toHaveStyle({ color: clickedColor });
  userEvent.click(firstFilteredButton);
  expect(firstFilteredButton).toHaveStyle({ color: unClickedColor });
});
