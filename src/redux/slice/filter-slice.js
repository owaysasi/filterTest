import { createSlice } from "@reduxjs/toolkit";

// Const
import { RESPONSE } from "../../api/data";

const initialState = {
  allFilters: RESPONSE.data,
  appliedFilters: {},
  successMessageOpen: false,
  cancelMessageOpen: false,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    unselectFilter: (state, { payload }) => {
      const { value, title } = payload || {};
      if (state.appliedFilters[title].length === 1) {
        delete state.appliedFilters[title];
      } else {
        state.appliedFilters = {
          ...state.appliedFilters,
          [title]: state.appliedFilters[title].filter((item) => item !== value),
        };
      }
      state.successMessageOpen = true;
    },
    setAllFilters: (state, { payload }) => {
      const { filters } = payload;
      state.appliedFilters = filters;
      state.successMessageOpen = true;
    },
    clearAllFilters: (state) => {
      state.appliedFilters = {};
      state.successMessageOpen = true;
    },
    changeSuccessMessageStatus: (state, { payload }) => {
      state.successMessageOpen = payload;
    },
    changeCancelMessageStatus: (state, { payload }) => {
      state.cancelMessageOpen = payload;
    },
    purge: () => initialState,
  },
});

export const {
  unselectFilter,
  setAllFilters,
  clearAllFilters,
  changeSuccessMessageStatus,
  changeCancelMessageStatus,
  purge,
} = filterSlice.actions;

export default filterSlice.reducer;
