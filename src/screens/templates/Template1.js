import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Template1 = () => {
  return (
    <div>
      <nav className="navbar">
        <button className="navbar-button">
          <Link to="/home" className="navbar-link">Home</Link>
        </button>
        <button className="navbar-button">
          <Link to="/appointment" className="navbar-link">Appointment</Link>
        </button>
        <button className="navbar-button">
          <Link to="/profile" className="navbar-link">Profile</Link>
        </button>
      </nav>
      <div className="template-content">
        This is Template 1
      </div>
    </div>
  );
};

export default Template1;
