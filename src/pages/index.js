import React from "react";
import { Helmet } from "react-helmet";

import DownloadSection from "../components/download-section";

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="landing page meta description" />
      </Helmet>
      <div>Landing page</div>
      <DownloadSection />
    </div>
  );
}
