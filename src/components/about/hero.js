import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function AboutHero() {
  return (
    <div className="bg-coral-red-lightest">
      <div className="relative container mx-auto flex flex-row justify-end">
        <StaticImage
          alt={"about-here"}
          height={432}
          src="../../content/about/images/about-hero.png"
          placeholder="blurred"
          loading="eager"
        />
        <div className="absolute top-20 left-0 px-4 text-4xl md:text-6xl text-white font-semibold">
          <div className="pb-2">Financial inclusion</div>
          <div>for all people</div>
        </div>
      </div>
    </div>
  );
}
