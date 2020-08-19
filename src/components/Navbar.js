import React from "react";

import NavLink from "./NavLink";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="nav-title">APPS</h2>

      <NavLink to="/" className="major-link">
        Clover to Shopify Product Sync
      </NavLink>

      <div className="minor-container">
        <p className="minor-link">Mapping Rules</p>
        <div className="sub-container">
          <NavLink to="/products" className="sub-link">
            For Items/Products
          </NavLink>
          <NavLink to="/categories" className="sub-link">
            For Categories
          </NavLink>
        </div>
        <a href="https://www.google.com" className="minor-link">
          Back to Clover
        </a>
        <a href="https://www.google.com" className="minor-link">
          Back to Shopify
        </a>
      </div>
    </div>
  );
};

export default Navbar;
