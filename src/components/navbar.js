import React from "react";
import { Link } from "gatsby";

import NavItem from "./nav-item";

import Logo from "../images/logo.svg";
import NavItemsJSON from "../content/nav-items.json";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-end mx-auto container h-24 pb-4">
      <div className="flex flex-row justify-between items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <div className="flex flex-row gap-6 items-center">
          {NavItemsJSON.map((item) => (
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
  );
}
