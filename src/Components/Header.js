import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">CB</div>
        <span className="company-name">Cloudbankin</span>
      </div>
      <div className="user-profile">
        <div className="user-initials">GC</div>
        <span className="username">Gregory Clark</span>
        <i className="arrow down"></i> {/* Directly using the arrow */}
      </div>
    </header>
  );
};

export default Header;
