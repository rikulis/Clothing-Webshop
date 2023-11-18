// SecondHeader.jsx

import React from "react";
import "../componentStyles/SecondHeader.css";
import logo from "/Logo.png"; // Replace 'logo.svg' with the path to your logo file

const SecondHeader = () => {
  return (
    <div className="second-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="icons-container">
        <i className="material-icons">icon1</i>
        <i className="material-icons">icon2</i>
        <i className="material-icons">icon3</i>
      </div>
    </div>
  );
};

export default SecondHeader;
