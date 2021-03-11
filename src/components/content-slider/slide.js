import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import IconButton from "../icon-button";
import Circle from "../icons/circle";
import useIsDevice from "../../hooks/useIsDevice";

export const Slide = ({ children }) => {
  return (
    <div className={"container px-4 mx-auto slide-content mb-56"}>
      <div className={"grid grid-cols-2 sm:grid-cols-3"}>{children}</div>
    </div>
  );
};

export const SlideMainContent = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export const SlideImage = ({ image, order }) => {
  const isMobile = useIsDevice("mobile");
  return (
    <GatsbyImage
      image={image}
      alt={"test"}
      className={"rounded -z-10"}
      style={isMobile ? {} : { minHeight: "400px" }}
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

export const SlideActionButtons = ({ links = [] }) => {
  return (
    <div className={"flex flex-row"}>
      {links.map((link) => {
        return (
          <IconButton
            bgColor={"black"}
            textColor={"white"}
            ringColor={"transparent"}
            hoverRingColor={"transparent"}
            hoverBgColor={"coral-red"}
            glowColor={"coral-red"}
            label={link.label}
            href={link.link}
            Icon={
              <Circle
                size={24}
                className={"bg-coral-red group-hover:bg-white"}
              />
            }
          />
        );
      })}
    </div>
  );
};
