import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Avatar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#33d2c2" }}>
      <Toolbar>
        <NavLink to="/">
          <Avatar src="images/logo.jpg" />
        </NavLink>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <nav>
          <NavLink
            to="/main/home"
            style={{ color: "white", marginRight: "1rem" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/main/login"
            style={{ color: "white", marginRight: "1rem" }}
          >
            Login
          </NavLink>
          <NavLink
            to="/main/signup"
            style={{ color: "white", marginRight: "1rem" }}
          >
            Signup
          </NavLink>
          <NavLink
            to="/main/event"
            style={{ color: "white", marginRight: "1rem" }}
          >
            Event Handling
          </NavLink>
          <NavLink
            to="/main/manageUser"
            style={{ color: "white", marginRight: "1rem" }}
          >
            Manage User
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
