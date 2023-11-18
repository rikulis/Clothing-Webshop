import React from "react";
import "../componentStyles/Footer.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h2>WEARIT</h2>
      <nav>
        <ul>
          <li>Pre-Sale FAQS</li>
          <li>About Us</li>
          <li>Support</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="logos">
        <img src={reactLogo} alt="Logo 1" />
        <img src={reactLogo} alt="Logo 2" />
        {/* Add more logos as needed */}
      </div>
      <div className="copyright">
        <p>Copyright: Riku Remes</p>
        <h4>Build with:</h4>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
