import React from "react";

import "./App.css";

// Component
import AppliedFilters from "./components/applied-filters/applied-filters";
import Filters from "./components/filters/filters";
import FilterLogo from "./components/filter-logo/filter-logo";
import FilterMessage from "./components/filter-messages/filter-message";

function App() {
  return (
    <div className="App">
      <FilterLogo />
      <Filters />
      <FilterMessage type="success" />
      <FilterMessage type="cancel" />
      <AppliedFilters />
    </div>
  );
}

export default App;
