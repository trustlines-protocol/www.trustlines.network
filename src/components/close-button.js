import React from "react";

import CloseButtonIcon from "../images/close-button.svg";

export default function CloseButton(props) {
  return (
    <div {...props}>
      <img src={CloseButtonIcon} />
    </div>
  );
}
