import React from "react";
export default function Pagination({ total, active, title, onNext, onPrev }) {
  return (
    <div className={"flex flex-between"}>
      <div className={"flex-1"}>
        {active} / {total} {title}
      </div>
      <div>
        <span onClick={onPrev}>{"<-"}</span>
        <span onClick={onNext}>{"->"}</span>
      </div>
    </div>
  );
}
