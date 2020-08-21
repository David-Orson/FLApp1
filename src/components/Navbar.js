import React from "react";
import { Link } from "@reach/router";

import NavLink from "./NavLink";

import "../css/Navbar.css";

const Navbar = (props) => {
  const { clDashboardUrl, shDashboardUrl } = props.userData;

  return (
    <div className="navbar">
      <h2 className="nav-title">APPS</h2>

      {/* <Link to={`/?mid=${props.mid}&code=${props.code}`}> */}
      <NavLink to={`/`} className={` ${"major-link" /* inactive */}`}>
        Clover to Shopify Product Sync
      </NavLink>
      {/* </Link> */}

      {/* Strange fix to preserve the Navlink as Active for styling but have the Link redirect to mid and code params. The Navlink's Events have been muted in css */}

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
        {clDashboardUrl ? (
          <a href={clDashboardUrl} className="minor-link">
            Back to Clover
          </a>
        ) : null}
        {shDashboardUrl ? (
          <a href={shDashboardUrl} className="minor-link">
            Back to Shopify
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
