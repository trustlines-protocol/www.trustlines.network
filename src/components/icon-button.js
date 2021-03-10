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
    href = "",
    className = "",
    isCircle = false,
    glowColor = "",
    whitespaceClass = "whitespace-nowrap",
    ...restProps
  } = props;

  const IconComponent = React.cloneElement(Icon, {
    size: Icon.props.size,
    className: `${Icon.props.className} stroke-current group:text-${hoverTextColor}`,
  });

  const cssClasses = `group rounded-full flex items-center justify-center gap-2 cursor-pointer ${
    isCircle ? "p-0 h-10 w-10" : "px-4 py-3 h-11"
  }
      text-sm md:text-base ${whitespaceClass} z-10 ring-2 transition-all duration-500 ease-in-out ${
    iconPosition === "left" ? "flex-row" : ""
  } 
      hover:text-${hoverTextColor} hover:bg-${hoverBgColor} hover:ring-${hoverRingColor}
      text-${textColor} bg-${bgColor} ring-${ringColor}
      ${glowColor ? `hover:shadow-glow-${glowColor}` : ""}
      ${className}`;

  if (href) {
    return (
      <a href={href} className={cssClasses} {...restProps}>
        {IconComponent}
        {label}
      </a>
    );
  }

  return (
    <button className={cssClasses} onClick={onClick} {...restProps}>
      {IconComponent}
      {label}
    </button>
  );
}
