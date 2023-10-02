import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="logo-text">HelpMeOut</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              How It Works
            </a>
          </li>
        </ul>
      </div>
      <a className="get-started" href="#">
        Get Started
      </a>
    </nav>
  );
}

export default Navbar;
