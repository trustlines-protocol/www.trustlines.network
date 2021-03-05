import React from "react";

import { useHover } from "../hooks/useHover";

export default function GlowButtonCircle(props) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      className={`
      rounded-full w-28 h-28 text-white flex flex-col items-center justify-center px-4 py-3 gap-0 
      cursor-pointer text-center z-10 transition-all duration-500 ease-in-out ${
        isHovered
          ? `shadow-glow-${props.color} bg-${props.color}`
          : "bg-rich-black"
      } ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.label}
    </div>
  );
}
