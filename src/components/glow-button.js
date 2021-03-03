import React from "react";

import { useHover } from "../hooks/useHover";

export default function GlowButton(props) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      className={`rounded-full ease-linear text-white h-11 flex flex-row items-center justify-center px-4 py-3 gap-2
      cursor-pointer text-sm md:text-base whitespace-nowrap z-10 ${
        isHovered
          ? `shadow-glow-${props.color} bg-${props.color}`
          : "bg-rich-black"
      }`}
      onClick={props.onClick}
    >
      <div
        className={`rounded-full w-4 h-4 ${
          isHovered ? "bg-white" : `bg-${props.color}`
        }`}
      />
      {props.label}
    </div>
  );
}
