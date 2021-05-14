import React from "react";

import CustomHelmet from "../components/custom-helmet";
import ContentSlider from "../components/content-slider";
import DownloadSection from "../components/download-section";
import UseCasesSection from "../components/use-cases-section";
import GetInTouchSection from "../components/get-in-touch-section";
import TargetGroupSection from "../components/target-groups-section";
import CommunitiesMapSection from "../components/communities-map-landing";
import GetStartedSection from "../components/ready-to-get-started-section";
import ContentHero from "../components/content-hero/hero";
import NewsletterSignup from "../components/newsletter-signup";

export default function Landing() {
  return (
    <div>
      <CustomHelmet title="Home | Trustlines Network - Building a better financial system" />
      <ContentHero />
      <ContentSlider />
      <DownloadSection />
      <UseCasesSection />
      <GetInTouchSection />
      <TargetGroupSection />
      <CommunitiesMapSection />
      <GetStartedSection />
      <NewsletterSignup />
    </div>
  );
}
