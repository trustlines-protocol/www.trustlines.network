import React from "react";

export default function DownloadIcon(props) {
  const { size = 17 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 17 17`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M14.5 10.0769V12.7436C14.5 13.0972 14.3595 13.4363 14.1095 13.6864C13.8594 13.9364 13.5203 14.0769 13.1667 14.0769H3.83333C3.47971 14.0769 3.14057 13.9364 2.89052 13.6864C2.64048 13.4363 2.5 13.0972 2.5 12.7436V10.0769"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16663 6.74359L8.49996 10.0769L11.8333 6.74359"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.0769V2.0769"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
