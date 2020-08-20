import React from "react";

import "../css/Sync.css";

import cloverLogo from "../Assets/clover.png";
import shopifyLogo from "../Assets/shopify.png";

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

  const cloverAccountMarkup = clName ? (
    <div className="account-container">
      <p>{clName}</p>
      <p className="caption">MID: {clMid}</p>
      <p className="authenticated-caption">
        {clName ? "Authentication Complete" : null}
      </p>
    </div>
  ) : (
    <div className="account-container">
      <a
        className="signin-link"
        href="https://www.clover.com/appmarket/apps/VGD1C1C0T1D3P"
        target="_blank"
      >
        Sign in to Authenticate
      </a>
      <p className="create-helper">
        Don't have a Clover Account?<span> </span>
        <a
          className="create-link"
          href="https://www.clover.com/goapply/"
          target="_blank"
        >
          Start to create
        </a>
      </p>
    </div>
  );

  const shopifyAccountMarkup = shName ? (
    <div className="account-container">
      <p>{shName}</p>
      <p className="caption">MID: {shMid}</p>
      <p className="authenticated-caption">
        {shName ? "Authentication Complete" : null}
      </p>
    </div>
  ) : (
    <div className="account-container">
      <a
        className="signin-link"
        href="https://apps.shopify.com/clover-live-product-sync"
        target="_blank"
      >
        Sign in to Authenticate
      </a>
      <p className="create-helper">
        Don't have a Shopify Account?<span> </span>
        <a
          className="create-link"
          href="https://www.shopify.com/"
          target="_blank"
        >
          Start to create
        </a>
      </p>
    </div>
  );

  return (
    <div>
      <ContentTopline title="Clover to Shopify Product Sync" />
      <div className="accounts">
        <div className="clover-account">
          <img className="logo" src={cloverLogo} />
          {cloverAccountMarkup}
        </div>
        <div className="shopify-account">
          <img className="logo" src={shopifyLogo} />
          {shopifyAccountMarkup}
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
            <td className="td--sync">
              {itemsCount ? `${itemsCount} Records` : null}
            </td>
            <td className="td--sync">
              {itemsCount ? (
                <div>
                  [Fields Mapped by Default]
                  <br />
                  <a className="signin-link">View Mapping</a>
                </div>
              ) : null}
            </td>
            <td className="td--sync sync-text">Live Sync</td>
          </tr>
          <tr>
            <td className="td--sync">Categories</td>
            <td className="td--sync">
              {categoriesCount ? `${categoriesCount} Records` : null}
            </td>
            <td className="td--sync">
              {categoriesCount ? (
                <div>
                  [Categories Mapped by Default]
                  <br />
                  <a className="signin-link">View Mapping</a>
                </div>
              ) : null}
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
