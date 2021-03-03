import React from "react";

import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

import useIsMobile from "../../hooks/useIsMobile";

import NavItemsJSON from "../../content/nav-items.json";

export default function Navbar() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <NavbarMobile navItems={NavItemsJSON} />
  ) : (
    <NavbarDesktop navItems={NavItemsJSON} />
  );
}
