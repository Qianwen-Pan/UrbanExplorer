import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import NotFound from "./shared/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/new/places" element={<NewPlaces />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
