import React from "react";

import "../css/Categories.css";

import ContentTopline from "../components/ContentTopline";

const Categories = () => {
  return (
    <div>
      <ContentTopline title="Clover to Shopify Mapping Rules For Categories/Collections" />
      <div className="categories-container">
        <table className="table--products">
          <tr>
            <th className="th--products"></th>
            <th className="th--products">
              <div className="th--products--flexer">
                <h2 className="missing-icon--small">C</h2>
                <p>From Clover Item</p>
              </div>
            </th>
            <th className="th--products">
              <div className="th--products--flexer">
                <h2 className="missing-icon--small">S</h2>
                <p>Into Shopify products</p>
              </div>
            </th>
          </tr>
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
        </table>
        <p className="rules-title--categories">Sync Rules</p>
        <p className="caption">- Categories will be synced every 24 hours.</p>
        <p className="caption">
          - Changes made to Shopify collections will be overwritten on the next
          sync based on Categories in Clover.
        </p>
      </div>
    </div>
  );
};

export default Categories;
