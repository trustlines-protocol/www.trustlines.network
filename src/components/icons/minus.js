import React from "react";

export default function Minus({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 12H19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}