import React from "react";
import { Helmet } from "react-helmet";
import ContentSlider from "../components/content-slider";
import DownloadSection from "../components/download-section";
import UseCasesSection from "../components/use-cases-section";
import GetInTouchSection from "../components/get-in-touch-section";
import TargetGroupSection from "../components/target-groups-section";
import CommunitiesMapSection from "../components/communities-map-landing";
import GetStartedSection from "../components/ready-to-get-started-section";
import ContentHero from "../components/content-hero/hero"

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="landing page meta description" />
      </Helmet>
      <ContentHero />
      <ContentSlider />
      <DownloadSection />
      <UseCasesSection />
      <GetInTouchSection />
      <TargetGroupSection />
      <CommunitiesMapSection />
      <GetStartedSection />
    </div>
  );
}
