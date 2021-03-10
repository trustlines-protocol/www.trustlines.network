import React from "react";

export default function Mail({ size = 17, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M3.16671 2.70508H13.8334C14.5667 2.70508 15.1667 3.30508 15.1667 4.03841V12.0384C15.1667 12.7717 14.5667 13.3717 13.8334 13.3717H3.16671C2.43337 13.3717 1.83337 12.7717 1.83337 12.0384V4.03841C1.83337 3.30508 2.43337 2.70508 3.16671 2.70508Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1667 4.03857L8.50004 8.70524L1.83337 4.03857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
