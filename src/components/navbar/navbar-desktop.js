import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item-desktop";

import Logo from "../../images/logo.svg";

export default function NavbarDesktop({ navItems = [] }) {
  return (
    <div className={`sticky top-0 w-full bg-white z-50 hidden md:block`}>
      <div className="flex h-24 pb-4 flex-col justify-end mx-auto container">
        <div className="flex flex-row justify-between items-center px-2">
          <Link to="/">
            <img src={Logo} alt="Trustlines network logo" />
          </Link>
          <div className="flex flex-row space-x-6 items-center">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            <a
              className="bg-gray-100 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-300 whitespace-nowrap"
              href={
                "https://docs.trustlines.network/resources/wp_content/how_trustlines_works/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-sm lg:text-base">How it works</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
