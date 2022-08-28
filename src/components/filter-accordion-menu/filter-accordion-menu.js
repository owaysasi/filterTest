import React, { useState } from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Style
import FilterAccordionMenuStyle from "./filter-accordion-menu-style";

// Components
import FilterMenu from "../filter-menu/filter-menu";

// Redux
import { useSelector } from "react-redux";

const useStyles = makeStyles(FilterAccordionMenuStyle);

function FilterMenuAccordion(props) {
  const allFilters = useSelector((state) => state.filters.allFilters);
  const filters = Object.keys(allFilters).slice(2, allFilters.length);

  const classes = useStyles(props);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.accordionContainer}>
      {filters.length
        ? filters.map((filter) => {
            return (
              <Accordion
                elevation={0}
                key={filter}
                expanded={expanded === filter}
                onChange={handleChange(filter)}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === filter ? <RemoveIcon /> : <AddIcon />
                  }
                  aria-controls={`${filter}-content`}
                  id={`${filter.id}-header`}
                >
                  <Typography className={classes.accordionTypography}>
                    {filter}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FilterMenu title={filter} showCancelButton={false} />
                </AccordionDetails>
              </Accordion>
            );
          })
        : null}
    </div>
  );
}

export default FilterMenuAccordion;
