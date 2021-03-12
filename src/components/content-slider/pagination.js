import React from "react";
import RightSvgImage from "../../styles/icons/right.inline.svg";
import ArrowRight from "../icons/arrow-right";

export default function Pagination({ total, active, title, onNext, onPrev }) {
  const splittedTitle = title.split(" ");

  return (
    <div className={"flex flex-between"}>
      <div className={"flex-1 text-lg"}>
        {active} <span className={"ml-2 mr-2"}>/</span> {total}
        <span className="mx-4">{splittedTitle[splittedTitle.length - 1]}</span>
      </div>
      <div>
        <span className={"pagination-left"} onClick={onPrev}>
          <RightSvgImage />
        </span>
        <span className={"pagination-right ml-4"} onClick={onNext}>
          <RightSvgImage />
        </span>
      </div>
    </div>
  );
}
