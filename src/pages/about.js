import React from "react";

import CustomHelmet from "../components/custom-helmet";
import AboutHero from "../components/about/hero";
import AboutIntro from "../components/about/intro";
import AboutVisionMission from "../components/about/vision-mission";
import AboutBoxes from "../components/about/boxes";
import AboutGlobalNetwork from "../components/about/global-network";
import GetStartedSection from "../components/ready-to-get-started-section";

export default function About() {
  return (
    <div>
      <CustomHelmet>
        <title>About - Trustlines network</title>
        <meta name="description" content="Financial inclusion for all people" />
      </CustomHelmet>
      <AboutHero />
      <AboutIntro />
      <AboutVisionMission />
      <AboutBoxes />
      <AboutGlobalNetwork />
      <GetStartedSection />
    </div>
  );
}
