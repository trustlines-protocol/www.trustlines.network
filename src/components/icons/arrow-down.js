import React from "react";

export default function ArrowDown(props) {
  const { size = 24, className } = props || {};
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 5V19" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 12L12 19L5 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
