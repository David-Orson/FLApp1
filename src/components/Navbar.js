import React from "react";

import { Link } from "@reach/router";

import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="nav-title">APPS</h2>

      <Link to="/" className="major-link">
        Clover to Shopify Product Sync
      </Link>

      <div className="minor-container">
        <p className="minor-link">Mapping Rules</p>
        <div className="sub-container">
          <Link to="/" className="sub-link">
            For Items/Products
          </Link>
          <Link to="/" className="sub-link">
            For Categories
          </Link>
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
