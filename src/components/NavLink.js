import React from "react";
import { Link } from "@reach/router";

const NavLink = (props) => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            background: isCurrent ? "#e3e7f0" : null,
            color: isCurrent ? "#5972d3" : null,
          },
        };
      }}
    />
  );
};

export default NavLink;
