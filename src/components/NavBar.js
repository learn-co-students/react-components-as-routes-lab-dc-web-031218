import React from "react";
import { NavLink } from "react-router-dom";
const active = {
  color: "green"
};
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={active}>
        Home
      </NavLink>

      <NavLink to="/movies" activeStyle={active}>
        Movies
      </NavLink>

      <NavLink to="/actors" activeStyle={active}>
        Actors
      </NavLink>

      <NavLink to="/directors" activeStyle={active}>
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
