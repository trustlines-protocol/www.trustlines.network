import React from "react";

import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

import useIsDevice from "../../hooks/useIsDevice";

import NavItemsJSON from "../../content/nav-items.json";

export default function Navbar() {
  const isMobile = useIsDevice("tablet");

  return isMobile ? (
    <NavbarMobile navItems={NavItemsJSON} />
  ) : (
    <NavbarDesktop navItems={NavItemsJSON} />
  );
}
