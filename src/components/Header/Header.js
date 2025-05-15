import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
const [showMenu, setShowMenu] = useState(false);

 
    const changeHeaderColor = () => {
      if (window.scrollY >= 50) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener("scroll", changeHeaderColor);


  return (
    <header
      className={`header ${changeHeader ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav-bar container">
        <a href="#home" className="logo">
          <span>Caffeine</span>Craft
        </a>

        {/* Hamburger menu */}
        <button 
        onClick={() => setShowMenu(!showMenu)}
        className="hamburger-menu"
        aria-label="Toggle-menu"
        >
            <i className="bx bx-menu"></i>
        </button>

            {/* menu */}
        <div className={`menu ${showMenu ? 'show-menu' : ""}`} id="menu">
          <ul className="lists">
            <li>
              <a href="#place" 
              className="navbar-link"
              onClick={()=> setShowMenu(false)}>
                Place
              </a>
            </li>
            <li>
              <a href="#items" 
              className="navbar-link"
              onClick={()=> setShowMenu(false)}>
                Items
              </a>
            </li>
            <li>
              <a href="#home" 
              className="navbar-link active-link"
              onClick={()=> setShowMenu(false)}>
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
