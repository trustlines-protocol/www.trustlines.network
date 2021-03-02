import React, { useState } from "react";
import { Link } from "gatsby";

import NavItemMobile from "./nav-item-mobile";
import CloseButton from "../close-button";

import Logo from "../../images/logo.svg";
import BurgerMenu from "../../images/burger-menu.svg";
import Twitter from "../../images/twitter.svg";
import YouTube from "../../images/youtube.svg";
import MessageBox from "../../images/message-box.svg";

import SocialMediaLinks from "../../content/social-media-links.json";

export default function NavbarMobile(props) {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = useState(false);

  return isFullScreenNavOpen ? (
    <div className="fixed w-full h-full top-0 z-10 p-4 bg-white overflow-y-scroll">
      <div className="flex flex-col">
        <div className="flex flex-row justify-end">
          <CloseButton onClick={() => setIsFullScreenNavOpen(false)} />
        </div>
        <Link
          className="font-semibold text-2xl mb-4"
          to="/"
          activeClassName="text-majorelle-blue"
          onClick={() => setIsFullScreenNavOpen(false)}
        >
          Home
        </Link>
        {props.navItems.map((navItem, i) => (
          <div
            key={`${navItem.label}-i`}
            onClick={() => setIsFullScreenNavOpen(false)}
          >
            <NavItemMobile {...navItem} />
          </div>
        ))}
        <div className="flex mb-20">
          <div
            className="bg-gray-100 px-8 py-4 rounded-full font-semibold text-2xl"
            onClick={() => console.log("TODO")}
          >
            How it works
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-4 items-center">
          <Link to={SocialMediaLinks.twitter}>
            <img src={Twitter} />
          </Link>
          <Link to={SocialMediaLinks.youtube}>
            <img src={YouTube} />
          </Link>
          <Link to={SocialMediaLinks.telegram}>
            <img src={MessageBox} />
          </Link>
        </div>
        <Link
          className="font-semibold text-base mb-4"
          onClick={() => setIsFullScreenNavOpen(false)}
        >
          Legal Imprint & Privacy Policy
        </Link>
      </div>
    </div>
  ) : (
    <div className="fixed w-full bg-white top-0 p-4 flex flex-row justify-between">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div onClick={() => setIsFullScreenNavOpen(true)}>
        <img src={BurgerMenu} />
      </div>
    </div>
  );
}
