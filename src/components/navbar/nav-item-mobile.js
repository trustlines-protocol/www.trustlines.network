import React from "react";
import { Link } from "gatsby";

export default function NavItemMobile({ subNavItems = [], to, label }) {
  return (
    <div className="flex flex-col mb-4">
      <Link
        className="font-semibold text-2xl "
        to={to}
        activeClassName="text-majorelle-blue"
      >
        {label}
      </Link>
      {subNavItems.map((item, i) => (
        <Link
          key={`${item.label}-${i}`}
          to={item.to}
          target="_blank"
          rel="noreferrer"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
