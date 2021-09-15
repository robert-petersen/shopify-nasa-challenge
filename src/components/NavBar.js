import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { GiRingedPlanet } from "react-icons/gi";


const NavBar = () => {
  return (
    <nav>
      <div className="nav__left">
        <Link to="/"><GiRingedPlanet /></Link>
        <Link to="/">NASA Photos</Link>
      </div>
      <div className="nav__right">
        <Link to="/search"><FaSearch className="nav__icon"/> Search</Link>
        <Link to="/likes"><FaHeart className="nav__icon"/> My Likes</Link>
      </div>
    </nav>
  )
}

export default NavBar;

