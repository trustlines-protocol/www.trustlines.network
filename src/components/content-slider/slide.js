import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
export default function Slide({ data }) {
  const { meta, html } = data;

  const image = getImage(meta.content_image);
  return (
    <div className={"container mx-auto"}>
      <div className={"grid grid-cols-2 sm:grid-cols-3"}>
        <div className={"hidden sm:block"}>
          <div className={"transform -rotate-90 scale-125 -z-10"}>
            <div>{meta.slide_title}</div>
            <div>{meta.slide_subtitle}</div>
          </div>
        </div>

        <div className={"col-span-2"}>
          <GatsbyImage
            image={image}
            alt={"test"}
            className={"rounded -z-10"}
            key={"slide-image-" + meta.order}
          />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </div>
  );
}
