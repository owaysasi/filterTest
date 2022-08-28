import React from "react";
import PropTypes from "prop-types";

// Material UI
import Button from "@mui/material/Button";

function FilterButton(props) {
  const { index, title, onClick, icon, children, selected, color } = props;

  const colorCondition = color ?? selected ? "warning" : "info";
  const iconCondition = icon ? <props.icon onClick={onClick} /> : null;
  const onClickCondition = !icon ? onClick : null;

  return (
    <Button
      data-testid={`filtered-button-${index}`}
      name={title}
      onClick={onClickCondition}
      disableRipple
      variant="outlined"
      size="small"
      color={colorCondition}
      endIcon={iconCondition}
    >
      {title} {children && children}
    </Button>
  );
}

FilterButton.defaultProps = {
  selected: false,
  filterCounter: 0,
};

FilterButton.prototypes = {
  index: PropTypes.number,
  filterCounter: PropTypes.number,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.element,
  selected: PropTypes.bool,
  color: PropTypes.string,
};

export default React.memo(FilterButton);
