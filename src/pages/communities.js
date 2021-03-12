import React from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Communities page</title>
        <meta name="description" content="Communities page meta description" />
      </Helmet>
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
