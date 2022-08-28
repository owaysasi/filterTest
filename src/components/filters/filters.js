import React, { useState } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Menu } from "@mui/material";

// Redux
import { useSelector } from "react-redux";

// Components
import FilterMenuAccordion from "../filter-accordion-menu/filter-accordion-menu";
import SingleFilterMenu from "../single-filter-menu.js/single-filter-menu";
import FilterButton from "../filter-button/filter-button";

// Style
import FilterStyle from "./filters-style";

const useStyles = makeStyles(FilterStyle);

function Filters(props) {
  const classes = useStyles(props);

  const allFilters = useSelector((state) => state.filters.allFilters);

  const [openMoreFilters, setOpenMoreFilters] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const drawFilterButtons = (beginIndex, endIndex, isExpandable) => {
    return Object.keys(allFilters)
      .slice(beginIndex, endIndex)
      .map((item, index) => {
        return (
          <Grid
            item
            key={item}
            className={isExpandable ? classes.regularFilters : ""}
          >
            <SingleFilterMenu title={item} />
          </Grid>
        );
      });
  };

  const handleClose = () => {
    setOpenMoreFilters(false);
    setAnchorEl(null);
  };

  const onFilterButtonClick = (e) => {
    setOpenMoreFilters(!openMoreFilters);
    setAnchorEl(e.target);
  };

  return (
    <div className={classes.filtersContainer}>
      <Grid className={classes.filtersList} container spacing={1}>
        {drawFilterButtons(0, 2, false)}
        {drawFilterButtons(2, allFilters.length, true)}
        <Grid item className={classes.moreFilters}>
          <FilterButton title={"More Filters"} onClick={onFilterButtonClick} />
        </Grid>
        {openMoreFilters ? (
          <Menu
            anchorEl={anchorEl}
            id="filter-menu"
            open={openMoreFilters}
            onClose={handleClose}
          >
            <FilterMenuAccordion />
          </Menu>
        ) : null}
      </Grid>
    </div>
  );
}

export default Filters;
