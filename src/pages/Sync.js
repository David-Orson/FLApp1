import React from "react";

import "../css/Sync.css";

import ContentTopline from "../components/ContentTopline";

const Sync = () => {
  return (
    <div>
      <ContentTopline title="Clover to Shopify Product Sync" />
      <div className="accounts">
        <div className="clover-account">
          <h2 className="missing-icon">Clvr</h2>
          <div className="account-container">
            <p>Test Demo Account</p>
            <p className="caption">MID: ZUGLKJ9979RJK</p>
            <p className="authenticated-caption">Authentication Complete</p>
          </div>
        </div>
        <div className="shopify-account">
          <h2 className="missing-icon">Shpfy</h2>
          <div className="account-container">
            <a className="signin-link">Sign in to Authenticate</a>

            <p className="create-helper">
              Don't have a Shopify Account?{" "}
              <a className="create-link">Start to create</a>
            </p>
          </div>
        </div>
      </div>
      <div className="data-container">
        <table className="table--sync">
          <tr>
            <th className="th--sync">Data to Sync</th>
            <th className="th--sync">Object Details</th>
            <th className="th--sync"></th>
            <th className="th--sync"></th>
          </tr>
          <tr>
            <td className="td--sync">Items/Products</td>
            <td className="td--sync">15,000 Records</td>
            <td className="td--sync">
              [Fields Mapped by Default]{" "}
              <a className="signin-link">
                <br />
                View Mapping
              </a>
            </td>
            <td className="td--sync sync-text">Live Sync</td>
          </tr>
          <tr>
            <td className="td--sync">Categories</td>
            <td className="td--sync">7 Categories</td>
            <td className="td--sync">
              [Categories Mapped by Default]{" "}
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Batch Sync</td>
          </tr>
          <tr>
            <td className="td--sync">Modifiers</td>
            <td className="td--sync"></td>
            <td className="td--sync">
              [Modifiers Mapped by Default]{" "}
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
          <tr>
            <td className="td--sync">Labels</td>
            <td className="td--sync">29 Labels Assigned to Items</td>
            <td className="td--sync">
              [Labels Mapped by Default]{" "}
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
          <tr>
            <td className="td--sync">Taxes</td>
            <td className="td--sync">10 Tax rates</td>
            <td className="td--sync">
              [Labels Mapped by Default]{" "}
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Sync;
