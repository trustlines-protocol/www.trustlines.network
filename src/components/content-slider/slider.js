import React  from "react";
import { Slide, SlideHeading, SlideImage, SlideMainContent } from "./slide";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Pagination from "./pagination";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useIsMobile from "../../hooks/useIsMobile";

export default function Slider({ slides, activePage, onPageChange }) {
  const activeSlide = slides.find((slide) => slide.meta.order === activePage);
  const { meta, html } = activeSlide;
  const isMobile = useIsMobile();
  const image = meta.slide_background_image.childImageSharp.gatsbyImageData;

  const onNext = () => {
    const id = meta.order;
    const nextPage = id + 1;

    if (slides.length >= nextPage) {
      onPageChange(nextPage);
    } else {
      onPageChange(1);
    }
  };

  const onPrev = () => {
    const id = meta.order;
    const prevPage = id - 1;

    if (prevPage < 1) {
      onPageChange(slides.length);
    } else {
      onPageChange(prevPage);
    }
  };

  const slideImage = getImage(meta.content_image);

  return (
    <div className={"static"}>
      <div className={"absolute w-full -z-10 hidden sm:block"}>
        <SwitchTransition mode={"in-out"}>
          <CSSTransition
            key={meta.order}
            appear={true}
            in={true}
            timeout={200}
            classNames="fade-in-out"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <GatsbyImage
              key={meta.order}
              image={image}
              loading={"eager"}
              alt={"test"}
              placeholder={"none"}
              style={{
                height: "472px",
                zIndex: 0,
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                position: "absolute",
              }}
            />
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Slide>
        <SlideHeading
          style={{ color: meta.slide_heading_color }}
          slide_title={meta.slide_title}
          slide_subtitle={meta.slide_subtitle}
        />
        <div className={"col-span-2"}>
          {!isMobile && (
            <div className={"mt-20 mb-4 text-white"}>
              <InternalPagination
                slides={slides}
                meta={meta}
                onNext={onNext}
                onPrev={onPrev}
              />
            </div>
          )}
          <SlideImage image={slideImage} order={meta.order} />
          {isMobile && (
            <div className={"text-rich-black-lightest"}>
              <InternalPagination
                slides={slides}
                meta={meta}
                onNext={onNext}
                onPrev={onPrev}
              />
            </div>
          )}
          <SlideMainContent html={html} />
        </div>
      </Slide>
    </div>
  );
}

const InternalPagination = ({ slides, meta, onNext, onPrev }) => {
  return (
    <Pagination
      total={slides.length}
      active={meta.order}
      title={meta.slide_subtitle}
      onNext={onNext}
      onPrev={onPrev}
    />
  );
};
