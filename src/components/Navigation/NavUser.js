import React from "react";
import { NavLink } from "react-router-dom";

const NavUser = () => (
  <nav>
    <NavLink to="/homeuser">
      Home
    </NavLink>

    <NavLink to="/notes">
      My Notes
    </NavLink>

    <NavLink to="/contacts">
      My Contacts
    </NavLink>
  </nav>
);

export default NavUser;
