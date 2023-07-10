import React from "react";
import logo from "../assets/logo.jpeg";
const Navbar = ({ reload, onNavItemClick, onSearchButtonClick }) => {
  return (
    <nav>
      <div className="main-nav container flex">
        <a href="#" onClick={reload} className="company-logo">
          <img src={logo} alt="company logo" />
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li
              className="hover-link nav-item"
              id="ipl"
              onClick={() => onNavItemClick("ipl")}
            >
              IPL
            </li>
            <li
              className="hover-link nav-item"
              id="finance"
              onClick={() => onNavItemClick("finance")}
            >
              Finance
            </li>
            <li
              className="hover-link nav-item"
              id="politics"
              onClick={() => onNavItemClick("politics")}
            >
              Politics
            </li>
          </ul>
        </div>
        <div className="search-bar flex">
          <input
            id="search-text"
            type="text"
            className="news-input"
            placeholder="e.g. Science"
            onChange={(e) => onSearchButtonClick(e.target.value)}
          />
          <button
            id="search-button"
            className="search-button"
            onClick={onSearchButtonClick}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
