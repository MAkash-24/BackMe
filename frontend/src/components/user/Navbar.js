import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md"
      style={{ backgroundColor: "#33d2c2" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
            <Avatar src="images/logo.jpg" />
          </NavLink>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/profile">
                User Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/databaseConverter">
                Migrate data
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
