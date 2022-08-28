import React, { useCallback } from "react";
import PropTypes from "prop-types";

// Material UI
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Reducers
import {
  changeCancelMessageStatus,
  changeSuccessMessageStatus,
} from "../../redux/slice/filter-slice";

function FilterMessage(props) {
  const { type } = props;
  const dispatch = useDispatch();
  const typeCondition = type === "success" ? "success" : "warning";
  const messageCondition =
    type === "success"
      ? "Success !! : filters been modified correctly"
      : "Cancel !! : operation got cancelled";

  const isMessageOpen = useSelector(
    (state) => state.filters[`${type}MessageOpen`]
  );

  const handleIconClick = useCallback(() => {
    if (type === "success") {
      dispatch(changeSuccessMessageStatus(false));
    } else {
      dispatch(changeCancelMessageStatus(false));
    }
  }, [type]);

  return (
    <Collapse data-testid={type} in={isMessageOpen}>
      <Alert
        severity={typeCondition}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleIconClick}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {messageCondition}
      </Alert>
    </Collapse>
  );
}

FilterMessage.defaultProps = {
  type: "success",
};

FilterMessage.prototypes = {
  type: PropTypes.oneOf(["success", "cancel"]),
};

export default FilterMessage;
