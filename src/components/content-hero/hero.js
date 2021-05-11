import React from "react";

import IconButton from "../icon-button";
import Circle from "../icons/circle";
import JoinModal from "../join-modal";

export default function ContentHero() {
  const [isJoinModalOpen, setIsJoinModalOpen] = React.useState(false);

  return (
    <>
      <JoinModal
        isOpen={isJoinModalOpen}
        onRequestClose={() => setIsJoinModalOpen(false)}
      />
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
        <div className="block mt-6 md:flex md:mt-0">
          <IconButton
            textColor={"white"}
            bgColor={"rich-black"}
            ringColor={"transparent"}
            hoverBgColor={"coral-red"}
            label="Join"
            glowColor={"coral-red"}
            Icon={
              <Circle
                size={16}
                className={"bg-coral-red group-hover:bg-white"}
              />
            }
            onClick={() => setIsJoinModalOpen(true)}
          />
        </div>
      </div>
    </>
  );
}
