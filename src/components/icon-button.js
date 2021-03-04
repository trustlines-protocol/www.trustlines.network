import React from "react";

import { useHover } from "../hooks/useHover";

export default function IconButton(props) {
  const {
    Icon,
    iconPosition = "left",
    iconSize,
    iconClassName = "",
    hoverBgColor = bgColor,
    hoverTextColor = textColor,
    bgColor,
    textColor,
    onClick,
    label,
    className = "",
  } = props;

  const [hoverRef, isHovered] = useHover();

  const IconComponent = () => (
    <Icon
      size={iconSize}
      className={`${iconClassName} stroke-current text-${
        isHovered ? hoverTextColor : textColor
      }`}
    />
  );

  return (
    <div
      ref={hoverRef}
      className={`rounded-full h-11 flex flex-row items-center justify-center px-4 py-3 gap-2
      cursor-pointer text-sm md:text-base whitespace-nowrap z-10 ${
        isHovered
          ? `text-${hoverTextColor} bg-${hoverBgColor}`
          : `text-${textColor} bg-${bgColor}`
      } ${className}`}
      onClick={onClick}
    >
      {iconPosition === "left" && <IconComponent />}
      {label}
      {iconPosition === "right" && <IconComponent />}
    </div>
  );
}
