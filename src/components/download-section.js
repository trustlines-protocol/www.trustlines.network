import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import GlowButton from "./glow-button";
import GlowButtonCircle from "./glow-button-circle";
import CloseButton from "./close-button";
import DownloadIcon from "./icons/download";
import AppleIcon from "./icons/apple";
import PlaystoreIcon from "./icons/playstore";

import GradientCircle from "../images/gradient-circle.svg";

export default function DownloadSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "download-section/phone.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  const phoneImage = getImage(data.file);

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="relative rounded-2xl shadow-card-blue flex flex-col-reverse md:flex-row overflow-hidden">
        {showOverlay && (
          <DownloadSectionOverlay onClickClose={() => setShowOverlay(false)} />
        )}
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <GlowButtonCircle
            color="app-blue"
            label="Download For Free"
            icon={
              <DownloadIcon className="stroke-current text-white stroke-4/3" />
            }
            onClick={() => setShowOverlay(true)}
          />
        </div>
        <div className="flex-1 flex flex-col p-4 md:py-8 md:px-10 justify-between">
          <div className="-mt-28 mb-4 md:my-0">
            <div className="text-xs md:text-base text-rich-black-lightest">
              Trustlines App
            </div>
            <div className="text-xs md:text-base font-semibold text-rich-black-lightest">
              by Auxiliary GmbH
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-5xl">Get started with</div>
            <div className="text-2xl lg:text-5xl font-bold">People Powered</div>
            <div className="text-2xl lg:text-5xl font-bold">Money!</div>
            <div className="mt-6 md:mt-8">
              <div className="text-xs md:text-base text-rich-black">
                Economic Inclusion for all.
              </div>
              <div className="text-xs md:text-base text-rich-black">
                Powered by trustlines.
              </div>
            </div>
          </div>
          <div className="block mt-6 md:flex md:mt-0">
            <GlowButton color="app-blue" label="Go to Trustlines App website" />
          </div>
        </div>
        <div className="flex-1 -z-1">
          <div className="h-96 md:h-auto relative flex flex-row justify-end">
            <img
              className="h-96 -mt-52 md:mt-0 md:object-cover md:h-auto md:w-full"
              src={GradientCircle}
            />
            <GatsbyImage
              className="absolute top-0 left-0 h-full md:-left-48"
              image={phoneImage}
              alt="Trustlines app image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadSectionOverlay(props) {
  return (
    <div className="absolute flex flex-col justify-between top-0 left-0 right-0 bottom-0 bg-white z-40 p-11">
      <div className="flex flex-row justify-end">
        <CloseButton
          className="cursor-pointer hover:opacity-50"
          onClick={props.onClickClose}
        />
      </div>
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <DownloadButton
            icon={<AppleIcon />}
            label="App Store"
            color="app-blue"
            onClick={() => console.log("TODO")}
          />
          <DownloadButton
            icon={<PlaystoreIcon />}
            label="Play Store"
            color="majorelle-blue"
            onClick={() => console.log("TODO")}
          />
        </div>
        <div
          className="underline text-lg text-gray-400 hover:text-majorelle-blue cursor-pointer"
          onClick={() => console.log("TODO")}
        >
          or download the .APK
        </div>
      </div>
      <div className="text-white">_</div>
    </div>
  );
}

function DownloadButton(props) {
  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer hover:opacity-50"
      onClick={props.onClick}
    >
      <div
        className={`flex flex-row items-center justify-center w-14 h-14 rounded-full gradient-bg`}
      >
        {props.icon}
      </div>
      <div className={`text-lg text-${props.color}`}>{props.label}</div>
      <DownloadIcon
        size={24}
        className={`stroke-current text-${props.color} stroke-4/3`}
      />
    </div>
  );
}
