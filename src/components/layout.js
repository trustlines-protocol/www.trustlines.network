import React from "react";

import Navbar from "./navbar/index";

export default function Layout({ children }) {
  return (
    <div className="pt-24">
      <Navbar />
      {children}
    </div>
  );
}
