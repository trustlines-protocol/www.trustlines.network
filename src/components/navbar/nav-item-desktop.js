import React from "react";
import { Link } from "gatsby";

import { useHover } from "../../hooks/useHover";

export default function NavItemDesktop(props) {
  const [hoverRef, isHovered] = useHover();
  const [subNavItemsContainerRef, isSubNavItemsContainerHovered] = useHover();

  const showSubNavItems = isHovered || isSubNavItemsContainerHovered;

  return (
    <div className="cursor-pointer inline-block" ref={hoverRef}>
      <div className="flex flex-col justify-center">
        <Link
          className={`text-base ${
            showSubNavItems ? "text-coral-red" : "text-rich-black-lighter"
          }`}
          to={props.to}
          activeClassName="text-coral-red"
        >
          {props.label}
        </Link>
      </div>
      <div
        ref={subNavItemsContainerRef}
        className={`absolute pt-2 ${showSubNavItems ? "" : "hidden"}`}
      >
        <div className=" bg-gray-100 p-2 -ml-5 rounded-lg shadow-md">
          {props.subNavItems.map((subNavItem, i) => (
            <SubNavItem key={`${subNavItem.label}-${i}`} {...subNavItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SubNavItem(props) {
  return (
    <div
      className="flex flex-col p-4 hover:bg-gray-300 rounded-lg"
      onClick={() => console.log(props.to)}
    >
      <div className="font-semibold mb-2">{props.label}</div>
      <div className="text-xs text-rich-black-lightest">{props.subLabel}</div>
    </div>
  );
}
