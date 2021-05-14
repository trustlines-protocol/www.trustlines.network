import React from "react";
import { Link } from "gatsby";

import X from "./icons/x";
import Mail from "./icons/mail";
import Check from "./icons/check";

export default function NewsletterSignup() {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [didSent, setDidSent] = React.useState(false);
  const [hideNewsletterSignup, setHideNewsletterSignup] = React.useState(
    localStorage.getItem("hideNewsletterSignup") ||
      sessionStorage.getItem("hideNewsletterSignup") ||
      "idle"
  );

  const handleClickSend = async () => {
    try {
      const form = document.getElementById("mc-embedded-subscribe-form");
      await fetch(form.action, {
        mode: "no-cors",
        method: "POST",
        body: new FormData(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDidSent(true);
      localStorage.setItem("hideNewsletterSignup", true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickClose = () => {
    setHideNewsletterSignup(true);
    sessionStorage.setItem("hideNewsletterSignup", true);
  };

  if (hideNewsletterSignup !== "idle") {
    return null;
  }

  return (
    <div className="flex flex-row fixed bottom-0 justify-center w-full sm:mb-4 z-50 sm:h-40 sm:mx-4">
      <div className="flex flex-row rounded-lg bg-white newsletter-drop-shadow overflow-hidden">
        <button
          className="flex-col justify-center bg-white p-3 cursor-pointer hidden sm:flex border-r border-gray-100"
          onClick={handleClickClose}
        >
          <X />
        </button>
        <div className="max-w-2xl p-8">
          <div className="sm:hidden flex flex-row justify-between items-center">
            {didSent ? (
              <div> 🎉</div>
            ) : (
              <Mail size={16} className="stroke-current text-black" />
            )}
            <button
              className="cursor-pointer sm:hidden"
              onClick={handleClickClose}
            >
              <X />
            </button>
          </div>
          {didSent ? (
            <div className="sm:text-xl font-semibold">
              <div className="hidden sm:block">🎉</div>
              We sent you a confirmation email.
              <br className="hidden sm:block" />
              Your subscription will begin once you confirm it. Enjoy!
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex sm:text-xl font-semibold text-black">
                  Be the first
                  <br className="hidden sm:block" /> to receive updates
                </div>
                <MailInput
                  inputValue={emailAddress}
                  onChangeInput={setEmailAddress}
                  onClickSend={handleClickSend}
                />
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-3">
                By submitting your email address you acknowledge that your
                information will be transferred to Mailchimp for processing and
                agree to our{" "}
                <Link to="/privacy-policy" className="underline">
                  privacy policy
                </Link>
                .
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MailInput({ inputValue = "", onChangeInput, onClickSend }) {
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  const handleClickSend = (event) => {
    event.preventDefault();

    const isInputValid = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/.test(
      inputValue
    );
    setIsEmailValid(isInputValid);

    if (isInputValid) {
      onClickSend();
    }
  };

  return (
    <form
      className="flex flex-row rounded-full bg-gray-300 items-center h-8 sm:h-11 pl-3 relative"
      action="https://foundation.us20.list-manage.com/subscribe/post-json?c=?"
      id="mc-embedded-subscribe-form"
    >
      <input type="hidden" name="u" value="ad97861a3786f82a87c0c7417" />
      <input type="hidden" name="id" value="7125095980" />
      {!isEmailValid && (
        <div className="absolute top-0 left-1/2 -ml-16 -mt-2 text-xs bg-coral-red text-white px-2">
          Invalid address
        </div>
      )}
      <Mail size={24} className="stroke-current text-black hidden sm:block" />
      <input
        className="bg-transparent focus:outline-none sm:ml-2 sm:w-64 w-full"
        placeholder="Email address"
        value={inputValue}
        onChange={(event) => onChangeInput(event.target.value)}
        name="EMAIL"
      />
      <button
        className="rounded-full bg-black w-8 sm:w-11 h-8 sm:h-11 flex flex-col items-center justify-center focus:outline-none"
        onClick={handleClickSend}
      >
        <Check size={24} className="stroke-current text-white stroke-2" />
      </button>
    </form>
  );
}
