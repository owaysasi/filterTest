const FilterStyle = (theme) => ({
  filtersContainer: {
    padding: "20px 20px",
    fontFamily: "DynaPuff, cursive",
  },
  filtersList: {
    border: "2px solid #8ad5fd",
    paddingBottom: "8px",
  },
  moreFilters: {
    display: "none",
  },
  regularFilters: {
    display: "block",
  },
  "@media screen and (max-width: 800px)": {
    moreFilters: {
      display: "block",
    },
    regularFilters: {
      display: "none",
    },
  },
});

export default FilterStyle;
