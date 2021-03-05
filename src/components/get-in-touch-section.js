import React, { useState } from "react";

import IconButton from "./icon-button";
import ArrowDownIcon from "./icons/arrow-down";
import ArrowUpIcon from "./icons/arrow-up";
import ArrowRightIcon from "./icons/arrow-right";

import useIsMobile from "../hooks/useIsMobile";

import GetInTouchTopicsJSON from "../content/get-in-touch-topics.json";

// TODO: Source out
const CONTACT_MAIL = "";
const FORM_POST_URL = "";

export default function GetInTouchSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="bg-rich-black-lighter md:h-96 md:bg-gray-200 flex flex-col justify-center items-center">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex flex-row justify-between items-center">
          <div>
            <div className="font-semibold text-2xl md:text-3xl mb-2 text-white md:text-rich-black">
              Want to bring Trustlines to your community?
            </div>
            <div className="font-normal text-sm md:text-xl text-white md:text-rich-black">
              Let us know, and we&apos;ll help you get started!
            </div>
          </div>
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
            className={isMobile ? "hidden" : "w-64"}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <GetInTouchForm hidden={isMobile ? false : !isExpanded} />
      </div>
    </div>
  );
}

function GetInTouchForm(props) {
  return (
    <form
      className={`flex flex-col gap-4 mt-4 ${props.hidden ? "hidden" : ""}`}
      action={FORM_POST_URL}
      method="POST"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <Input placeholder="Name" required />
        <Input placeholder="Email" required />
        <div className="flex-1 flex py-4 md:py-0 px-6 bg-gray-300 rounded-full overflow-hidden overflow-ellipsis">
          <select
            className="flex-1 bg-gray-300 text-sm font-semibold w-full"
            required
          >
            <option label="Select Topic" disabled selected />
            {GetInTouchTopicsJSON.map((topic) => (
              <option
                key={topic.label}
                label={topic.label}
                value={topic.value}
              />
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <textarea
          className="w-full md:w-auto flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold"
          placeholder="Message (optional)"
          rows={1}
        />
        <IconButton
          Icon={<ArrowRightIcon size={16} className="stroke-2" />}
          textColor="white"
          bgColor="majorelle-blue"
          label="Send"
          iconPosition="right"
          className="w-full md:w-28 hover:opacity-50"
          type="submit"
        />
      </div>
      <div className="text-gray-500 text-center md:text-left">
        Or simply{" "}
        <a
          className="underline hover:text-coral-red"
          href={`mailto:${CONTACT_MAIL}`}
        >
          send us an email
        </a>
        .
      </div>
    </form>
  );
}

function Input(props) {
  return (
    <input
      className="flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold"
      {...props}
    />
  );
}
