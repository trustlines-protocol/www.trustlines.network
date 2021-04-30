import React from "react";

import CustomHelmet from "../components/custom-helmet";
import ExplorerSection from "../components/explorer/explorer-section";
import ReadyToGetStartedSection from "../components/ready-to-get-started-section";

export default function About() {
  return (
    <div>
      <CustomHelmet title="Explorer | Trustlines Network - Building a better financial system" />
      <ExplorerSection />
      <ReadyToGetStartedSection />
    </div>
  );
}
