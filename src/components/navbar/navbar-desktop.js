import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item-desktop";

import Logo from "../../images/logo.svg";

export default function NavbarDesktop(props) {
  return (
    <div className="fixed w-full bg-white top-0">
      <div className="flex h-24 pb-4 flex-col justify-end mx-auto container">
        <div className="flex flex-row justify-between items-center">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="flex flex-row gap-6 items-center">
            {props.navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            <div
              className="bg-gray-100 px-8 py-4 cursor-pointer rounded-full hover:bg-gray-300"
              onClick={() => console.log("TODO")}
            >
              How it works
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
