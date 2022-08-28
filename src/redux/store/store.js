import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../slice/filter-slice";

export default configureStore({
  reducer: {
    filters: filterReducer,
  },
});
