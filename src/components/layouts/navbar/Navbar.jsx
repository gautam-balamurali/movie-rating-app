/* eslint-disable */

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to={"/"}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={"/watchlist"}>Watch List</NavLink>
        </li>
        <li>
          <NavLink to={"/starred"}>Starred Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
