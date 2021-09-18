import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiRingedPlanet } from "react-icons/gi";

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav className={`nav ${ scrollNav ? "scrolling" : "" }`}>
      <div className="nav_left">
        <Link className="nav_icon" to="/" ><GiRingedPlanet /></Link>
        <Link className="nav_title" to="/" >NASA Photos</Link>
      </div>
      <div className="nav_right">

        <Link 
          className="nav_link" 
          to="/search"
        >Search
        </Link>

        <Link 
          className="nav_link" 
          to="/likes"
        >My Likes
        </Link>

      </div>
    </nav>
  )
}

export default NavBar;

