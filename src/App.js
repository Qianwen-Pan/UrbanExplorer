import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import NotFound from "./shared/pages/NotFound";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/new/places" element={<NewPlaces />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
