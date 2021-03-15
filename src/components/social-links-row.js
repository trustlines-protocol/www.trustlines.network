import React from "react";
import { Link } from "gatsby";

import { COLOR_NAME_CLASSES } from "../constants";
import MessageBoxIcon from "./icons/message-box";
import TwitterIcon from "./icons/twitter";
import YoutubeIcon from "./icons/youtube";

import SocialMediaLinks from "../content/social-media-links.json";

export default function SocialLinksRow({
  iconColor,
  iconSize = 24,
  className = "",
}) {
  const { textColorClassName } = COLOR_NAME_CLASSES[iconColor] || {};

  return (
    <div className={`flex flex-row space-x-4 mb-4 items-center ${className}`}>
      <a
        href={SocialMediaLinks.twitter}
        target="_blank"
        rel="noreferrer"
        aria-label="Link to the twitter page of the Trustlines Network"
      >
        <TwitterIcon
          size={iconSize}
          className={`fill-current ${textColorClassName} hover:text-coral-red`}
        />
      </a>
      <a
        href={SocialMediaLinks.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="Link to the youtube channel of the Trustlines Network"
      >
        <YoutubeIcon
          size={iconSize}
          className={`fill-current ${textColorClassName} hover:text-coral-red`}
        />
      </a>
      <a
        href={SocialMediaLinks.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Link to the telegram channel of the Trustlines Network"
      >
        <MessageBoxIcon
          size={iconSize}
          className={`fill-current ${textColorClassName} hover:text-coral-red`}
        />
      </a>
    </div>
  );
}
