import React from "react";

import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">OMNIGATEWAY.NET</h1>
      <div className="user-container">
        <p className="user">SS</p>
        <p className="username">Steve Slavutskiy</p>
      </div>
    </div>
  );
};

export default Header;
