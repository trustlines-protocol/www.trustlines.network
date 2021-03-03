import React from "react";
import { Link } from "gatsby";

export default function NavItemMobile(props) {
  return (
    <div className="flex flex-col mb-4">
      <Link
        className="font-semibold text-2xl "
        to={props.to}
        activeClassName="text-majorelle-blue"
      >
        {props.label}
      </Link>
      {props.subNavItems.map((item, i) => (
        <Link key={`${item.label}-${i}`} to={item.to}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
