import React from "react";

import "../css/ContentTopline.css";

import omniIcon from "../Assets/omnigateway_icon.png";

const ContentTopline = (props) => {
  return (
    <div className="title-topline">
      <img className="logo--omni" src={omniIcon} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default ContentTopline;
