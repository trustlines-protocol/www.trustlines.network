import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const Slide = ({ children }) => {
  return (
    <div className={"container px-4 md:px-0 mx-auto slide-content mb-56"}>
      <div className={"grid grid-cols-2 sm:grid-cols-3"}>{children}</div>
    </div>
  );
};

export const SlideMainContent = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export const SlideImage = ({ image, order }) => {
  return (
    <GatsbyImage
      image={image}
      alt={"test"}
      className={"rounded -z-10"}
      key={"slide-image-" + order}
    />
  );
};
export const SlideHeading = ({ slide_title, slide_subtitle, style }) => {
  return (
    <div className={"hidden sm:block"}>
      <div
        className={
          "transform -rotate-90 scale-125 -z-10 text-6xl lg:text-7xl mt-80 font-semibold whitespace-nowrap"
        }
        style={style}
      >
        {slide_title}
        <br />
        {slide_subtitle}
      </div>
    </div>
  );
};
