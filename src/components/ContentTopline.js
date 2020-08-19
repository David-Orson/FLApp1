import React from "react";

import "../css/ContentTopline.css";

const ContentTopline = (props) => {
  return (
    <div className="title-topline">
      <h2 className="shop-icon">Icon</h2>
      <h4>{props.title}</h4>
    </div>
  );
};

export default ContentTopline;
