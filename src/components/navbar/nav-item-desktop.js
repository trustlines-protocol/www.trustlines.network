import React from "react";
import { Link } from "gatsby";

import { useHover } from "../../hooks/useHover";

export default function NavItemDesktop({ to, label, subNavItems = [] }) {
  const [hoverRef, isHovered] = useHover();
  const [subNavItemsContainerRef, isSubNavItemsContainerHovered] = useHover();

  const showSubNavItems =
    subNavItems.length > 0 ? isHovered || isSubNavItemsContainerHovered : false;

  return (
    <div className="cursor-pointer inline-block" ref={hoverRef}>
      <div className="flex flex-col justify-center">
        <Link
          className={`text-sm lg:text-base whitespace-nowrap hover:text-coral-red ${
            showSubNavItems ? "text-coral-red" : "text-rich-black-lighter"
          }`}
          to={to}
          activeClassName="text-coral-red"
        >
          {label}
        </Link>
      </div>
      <div
        ref={subNavItemsContainerRef}
        className={`absolute pt-2 w-64 ${showSubNavItems ? "" : "hidden"}`}
      >
        <div className=" bg-gray-100 p-2 -ml-5 rounded-lg shadow-md">
          {subNavItems.map((subNavItem, i) => (
            <SubNavItem key={`${subNavItem.label}-${i}`} {...subNavItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SubNavItem(props) {
  return (
    <Link
      className="flex flex-col p-4 hover:bg-gray-300 rounded-lg"
      to={props.to}
      target="_blank"
    >
      <div className="font-semibold mb-2">{props.label}</div>
      <div className="text-xs text-rich-black-lightest">{props.subLabel}</div>
    </Link>
  );
}
