import React from "react";

export default function ArrowRight(props) {
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
      <path d="M5 12L19 12" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 5L19 12L12 19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
