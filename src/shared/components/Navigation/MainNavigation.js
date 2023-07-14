import React from "react";

import "./MainHeader";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
function MainNavigation() {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">Your Places</h1>
      <nav className="main-navigation__header-nav"> ...</nav>
    </MainHeader>
  );
}
export default MainNavigation;
