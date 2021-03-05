import React from "react";

import { useHover } from "../hooks/useHover";

export default function IconButton(props) {
  const {
    Icon,
    iconPosition = "left",
    bgColor,
    textColor,
    ringColor = bgColor,
    hoverRingColor = bgColor,
    hoverBgColor = bgColor,
    hoverTextColor = textColor,
    onClick,
    label,
    className = "",
    ...restProps
  } = props;

  const [hoverRef, isHovered] = useHover();

  const IconComponent = React.cloneElement(Icon, {
    size: Icon.props.size,
    className: `${
      Icon.props.className
    } transition-all duration-500 ease-in-out stroke-current text-${
      isHovered ? hoverTextColor : textColor
    }`,
  });

  return (
    <button
      ref={hoverRef}
      className={`rounded-full h-11 flex items-center justify-center px-4 py-3 gap-2 cursor-pointer
      text-sm md:text-base whitespace-nowrap z-10 ring-2 transition-all duration-500 ease-in-out ${
        iconPosition === "left" ? "flex-row" : "flex-row-reverse"
      } ${
        isHovered
          ? `text-${hoverTextColor} bg-${hoverBgColor} ring-${hoverRingColor}`
          : `text-${textColor} bg-${bgColor} ring-${ringColor}`
      } ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {IconComponent}
      {label}
    </button>
  );
}
