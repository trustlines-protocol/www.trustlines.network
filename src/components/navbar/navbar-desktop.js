import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item-desktop";

import Logo from "../../images/logo.svg";

export default function NavbarDesktop({ navItems = [] }) {
  return (
    <div className="sticky top-0 w-full bg-white z-50">
      <div className="flex h-24 pb-4 flex-col justify-end mx-auto container">
        <div className="flex flex-row justify-between items-center px-2">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="flex flex-row gap-6 items-center">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            <Link
              className="bg-gray-100 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-300 whitespace-nowrap"
              to={
                "https://docs.trustlines.network/docs/resources/wp_content/how_trustlines_works.html"
              }
              target="_blank"
            >
              <div className="text-sm lg:text-base">How it works</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
