import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul class="menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/upload">Upload</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
