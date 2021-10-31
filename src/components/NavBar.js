import React from "react";
import { NavLink } from "react-router-dom";
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
          <li className="navbar-links-item">
            <NavLink to="/">View Properties</NavLink>
          </li>
          <li className="navbar-links-item">
            <NavLink to="/add-property">Add a Property</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
