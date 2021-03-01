import React from "react";
import { Link } from "gatsby";

export default function NavItem(props) {
  return (
    <Link to={props.to} activeClassName="text-coral-red">
      {props.label}
    </Link>
  );
}
