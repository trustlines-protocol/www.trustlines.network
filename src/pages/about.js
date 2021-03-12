import React from "react";
import { Helmet } from "react-helmet";

import AboutHero from "../components/about/hero";
import AboutIntro from "../components/about/intro";
import AboutVisionMission from "../components/about/vision-mission";
import AboutBoxes from "../components/about/boxes";
import AboutGlobalNetwork from "../components/about/global-network";
import GetStartedSection from "../components/ready-to-get-started-section";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About - Trustlines network</title>
        <meta name="description" content="Financial inclusion for all people" />
      </Helmet>
      <AboutHero />
      <AboutIntro />
      <AboutVisionMission />
      <AboutBoxes />
      <AboutGlobalNetwork />
      <GetStartedSection />
    </div>
  );
}
