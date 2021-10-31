import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <img
        className="logo"
        src={logo}
        alt="Surreal Estate logo"
        title="Surreal Estate"
      />
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item">View Properties</li>
          <li className="navbar-links-item">Add a Property</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
