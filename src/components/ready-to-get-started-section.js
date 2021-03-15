import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import ContactForm from "./contact-form";
import DownloadOverlay from "./download-overlay";
import IconButton from "./icon-button";
import DownloadIcon from "./icons/download";
import MailIcon from "./icons/mail";
import TwitterIcon from "./icons/twitter-outlined";
import { useIsDevice } from "../hooks/useIsDevice";

import SocialMediaLinks from "../content/social-media-links.json";
import useIsClient from "../hooks/useIsClient";

export default function ReadyToGetStartedSection() {
  const [, key] = useIsClient();
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const isMobile = useIsDevice("tablet");

  return (
    <div className="mb-24 sm:mb-32" id="container" key={key}>
      <div className="relative overflow-hidden md:py-12">
        {showDownloadOverlay && (
          <DownloadOverlay onClickClose={() => setShowDownloadOverlay(false)} />
        )}
        {isMobile ? (
          <StaticImage
            alt={"bg-mobile"}
            src="../content/get-started/images/bg-mobile.png"
            layout="fullWidth"
          />
        ) : (
          <StaticImage
            alt={"bg-desktop"}
            src="../content/get-started/images/bg-desktop.png"
            layout="fullWidth"
          />
        )}
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 flex-col">
          <div className="mb-6 text-center text-rich-black font-semibold text-2xl md:text-3xl max-w-xs md:max-w-full ">
            Ready to get started with Trustlines?
          </div>
          <div className="flex flex-col md:flex-row gap-4 pb-8 px-4 w-full md:w-auto">
            <IconButton
              Icon={<DownloadIcon size={16} className="stroke-4/3" />}
              label="Download the App"
              bgColor="coral-red"
              ringColor="coral-red"
              hoverBgColor="black"
              textColor="white"
              hoverTextColor="coral-red"
              className="w-full text-sm md:text-base font-semibold"
              onClick={() => setShowDownloadOverlay(true)}
            />
            <IconButton
              Icon={<MailIcon size={16} className="stroke-4/3" />}
              label="Get in Touch"
              bgColor="white"
              textColor="coral-red"
              hoverTextColor="black"
              ringColor="coral-red"
              hoverRingColor="black"
              className="text-sm md:text-base font-semibold"
              onClick={() => {
                setShowContactForm(!showContactForm);

                if (!showContactForm && isMobile) {
                  animateScroll.scrollMore(450);
                }
              }}
            />
            <IconButton
              Icon={<TwitterIcon size={16} className="stroke-4/3" />}
              label="Follow Us"
              bgColor="white"
              textColor="coral-red"
              hoverTextColor="black"
              ringColor="coral-red"
              hoverRingColor="black"
              className="text-sm md:text-base font-semibold"
              href={SocialMediaLinks.twitter}
            />
          </div>
        </div>
      </div>
      <div
        id="contact-form-container"
        className="container mx-auto flex flex-col justify-start px-4"
      >
        {showContactForm && <ContactForm />}
      </div>
    </div>
  );
}
