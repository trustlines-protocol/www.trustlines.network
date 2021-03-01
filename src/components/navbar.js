import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item";

const NAV_ITEMS = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Communities",
    to: "/communities",
  },
  {
    label: "Ecosystem",
    to: "/ecosystem",
  },
  {
    label: "Learn",
    to: "/learn",
  },
  {
    label: "News & Events",
    to: "/news",
  },
];

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-auto container">
      <Link to="/">Logo</Link>
      <div className="flex flex-row gap-3">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <div>How it works</div>
      </div>
    </div>
  );
}
