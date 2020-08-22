import React from "react";

import "../css/Login.css";

import ContentTopline from "../components/ContentTopline";

const Login = () => {
  return (
    <div className="login-container">
      <ContentTopline title="New User" />
      <h1 className="test">Welcome to OMNIGATEWAY</h1>
      <p>To get started, please click the button below.</p>
      <button className="button--large">Get Started</button>
    </div>
  );
};

export default Login;
