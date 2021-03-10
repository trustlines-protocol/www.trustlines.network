import React from "react";

export default function Twitter({ size = 19, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M15.8333 2.03844C15.1949 2.48876 14.488 2.83318 13.74 3.05844C13.3385 2.59678 12.8048 2.26957 12.2113 2.12106C11.6178 1.97255 10.993 2.00991 10.4213 2.22808C9.84974 2.44625 9.35892 2.83471 9.01528 3.34092C8.67164 3.84713 8.49176 4.44667 8.49996 5.05844V5.72511C7.32838 5.75549 6.16748 5.49565 5.12063 4.96874C4.07379 4.44183 3.1735 3.6642 2.49996 2.70511C2.49996 2.70511 -0.166707 8.70511 5.83329 11.3718C4.46031 12.3038 2.82473 12.7711 1.16663 12.7051C7.16663 16.0384 14.5 12.7051 14.5 5.03844C14.4993 4.85274 14.4815 4.6675 14.4466 4.48511C15.127 3.8141 15.6072 2.96692 15.8333 2.03844Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.0385742)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
