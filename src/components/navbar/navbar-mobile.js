import React, { useState } from "react";
import { Link } from "gatsby";

import NavItemMobile from "./nav-item-mobile";
import CloseButton from "../close-button";
import SocialLinksRow from "../social-links-row";

import Logo from "../../images/logo.svg";
import BurgerMenu from "../../images/burger-menu.svg";

export default function NavbarMobile({ navItems = [] }) {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = useState(false);

  return isFullScreenNavOpen ? (
    <div className="fixed top-0 w-full h-full z-50 p-4 bg-white overflow-y-scroll">
      <div className="flex flex-col">
        <div className="flex flex-row justify-end">
          <CloseButton onClick={() => setIsFullScreenNavOpen(false)} />
        </div>
        {navItems.map((navItem, i) => (
          <div
            key={`${navItem.label}-i`}
            onClick={() => setIsFullScreenNavOpen(false)}
          >
            <NavItemMobile {...navItem} />
          </div>
        ))}
        <div className="flex mb-20">
          <Link
            className="bg-gray-100 px-8 py-4 rounded-full font-semibold text-2xl"
            to={
              "https://docs.trustlines.network/docs/resources/wp_content/how_trustlines_works.html"
            }
            target="_blank"
          >
            How it works
          </Link>
        </div>
        <SocialLinksRow iconSize={24} iconColor="rich-black" />
        <Link className="font-semibold text-base mb-4" to="/imprint">
          Legal Imprint
        </Link>
        <Link className="font-semibold text-base mb-4" to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 z-50 w-full bg-white p-4 flex flex-row justify-between md:hidden">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div onClick={() => setIsFullScreenNavOpen(true)}>
        <img src={BurgerMenu} />
      </div>
    </div>
  );
}
