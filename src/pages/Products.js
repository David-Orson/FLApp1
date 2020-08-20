import React from "react";

import "../css/Products.css";

import cloverLogo from "../Assets/clover.png";
import shopifyLogo from "../Assets/shopify.png";

import ContentTopline from "../components/ContentTopline";

const Products = () => {
  return (
    <div>
      <ContentTopline title="Clover to Shopify Mapping Rules For Item/Product Fields" />
      <div className="product-container">
        <table className="table--products">
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
          <tr>
            <td className="td--products--minor">Item Scope</td>
            <td className="td--products--minor">Not Used</td>
            <td className="td--products--minor">ItemScope Global</td>
          </tr>
          <tr>
            <td className="td--products--minor">Name</td>
            <td className="td--products--minor">Name</td>
            <td className="td--products--minor">Name</td>
          </tr>
          <tr>
            <td className="td--products--minor">Alternate Name</td>
            <td className="td--products--minor">Alternate Name</td>
            <td className="td--products--minor">Shopify Description</td>
          </tr>
          <tr>
            <td className="td--products">Price Type</td>
            <td className="td--products"></td>
            <td className="td--products"></td>
          </tr>
          <tr>
            <td className="td--products--minor">Fixed Price</td>
            <td className="td--products--minor">Price</td>
            <td className="td--products--minor">Price</td>
          </tr>
          <tr>
            <td className="td--products--minor">Variable</td>
            <td className="td--products--minor"></td>
            <td className="td--products--minor">Not Used</td>
          </tr>
          <tr>
            <td className="td--products--minor">Per Unit</td>
            <td className="td--products--minor">Unit Price</td>
            <td className="td--products--minor">Price</td>
          </tr>
          <tr>
            <td className="td--products--minor">SKU</td>
            <td className="td--products--minor">SKU</td>
            <td className="td--products--minor">SKU</td>
          </tr>
          <tr>
            <td className="td--products">Inventory Stock Count</td>
            <td className="td--products">Count</td>
            <td className="td--products">Stock Count</td>
          </tr>
          <tr>
            <td className="td--products--minor">Unit of Measurement</td>
            <td className="td--products--minor">Item Unit</td>
            <td className="td--products--minor"></td>
          </tr>
          <tr>
            <td className="td--products">Product Picture(s)</td>
            <td className="td--products">Not Used</td>
            <td className="td--products">Picture(s)</td>
          </tr>
        </table>
        <div className="rules-container">
          <p className="rules-title">Sync Rules</p>
          <p className="caption">
            - Variable Price Items Not Imported from Clover to Shopify
          </p>
          <p className="caption">
            - If Variable Price Item is removed from Clover it will be removed
            from Shopify
          </p>
          <p className="caption">
            - Changes made to items in Shopify will be overwritten on next sync
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
