import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../css/navbar.css";
function Navabr() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <img src={logo} />
        <div className="navItem">
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <a href="#about">
              <li>ACADEMICS</li>
            </a>
            <a href="#about">
              <li>ADMISSIONS</li>
            </a>
            <a href="#about">
              <li>ABOUT</li>
            </a>
            <a href="#courses">
              <li>COURSES</li>
            </a>
          </ul>
        </div>

        <div className="applyNow">
          <button id="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          <a href="#">Apply Now</a>
        </div>
      </nav>
    </div>
  );
}

export default Navabr;
