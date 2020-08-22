import React, { useEffect } from "react";

import "../css/UserSetup.css";

import ContentTopline from "../components/ContentTopline";

const UserSetup = (props) => {
  console.log(props);
  return (
    <div className="login-container">
      <ContentTopline title="First Time Setup" />
      <h1 className="test">Welcome, New User</h1>
      <p>
        Please click the button below to run the first time sync. This action
        requires some time so please leave this page open.
      </p>
      <button className="button--large">First Sync</button>
    </div>
  );
};

export default UserSetup;
