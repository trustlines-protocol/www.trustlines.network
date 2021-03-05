import React from "react";

import IconButton from "./icon-button";
import ArrowRightIcon from "./icons/arrow-right";

import GetInTouchTopicsJSON from "../content/get-in-touch-topics.json";

// TODO: Source out
const CONTACT_MAIL = "";
const FORM_POST_URL = "";

export default function ContactForm(props) {
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
            defaultValue=""
          >
            <option label="Select Topic" value={""} disabled />
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
          placeholder="Message"
          required
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
