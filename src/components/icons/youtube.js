import React from "react";

export default function Youtube({ size = 19, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3386 5.15941C22.6792 5.51057 22.9212 5.94541 23.04 6.42C23.3572 8.1787 23.5112 9.96295 23.5 11.75C23.5063 13.5103 23.3523 15.2676 23.04 17C22.9212 17.4746 22.6792 17.9094 22.3386 18.2606C21.998 18.6118 21.5707 18.8668 21.1 19C19.38 19.46 12.5 19.46 12.5 19.46C12.5 19.46 5.61996 19.46 3.89996 19C3.43878 18.8738 3.01794 18.6308 2.67811 18.2945C2.33827 17.9581 2.09092 17.5398 1.95996 17.08C1.64273 15.3213 1.48874 13.537 1.49996 11.75C1.4912 9.97631 1.64518 8.20556 1.95996 6.46C2.07875 5.98541 2.32068 5.55057 2.66131 5.19941C3.00194 4.84824 3.42921 4.59318 3.89996 4.46C5.61996 4 12.5 4 12.5 4C12.5 4 19.38 4 21.1 4.42C21.5707 4.55318 21.998 4.80824 22.3386 5.15941ZM16 11.75L10.25 15.02V8.47998L16 11.75Z"
      />
    </svg>
  );
}