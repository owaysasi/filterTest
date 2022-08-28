import React, { useState } from "react";
import PropTypes from "prop-types";

// Material UI
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

// Style
import FilterMenuStyle from "./filter-menu-style";

// Reducers
import {
  setAllFilters,
  changeSuccessMessageStatus,
  changeCancelMessageStatus,
} from "../../redux/slice/filter-slice";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Components
import FilterButton from "../filter-button/filter-button";
import { ALERT_PERIOD } from "../../const/const";

const useStyles = makeStyles(FilterMenuStyle);

function FilterMenu(props) {
  const { title, showCancelButton, setAnchorEl } = props;
  const dispatch = useDispatch();

  const appliedFilters = useSelector((state) => state.filters.appliedFilters);
  const allFilters = useSelector((state) => state.filters.allFilters);

  const [filtersToBeApplied, setFiltersToBeApplied] = useState(appliedFilters);

  const justifyCondition = showCancelButton ? "space-between" : "flex-end";

  const classes = useStyles(props);

  const onMenuItemFilterClick = (value) => {
    if (!filtersToBeApplied[title]?.includes(value)) {
      setFiltersToBeApplied({
        ...filtersToBeApplied,
        [title]: [...(filtersToBeApplied[title] || []), value],
      });
    } else {
      setFiltersToBeApplied({
        ...filtersToBeApplied,
        [title]: filtersToBeApplied[title]?.filter((item) => item !== value),
      });
    }
  };

  const onConfirmApplyingFilters = () => {
    dispatch(setAllFilters({ filters: filtersToBeApplied }));
    setAnchorEl && setAnchorEl(null);
    setTimeout(() => {
      dispatch(changeSuccessMessageStatus(false));
    }, ALERT_PERIOD);
  };

  const onCancelApplyingFilters = () => {
    setAnchorEl && setAnchorEl(null);
    dispatch(changeCancelMessageStatus(true));
    setTimeout(() => {
      dispatch(changeCancelMessageStatus(false));
    }, ALERT_PERIOD);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      className={classes.filterMenuContainer}
    >
      <Grid item container spacing={1} direction="row">
        {allFilters[title]?.length
          ? allFilters[title]?.map((item, index) => {
              return (
                <Grid item key={item?.id}>
                  <FilterButton
                    index={index}
                    selected={filtersToBeApplied[title]?.includes(item?.title)}
                    onClick={() => onMenuItemFilterClick(item?.title)}
                    title={item?.title}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
      <Grid item container direction="row" justifyContent={justifyCondition}>
        {showCancelButton ? (
          <FilterButton title="cancel" onClick={onCancelApplyingFilters} />
        ) : null}
        <FilterButton title="apply" onClick={onConfirmApplyingFilters} />
      </Grid>
    </Grid>
  );
}

FilterMenu.defaultProps = {
  showCancelButton: true,
};

FilterMenu.prototypes = {
  title: PropTypes.string,
  showCancelButton: PropTypes.bool,
  setAnchorEl: PropTypes.func,
};

export default FilterMenu;
