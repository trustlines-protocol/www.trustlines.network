import React from "react";
import { Link } from "gatsby";

import MessageBoxIcon from "./icons/message-box";
import TwitterIcon from "./icons/twitter";
import YoutubeIcon from "./icons/youtube";

import SocialMediaLinks from "../content/social-media-links.json";

export default function SocialLinksRow({
  iconColor,
  iconSize = 24,
  className = "",
}) {
  return (
    <div className={`flex flex-row gap-4 mb-4 items-center ${className}`}>
      <Link to={SocialMediaLinks.twitter} target="_blank">
        <TwitterIcon
          size={iconSize}
          className={`fill-current text-${iconColor} hover:text-coral-red`}
        />
      </Link>
      <Link to={SocialMediaLinks.youtube} target="_blank">
        <YoutubeIcon
          size={iconSize}
          className={`fill-current text-${iconColor} hover:text-coral-red`}
        />
      </Link>
      <Link to={SocialMediaLinks.telegram} target="_blank">
        <MessageBoxIcon
          size={iconSize}
          className={`fill-current text-${iconColor} hover:text-coral-red`}
        />
      </Link>
    </div>
  );
}
