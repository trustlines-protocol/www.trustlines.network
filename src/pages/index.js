import React from "react";
import { Helmet } from "react-helmet";
import ContentSlider from "../components/content-slider";
import DownloadSection from "../components/download-section";
import UseCasesSection from "../components/use-cases-section";
import GetInTouchSection from "../components/get-in-touch-section";

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="landing page meta description" />
      </Helmet>
      <div>Landing page</div>
      <ContentSlider />
      <DownloadSection />
      <UseCasesSection />
      <GetInTouchSection />
    </div>
  );
}
