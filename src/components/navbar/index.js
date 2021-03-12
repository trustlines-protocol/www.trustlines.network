import React from "react";

import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

import NavItemsJSON from "../../content/nav-items.json";

export default function Navbar() {
  return (
    <>
      <NavbarMobile navItems={NavItemsJSON} />
      <NavbarDesktop navItems={NavItemsJSON} />
    </>
  );
}
