import React, { Component, Fragment } from "react";

import SearchBar from "./components/SearchBar";
import RecipeGrid from "./components/RecipeGrid";

function App() {
  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <RecipeGrid />
      </Fragment>
    </div>
  );
}

export default App;
