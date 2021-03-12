import React from "react";
import IconButton from "../icon-button";
import CircleIcon from "../icons/circle";

export default function ContentHero() {
  return (
    <div className={"container mx-auto px-2 mb-10 mt-6 lg:mb-20 lg:mt-12"}>
      <h1
        className={
          "text-4xl leading-tight lg:text-heading-hero lg:leading-tight " +
          "font-semibold text-rich-black tracking-max-tightest"
        }
      >
        Building a better financial system
      </h1>
      <p className={"my-6 md:w-3/5 lg:w-3/5 text-rich-black-lighter text-xl"}>
        The Trustlines Network is the first project to create a universally
        accessible medium of exchange.
      </p>
      <IconButton
        href={""}
        label={"Join"}
        textColor="white"
        bgColor="black"
        hoverBgColor="coral-red"
        Icon={<CircleIcon className={"bg-coral-red group-hover:bg-white"} />}
        glowColor="coral-red"
      />
    </div>
  );
}
