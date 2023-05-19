import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md " style={{ backgroundColor: "#33d2c2" }}>
        {/* Container wrapper */}
        <div className="container" >
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
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="C:\Users\maury\OneDrive\Desktop\BackMe\frontend\public\images\back2.svg" alt="image" />
              
              


              
            </a>
            {/* Left links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <NavLink className="nav-link" style={{ color : "white !important"}} to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/event">
                  Event Handling
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/manageUser">
                  Manage User
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
