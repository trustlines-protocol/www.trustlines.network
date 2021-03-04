import React from "react";
import Slide from "./slide";
import { GatsbyImage } from "gatsby-plugin-image";
import Pagination from "./pagination";

export default function Slider({ slides, activePage, onPageChange }) {
  const activeSlide = slides.find((slide) => slide.meta.order === activePage);
  const { meta } = activeSlide;
  const image = meta.slide_background_image.childImageSharp.gatsbyImageData;

  return (
    <div className={"static"}>
      <div className={"absolute w-full -z-10 hidden sm:block"}>
        <GatsbyImage
          key={meta.order}
          image={image}
          alt={"test"}
          style={{ height: "472px", zIndex: 0 }}
        />
      </div>
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-3 pt-9"}>
          <div className={"col-start-2 col-span-2"}>
            <Pagination
              total={slides.length}
              active={meta.order}
              title={meta.slide_subtitle}
              onNext={() => {
                const id = meta.order;
                const nextPage = id + 1;

                if (slides.length >= nextPage) {
                  onPageChange(nextPage);
                } else {
                  onPageChange(1);
                }
              }}
              onPrev={() => {
                const id = meta.order;
                const prevPage = id - 1;

                if (prevPage < 1) {
                  onPageChange(slides.length);
                } else {
                  onPageChange(prevPage);
                }
              }}
            />
          </div>
        </div>

        <Slide data={activeSlide} />
      </div>
    </div>
  );
}
