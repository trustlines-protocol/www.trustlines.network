import React from "react";

import { COLOR_NAME_CLASSES } from "../constants";

export default function SectionTextWithButton({
  title,
  textHtml,
  textColor,
  Button,
}) {
  const { textColorClassName } = COLOR_NAME_CLASSES[textColor] || {};
  return (
    <div className={`flex flex-col ${textColorClassName} gap-4`}>
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
