import React, { useState } from "react";
import PropTypes from "prop-types";

// Material UI
import Menu from "@mui/material/Menu";

// Redux
import { useSelector } from "react-redux";

// Components
import FilterButton from "../filter-button/filter-button";
import FilterMenu from "../filter-menu/filter-menu";

function SingleFilterMenu(props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { title } = props;

  const appliedFilters = useSelector((state) => state.filters.appliedFilters);

  const counterCondition = appliedFilters[title]?.length
    ? `( ${appliedFilters[title]?.length} )`
    : null;

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const onFilterButtonClick = (e) => {
    setOpen(!open);
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <FilterButton onClick={onFilterButtonClick} title={title}>
        {counterCondition}
      </FilterButton>
      {open && anchorEl ? (
        <Menu
          anchorEl={anchorEl}
          id="filter-menu"
          open={open}
          onClose={handleClose}
        >
          <FilterMenu setAnchorEl={setAnchorEl} title={title} />
        </Menu>
      ) : null}
    </div>
  );
}

SingleFilterMenu.prototypes = {
  title: PropTypes.string,
};

export default SingleFilterMenu;
