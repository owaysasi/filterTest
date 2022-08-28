import React from "react";

// Material UI
import { IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Logo
import { ReactComponent as ReactLogo } from "../../logos/react.svg";

// Style
import FilterLogoStyle from "./filter-logo-style";

const useStyles = makeStyles(FilterLogoStyle);

function FilterLogo() {
  const classes = useStyles();
  return (
    <div>
      <Toolbar>
        <IconButton
          disableRipple
          color="inherit"
          aria-label="open drawer"
          edge="start"
        >
          <ReactLogo className={classes.logo} />
        </IconButton>
        <h3>Logo</h3>
      </Toolbar>
    </div>
  );
}

export default FilterLogo;
