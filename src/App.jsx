import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Facts, SearchResults } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:animeName" element={<Facts />} />
      <Route exact path="/:animeName/:factId" element={<SearchResults />} />
    </Routes>
  );
};

export default App;
