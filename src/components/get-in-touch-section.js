import React, { useState } from "react";

import IconButton from "./icon-button";
import ArrowDownIcon from "./icons/arrow-down";
import ArrowUpIcon from "./icons/arrow-up";
import ContactForm from "./contact-form";

import { useIsDevice } from "../hooks/useIsDevice";
import useIsClient from "../hooks/useIsClient";

export default function GetInTouchSection() {
  const [, key] = useIsClient();
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsDevice("tablet");

  return (
    <div
      key={key}
      className="bg-rich-black-lighter md:h-96 md:bg-gray-200 flex flex-col justify-center items-center mb-24 sm:mb-32"
    >
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <div className="font-semibold text-2xl md:text-3xl mb-2 text-white md:text-rich-black">
              Want to bring Trustlines to your community?
            </div>
            <div className="font-normal text-sm md:text-xl text-white md:text-rich-black">
              Let us know, and we&apos;ll help you get started!
            </div>
          </div>
          <div className="hidden md:flex">
            <IconButton
              label="Get in touch"
              textColor={isExpanded ? "majorelle-blue" : "white"}
              hoverTextColor={isExpanded ? "white" : "majorelle-blue"}
              bgColor={isExpanded ? "transparent" : "majorelle-blue"}
              ringColor={"majorelle-blue"}
              hoverBgColor={isExpanded ? "majorelle-blue" : "transparent"}
              hoverRingColor={isExpanded ? "transparent" : "majorelle-blue"}
              Icon={
                isExpanded ? (
                  <ArrowUpIcon size={16} className="stroke-2" />
                ) : (
                  <ArrowDownIcon size={16} className="stroke-2" />
                )
              }
              iconPosition="right"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
        <ContactForm hidden={isMobile ? false : !isExpanded} />
      </div>
    </div>
  );
}
