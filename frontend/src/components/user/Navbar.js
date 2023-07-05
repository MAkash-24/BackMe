import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md " style={{ backgroundColor: "#33d2c2" }}>
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
              <Avatar
                src="images/database-svg.svg"
                loading="lazy"
              />
            </NavLink>
            {/* Left links */}
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
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
