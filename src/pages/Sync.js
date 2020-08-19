import React from "react";

import "../css/Sync.css";

import ContentTopline from "../components/ContentTopline";

const Sync = (props) => {
  console.log(props);

  const {
    mid,
    clMid,
    clName,
    shMid,
    shName,
    itemsCount,
    categoriesCount,
  } = props.userData;

  return (
    <div>
      <ContentTopline title="Clover to Shopify Product Sync" />
      <div className="accounts">
        <div className="clover-account">
          <h2 className="missing-icon">Clvr</h2>
          <div className="account-container">
            <p>{clName}</p>
            <p className="caption">{clMid}</p>
            <p className="authenticated-caption">
              {clName ? "Authentication Complete" : null}
            </p>
          </div>
        </div>
        <div className="shopify-account">
          <h2 className="missing-icon">Shpfy</h2>
          <div className="account-container">
            <a className="signin-link">Sign in to Authenticate</a>

            <p className="create-helper">
              Don't have a Shopify Account?<span> </span>
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
            <td className="td--sync">{itemsCount} Records</td>
            <td className="td--sync">
              [Fields Mapped by Default]
              <br />
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Live Sync</td>
          </tr>
          <tr>
            <td className="td--sync">Categories</td>
            <td className="td--sync">{categoriesCount} Categories</td>
            <td className="td--sync">
              [Categories Mapped by Default]
              <br />
              <a className="signin-link">View Mapping</a>
            </td>
            <td className="td--sync sync-text">Batch Sync</td>
          </tr>
          <tr>
            <td className="td--sync">Modifiers</td>
            <td className="td--sync"></td>
            <td className="td--sync">
              <br />
              <a className="signin-link"></a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
          <tr>
            <td className="td--sync">Labels</td>
            <td className="td--sync"></td>
            <td className="td--sync">
              <br />
              <a className="signin-link"></a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
          <tr>
            <td className="td--sync">Taxes</td>
            <td className="td--sync"></td>
            <td className="td--sync">
              <br />
              <a className="signin-link"></a>
            </td>
            <td className="td--sync sync-text">Soon</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Sync;
