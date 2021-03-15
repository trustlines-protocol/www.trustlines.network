import React, { useState } from "react";

import IconButton from "./icon-button";
import ArrowRightIcon from "./icons/arrow-right";
import ChevronDownIcon from "./icons/chevron-down";

import GetInTouchTopicsJSON from "../content/get-in-touch-topics.json";
import CloseButton from "./close-button";

export default function ContactForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errors, setErrors] = useState(false);
  const CONTACT_MAIL = process.env.GATSBY_CONTACT_MAIL;
  const FORM_POST_URL = process.env.GATSBY_FORM_POST_URL;

  const submitForm = (e) => {
    e.preventDefault();
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    setErrors(false);

    const data = new FormData(e.target);

    const jsonData = Object.fromEntries(data.entries());

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: JSON.stringify(jsonData),
      redirect: "follow",
    };

    fetch(FORM_POST_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          document.getElementById("contactUs").reset();
          setShowSuccessMessage(true);
        } else {
          setErrors(result.errors);
          setShowErrorMessage(true);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
      });
  };

  return (
    <form
      id={"contactUs"}
      name={"contactUs"}
      className={`flex flex-col space-y-4 mt-4 ${props.hidden ? "hidden" : ""}`}
      action={FORM_POST_URL}
      method="POST"
      onSubmit={submitForm}
    >
      {showErrorMessage && (
        <div
          className={"flex justify-between rounded p-2 bg-red-500 text-white"}
        >
          <div>
            There was a problem submitting your message:
            {Object.values(errors).map((error, i) => {
              return <div key={"error" + i}>{error}</div>;
            })}
          </div>
          <CloseButton
            className="cursor-pointer hover:opacity-50"
            onClick={() => {
              setShowErrorMessage(false);
            }}
          />
        </div>
      )}

      {showSuccessMessage && (
        <div
          className={
            "flex justify-between rounded p-2 bg-majorelle-blue text-white"
          }
        >
          Your message was submitted successfully. We'll get back to you ASAP.
          <CloseButton
            className="cursor-pointer hover:opacity-50"
            onClick={() => {
              setShowSuccessMessage(false);
            }}
          />
        </div>
      )}

      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Input placeholder="Name" name="name" required />
        <Input placeholder="Email" name="email" required />
        <div
          className={`
        flex-1 flex flex-row items-center py-4 md:py-0 px-6 
        bg-gray-300 rounded-full overflow-hidden overflow-ellipsis
        `}
        >
          <select
            name="topic"
            className="flex-1 bg-gray-300 text-sm font-semibold w-full focus:outline-none appearance-none"
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
          <ChevronDownIcon />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center">
        <textarea
          name="message"
          className="w-full md:w-auto flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
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
          className="w-full md:w-28"
          type="submit"
        />
      </div>
      <div className="text-gray-500 text-center md:text-left">
        Or simply{" "}
        <a className="underline" href={`mailto:${CONTACT_MAIL}`}>
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
      className="flex-1 px-6 py-4 bg-gray-300 rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
      {...props}
    />
  );
}
