import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { GiRingedPlanet } from "react-icons/gi";


const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <Link className="nav_icon" to="/"><GiRingedPlanet /></Link>
        <Link className="nav_title" to="/">NASA Photos</Link>
      </div>
      <div className="nav__right">

        <Link 
          className="nav_link" 
          to="/search"
        >
          <FaSearch className="nav__icon"/> Search
        </Link>

        <Link 
          className="nav_link" 
          to="/likes"
        >
          <FaHeart className="nav__icon"/> My Likes
        </Link>

      </div>
    </nav>
  )
}

export default NavBar;

