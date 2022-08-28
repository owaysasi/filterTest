const FilterMenuStyle = (theme) => ({
  filterMenuContainer: {
    minHeight: "200px",
    width: "100%",
    padding: "0 12px",
  },
  "@media screen and (min-width: 800px)": {
    filterMenuContainer: {
      width: "500px !important",
    },
  },
});

export default FilterMenuStyle;
