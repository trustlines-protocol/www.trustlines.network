import React from "react";

import CustomHelmet from "../components/custom-helmet";
import JoinSection from "../components/communities/join";
import GrowSection from "../components/communities/grow";
import MapSection from "../components/communities/map";
import SliderSection from "../components/communities/slider";
import GetInvolvedSection from "../components/communities/get-involved";
import GrantSection from "../components/communities/grant";
import ContactSection from "../components/communities/contact";

export default function Communities() {
  return (
    <div>
      <CustomHelmet>
        <title>Communities - Trustlines network</title>
        <meta
          name="description"
          content="Strengthen the circular economy and encourage sustainable trade loops in your community"
        />
      </CustomHelmet>
      <JoinSection />
      <GrowSection />
      <MapSection />
      <SliderSection />
      <GetInvolvedSection />
      <GrantSection />
      <ContactSection />
    </div>
  );
}
