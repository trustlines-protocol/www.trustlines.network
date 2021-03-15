import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import DownloadOverlay from "./download-overlay";
import IconButton from "./icon-button";
import DownloadIcon from "./icons/download";

import Circle from "./icons/circle";
import GradientCircle from "../content/download/images/gradient-circle.svg";

export default function DownloadSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="container mx-auto px-4 mb-24 sm:mb-32">
      <div className="relative rounded-3xl shadow-card-blue flex flex-col-reverse md:flex-row overflow-hidden">
        {showOverlay && (
          <DownloadOverlay onClickClose={() => setShowOverlay(false)} />
        )}
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 mb-24 md:mb-0">
          <IconButton
            textColor={"white"}
            bgColor={"rich-black"}
            ringColor={"transparent"}
            hoverBgColor={"app-blue"}
            label="Download for free"
            className={
              "w-28 h-28 flex flex-col items-center justify-center py-4 px-3 gap-0 text-center "
            }
            whitespaceClass={"whitespace-normal"}
            isCircle={true}
            glowColor={"app-blue"}
            Icon={
              <DownloadIcon className="stroke-current text-white stroke-4/3" />
            }
            onClick={() => setShowOverlay(true)}
          />
        </div>
        <div className="flex-1 flex flex-col p-4 md:py-8 md:px-10 justify-between">
          <div className="-mt-28 mb-4 md:my-0">
            <div className="text-xs md:text-base font-semibold text-rich-black-lightest">
              Trustlines App
            </div>
            <div className="text-xs md:text-base  text-rich-black-lightest">
              by Auxiliary GmbH
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl">Get started with</div>
            <div className="text-2xl lg:text-4xl font-semibold">
              People Powered
            </div>
            <div className="text-2xl lg:text-4xl font-semibold">Money!</div>
            <div className="mt-6 md:mt-8">
              <div className="text-xs md:text-base text-rich-black">
                Economic Inclusion for all.
              </div>
              <div className="text-xs md:text-base text-rich-black">
                Powered by Trustlines.
              </div>
            </div>
          </div>
          <div className="block mt-6 md:flex md:mt-0">
            <IconButton
              textColor={"white"}
              bgColor={"rich-black"}
              ringColor={"transparent"}
              hoverBgColor={"app-blue"}
              label="Learn more"
              glowColor={"app-blue"}
              Icon={
                <Circle
                  size={16}
                  className={"bg-app-blue group-hover:bg-white"}
                />
              }
              href="https://trustlines.app"
            />
          </div>
        </div>
        <div className="flex-1 -z-1">
          <div className="h-96 md:h-auto relative flex flex-row justify-end">
            <img
              className="h-96 -mt-52 md:mt-0 md:object-cover md:h-auto md:w-full"
              src={GradientCircle}
              alt="Gradient circle background graphic"
            />
            <div className="absolute top-0 left-0 h-full md:-left-48">
              <StaticImage
                src="../content/download/images/phone.png"
                layout="constrained"
                alt="Trustlines app image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
