import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="About page meta description" />
      </Helmet>
      About page
    </div>
  );
}
