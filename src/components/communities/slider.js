import React, { useState, useEffect, useRef } from "react";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

import CheckIcon from "../icons/check";
import useIsDevice from "../../hooks/useIsDevice";

import SliderData from "../../content/communities/slider.json";

export default function Slider() {
  const { title, slides } = SliderData;
  const [currentSlide, setCurrentSlide] = useState(null);
  const sliderRef = useRef(null);

  const { isVisible } = useVisibilitySensor(sliderRef, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
  });

  useEffect(() => {
    if (isVisible) {
      const intervalID = setInterval(
        () =>
          setCurrentSlide((prevSlide) => {
            const nextSlide = prevSlide === null ? 0 : ++prevSlide;
            return nextSlide % slides.length;
          }),
        5000
      );
      return () => clearInterval(intervalID);
    }
  }, [isVisible]);

  const didSliderStart = currentSlide !== null;

  const isMobile = useIsDevice("tablet");

  return (
    <div
      ref={sliderRef}
      className={`transition-colors duration-500 ${
        didSliderStart ? "bg-coral-red" : "bg-cyber-yellow"
      } ${isMobile ? "h-screen" : "section"}`}
    >
      <div className="container mx-auto px-4 flex flex-col justify-evenly h-full items-center md:items-start">
        <div
          className={`font-semibold text-3xl lg:text-6xl text-center md:text-left ${
            didSliderStart ? "text-coral-pastel" : "text-cyber-yellow-darker"
          }`}
        >
          {title}
        </div>
        <div
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-4 ${
            didSliderStart ? "visible" : "invisible"
          }`}
        >
          <CheckCircle activeIndex={currentSlide} />
          <div className="text-white text-lg md:text-3xl max-w-3xl text-center md:text-left h-28 md:flex-1 flex flex-col justify-center">
            {slides[currentSlide || 0].text}
          </div>
        </div>
        <Indicator
          totalNum={slides.length}
          activeIndex={currentSlide}
          onClick={(clickedIndex) => setCurrentSlide(clickedIndex)}
        />
      </div>
    </div>
  );
}

function CheckCircle({ activeIndex }) {
  const ringSizes = [16, 20, 24, 28, 32];

  const ringSize = ringSizes[activeIndex || 0];

  return (
    <div className="h-28 w-64 flex flex-row justify-center items-center">
      <div
        className={`
        h-${ringSize} w-${ringSize} transition-all duration-500
        rounded-full bg-coral-pastel flex flex-row justify-center items-center`}
      >
        <div className="h-14 w-14 rounded-full bg-white flex flex-row justify-center items-center">
          <CheckIcon />
        </div>
      </div>
    </div>
  );
}

function Indicator({ totalNum, activeIndex, onClick }) {
  return (
    <div className="flex flex-row gap-2">
      {Array(totalNum)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-full cursor-pointer transition-all duration-500 ${
              activeIndex === null
                ? "bg-cyber-yellow-darker"
                : "bg-coral-pastel"
            } ${activeIndex === index ? "w-8" : "w-4"}`}
            onClick={() => onClick(index)}
          />
        ))}
    </div>
  );
}
