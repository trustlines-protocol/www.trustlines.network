import React from "react";

import Navbar from "./navbar/index";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}