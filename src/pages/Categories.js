import React from "react";

import "../css/Categories.css";

import cloverLogo from "../Assets/clover.png";
import shopifyLogo from "../Assets/shopify.png";

import ContentTopline from "../components/ContentTopline";

const Categories = () => {
  return (
    <div>
      <ContentTopline title="Clover to Shopify Mapping Rules For Categories/Collections" />
      <div className="categories-container">
        <table className="table--products">
          <thead>
            <tr>
              <th className="th--products"></th>
              <th className="th--products">
                <div className="th--products--flexer">
                  <img className="logo--small" src={cloverLogo} />
                  <p>From Clover Items</p>
                </div>
              </th>
              <th className="th--products">
                <div className="th--products--flexer">
                  <img className="logo--small" src={shopifyLogo} />
                  <p>Into Shopify products</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td--products">Category Name</td>
              <td className="td--products">Category Name</td>
              <td className="td--products">Collection Name</td>
            </tr>
            <tr>
              <td className="td--products">Collection Description</td>
              <td className="td--products">Not Used</td>
              <td className="td--products">Collection Description</td>
            </tr>
            <tr>
              <td className="td--products">Category to Item Assignment</td>
              <td className="td--products">Tracked</td>
              <td className="td--products">Tracked</td>
            </tr>
          </tbody>
        </table>
        <div className="rules-container">
          <p className="rules-title--categories">Sync Rules</p>
          <p className="caption">- Categories will be synced every 24 hours.</p>
          <p className="caption">
            - Changes made to Shopify collections will be overwritten on the
            next sync based on Categories in Clover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
