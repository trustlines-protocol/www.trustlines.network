import React from "react";
import { Helmet } from "react-helmet";

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="landing page meta description" />
      </Helmet>
      Landing page
    </div>
  );
}
