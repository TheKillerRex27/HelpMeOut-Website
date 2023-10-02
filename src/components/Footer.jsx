import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={footerLogo} alt="logo" />
        <h1 className="footer-logo-text">HelpMeOut</h1>
      </div>
      <div className="footer-links">
        <h5 className="links-title">Menu</h5>
        <ul>
          <li>
            <a className="footer-link">Home</a>
          </li>
          <li>
            <a className="footer-link">Converter</a>
          </li>
          <li>
            <a className="footer-link">How It Works</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h5 className="links-title">About us</h5>
        <ul>
          <li>
            <a className="footer-link">About</a>
          </li>
          <li>
            <a className="footer-link">Contact Us</a>
          </li>
          <li>
            <a className="footer-link">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h5 className="links-title">Screen Record</h5>
        <ul>
          <li>
            <a className="footer-link">Browser Window</a>
          </li>
          <li>
            <a className="footer-link">Desktop</a>
          </li>
          <li>
            <a className="footer-link">Application</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
