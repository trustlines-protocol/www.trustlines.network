import React from "react";

import { COLOR_NAME_CLASSES } from "../constants";

export default function IconButton(props) {
  const {
    Icon,
    iconPosition = "left",
    bgColor,
    textColor,
    ringColor = "transparent",
    hoverRingColor = "transparent",
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

  const { textColorClassName } = COLOR_NAME_CLASSES[textColor] || {};
  const { bgColorClassName } = COLOR_NAME_CLASSES[bgColor] || {};
  const { ringColorClassName } = COLOR_NAME_CLASSES[ringColor] || {};
  const { glowClassName } = COLOR_NAME_CLASSES[glowColor] || {};
  const { groupTextColorClassName, hoverTextColorClassName } =
    COLOR_NAME_CLASSES[hoverTextColor] || {};
  const { hoverBgColorClassName } = COLOR_NAME_CLASSES[hoverBgColor] || {};
  const { hoverRingColorClassName } = COLOR_NAME_CLASSES[hoverRingColor] || {};

  const IconComponent = React.cloneElement(Icon, {
    size: Icon.props.size,
    className: `${
      Icon.props.className
    } stroke-current ${groupTextColorClassName} ${
      label ? (isCircle ? "" : iconPosition === "left" ? "mr-2" : "ml-2") : ""
    }`,
  });

  const cssClasses = `${className} group rounded-full flex items-center justify-center cursor-pointer ${
    isCircle ? "p-0 h-10 w-10" : "px-4 py-3 h-11"
  }
    focus:outline-none text-sm md:text-base ${whitespaceClass} z-10 ring-2 transition-all duration-500 ease-in-out ${
    iconPosition === "left" ? "flex-row" : "flex-row-reverse"
  } 
      ${hoverTextColorClassName} ${hoverBgColorClassName} ${hoverRingColorClassName}
      ${textColorClassName} ${bgColorClassName} ${ringColorClassName}
      ${glowClassName}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cssClasses}
        {...restProps}
      >
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
