import React from "react";
import { Link } from "@reach/router";

import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-link" to="/">
        <h1 className="logo--header">OMNIGATEWAY.NET</h1>
      </Link>

      <div className="user-container"></div>
    </div>
  );
};

export default Header;
