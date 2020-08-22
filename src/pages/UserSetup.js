import React, { useState } from "react";
import axios from "axios";

import "../css/UserSetup.css";

import ContentTopline from "../components/ContentTopline";

const UserSetup = (props) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  console.log(props);

  const firstSync = () => {
    setButtonLoading(true);
    console.log(buttonLoading);
    axios
      .post(
        `https://omnigateway.net/api/${props.mid}/import/clover/items`,
        {},
        {
          headers: {
            Authorization: `Bearer ${props.authToken}`,
          },
        }
      )
      .then((res) => {
        axios.post(
          `https://omnigateway.net/api/${props.mid}/import/clover/categories`,
          {},
          {
            headers: {
              Authorization: `Bearer ${props.authToken}`,
            },
          }
        );
      })
      .then((res) => {
        axios.post(
          `https://omnigateway.net/api/${props.mid}/sync/clover`,
          {},
          {
            headers: {
              Authorization: `Bearer ${props.authToken}`,
            },
          }
        );
      })
      .then((res) => {
        if (res) {
          setButtonLoading(false);
        }
      });
  };

  return (
    <div className="login-container">
      <ContentTopline title="First Time Setup" />
      <h1 className="test">Welcome, New User</h1>
      <p>
        Please click the button below to run the first time sync. This action
        requires some time so please leave this page open.
      </p>

      {buttonLoading ? (
        <p className="sync-text">Loading...</p>
      ) : (
        <button className="button--large" onClick={() => firstSync()}>
          First Sync
        </button>
      )}
    </div>
  );
};

export default UserSetup;
