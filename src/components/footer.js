import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { animateScroll } from "react-scroll";

import SocialLinksRow from "./social-links-row";
import ArrowUpIcon from "./icons/arrow-up";

import FooterBoxes from "../content/footer/footer-boxes.json";

export default function Footer() {
  return (
    <div className="bg-rich-black">
      <div className="mx-auto container">
        <div className="flex flex-col md:flex-row gap-8 justify-between pt-8
        md:pt-16 pb-7 md:pb-14 px-4 md:border-b border-rich-black-lighter">
          {FooterBoxes.map((footerBox) => (
            <FooterBox key={footerBox.title} {...footerBox} />
          ))}
          <div className="flex flex-col justify-end items-center pb-4">
            <div
              className="w-11 h-11 rounded-full bg-rich-black-lighter flex flex-col justify-center items-center cursor-pointer"
              onClick={() => animateScroll.scrollToTop()}
            >
              <ArrowUpIcon
                size={24}
                className="stroke-current text-white stroke-4/3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:py-28 gap-2  px-4">
          <div className="flex-1">
            <div className="text-rich-black-lightest font-semibold pb-2 text-center md:text-left">
              Trustlines is aimed at{" "}
              <a
                className="underline cursor-pointer hover:text-coral-red"
                href=""
                target="_blank"
              >
                SDG target 8.10
              </a>
            </div>
            <div className="text-rich-black-lightest max-w-xl text-center md:text-left">
              Strengthen the capacity of domestic financial institutions to
              encourage and expand access to banking, insurance and financial
              services for all.
            </div>
          </div>
          <StaticImage
            width={400}
            objectFit="contain"
            src="../content/footer/images/sdg-logo.png"
            alt="SDG logo"
            className="grayscale-filter"
          />
        </div>
        <div className="text-rich-black-lighter pt-4 md:pt-0 pb-20 text-center">
          Copyright © 2021, Trustlines Foundation. Content published under CC BY
          4.0 License.
        </div>
      </div>
    </div>
  );
}

function FooterBox({ title, links, withSocialMediaLinks }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white md:text-base font-semibold mb-2 text-center md:text-left">
        {title}
      </div>
      {links.map(({ label, to }) => (
        <div
          key={label}
          className="md:text-base text-white hover:text-coral-red cursor-pointer text-center md:text-left"
          onClick={() => window.open(to, "_blank")}
        >
          {label}
        </div>
      ))}
      {withSocialMediaLinks && (
        <SocialLinksRow
          iconColor="white"
          iconSize={24}
          className="justify-center md:justify-start pt-4 md:pt-0"
        />
      )}
    </div>
  );
}
