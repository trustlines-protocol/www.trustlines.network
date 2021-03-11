import React from "react";

export default function SectionTextWithButton({
  title,
  textHtml,
  textColor,
  Button,
}) {
  return (
    <div className={`flex flex-col text-${textColor} gap-4`}>
      <div className="text-3xl lg:text-6xl font-semibold">{title}</div>
      <div className={`border-${textColor} border-b-2`} />
      <div
        className="font-semibold flex flex-col gap-1"
        dangerouslySetInnerHTML={{ __html: textHtml }}
      />
      <div className="flex">{Button}</div>
    </div>
  );
}
