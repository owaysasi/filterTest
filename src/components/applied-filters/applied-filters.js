import React, { useCallback } from "react";

// Material UI
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";

// Style
import AppliedFiltersStyle from "./applied-filters-style";

// Reducers
import {
  unselectFilter,
  clearAllFilters,
  changeSuccessMessageStatus,
} from "../../redux/slice/filter-slice";

// Component
import FilterButton from "../filter-button/filter-button";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Const
import { ALERT_PERIOD } from "../../const/const";

const useStyles = makeStyles(AppliedFiltersStyle);

function AppliedFilters(props) {
  const classes = useStyles(props);

  const dispatch = useDispatch();

  const appliedFilters = useSelector((state) => state.filters.appliedFilters);

  const unselect = useCallback((value, title) => {
    dispatch(unselectFilter({ value, title }));
    setTimeout(() => {
      dispatch(changeSuccessMessageStatus(false));
    }, ALERT_PERIOD);
  }, []);

  const clearAll = useCallback(() => {
    dispatch(clearAllFilters());
    setTimeout(() => {
      dispatch(changeSuccessMessageStatus(false));
    }, ALERT_PERIOD);
  }, []);

  return (
    <div className={classes.filtersContainer}>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={1}
      >
        <Grid item md={4} xs={6}>
          <p variant="h4">Applied Filters : </p>
        </Grid>
        <Grid
          item
          container
          direction="row"
          md={8}
          xs={6}
          spacing={1}
          className={classes.filtersList}
        >
          {Object.keys(appliedFilters)?.length ? (
            Object.keys(appliedFilters).map((item) => {
              return appliedFilters[item].map((element) => {
                return (
                  <Grid item key={element}>
                    <FilterButton
                      onClick={() => unselect(element, item)}
                      title={element}
                      icon={ClearIcon}
                    />
                  </Grid>
                );
              });
            })
          ) : (
            <Grid item>
              <p data-testid="empty" variant="h5">
                No filters to be shown
              </p>
            </Grid>
          )}
          {Object.values(appliedFilters)?.length ? (
            <Grid item key={"clear"}>
              <FilterButton
                onClick={clearAll}
                title={"Clear All"}
                color="warning"
              />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}

export default AppliedFilters;
