import React from "react";
import useModal from "../../hooks/useModal";
import InputField from "../../Ui/Input";
import { NavLink } from "react-router-dom";

import "./index.css";

const Navbar = ({ setSearch, search }) => {

  const { isOpen, toggle } = useModal();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">🎬 MovieHub</div>

        {/* Navigation */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>

          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/"
            className="nav-item"
          >
            Movies
          </NavLink>

          {/* <li className="nav-item">Movies</li> */}

          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/tvshow"
            className="nav-item"
          >
            TV Shows
          </NavLink>

          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/trending"
            className="nav-item"
          >
            Trending
          </NavLink>

          {/* <li className="nav-item">My List</li> */}

          {/* Search */}
          <li>
            <InputField
              type="text"
              placeholder="Search movies..."
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </li>

        </ul>

        {/* Hamburger Menu */}
        <div
          className="hamburger"
          onClick={toggle}
        >
          ☰
        </div>

      </div>
    </nav>
  );
};
export default Navbar;