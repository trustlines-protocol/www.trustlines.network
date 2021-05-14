import React from "react";

import CustomHelmet from "../components/custom-helmet";
import JoinSection from "../components/communities/join";
import GrowSection from "../components/communities/grow";
import MapSection from "../components/communities/map";
import SliderSection from "../components/communities/slider";
import GetInvolvedSection from "../components/communities/get-involved";
import GrantSection from "../components/communities/grant";
import ContactSection from "../components/communities/contact";
import NewsletterSignup from "../components/newsletter-signup";

export default function Communities() {
  return (
    <div>
      <CustomHelmet title="Communities | Trustlines Network - Building a better financial system" />
      <JoinSection />
      <GrowSection />
      <MapSection />
      <SliderSection />
      <GetInvolvedSection />
      <GrantSection />
      <ContactSection />
      <NewsletterSignup />
    </div>
  );
}
