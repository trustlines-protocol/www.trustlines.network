import React from "react";

export default function Plus({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size + 1}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5.38428V19.3843"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 12.3843H19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
