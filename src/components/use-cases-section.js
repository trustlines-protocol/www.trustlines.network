import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import GlowButtonCircle from "./glow-button-circle";
import PlusIcon from "./icons/plus";
import ArrowRightIcon from "./icons/arrow-right";
import IconButton from "./icon-button";

import { useHover } from "../hooks/useHover";
import { useIsMobile } from "../hooks/useIsMobile";

export default function UseCasesSection() {
  const query = graphql`
    query {
      allUseCasesJson {
        edges {
          node {
            description
            readMoreLink
            title
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `;
  const data = useStaticQuery(query);

  return (
    <div className="container mx-auto px-4 md:px-0 flex flex-col mb-32">
      <div className="flex flex-row justify-between mb-3">
        <div>
          <div className="text-3xl font-semibold mb-2">
            Pay with People Powered Money
          </div>
          <div className="text-base text-rich-black-lightest">
            A financial system built on the idea of People Powered Money is
            accessible for unbanked people and allows them to make payments.
          </div>
        </div>
        <div className="hidden md:block">
          <GlowButtonCircle
            color="coral-red"
            label="More"
            icon={<PlusIcon />}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-2">
        {data.allUseCasesJson.edges.map(({ node }) => (
          <UseCaseCard key={node.title} {...node} />
        ))}
        <IconButton
          Icon={<PlusIcon />}
          label="More"
          textColor="white"
          bgColor="rich-black"
          hoverTextColor="white"
          hoverBgColor="rich-black"
          className="md:hidden"
        />
      </div>
    </div>
  );
}

function UseCaseCard(props) {
  const [hoverRef, isHovered] = useHover();
  const isMobile = useIsMobile();

  const image = getImage(props.image);

  const expandCard = isMobile || isHovered;

  return (
    <div
      ref={hoverRef}
      className={`flex flex-col rounded-3xl shadow-card-gray overflow-hidden cursor-pointer ${
        expandCard ? "mt-0" : "mt-8"
      }`}
      onClick={() => window.open(props.readMoreLink, "_blank")}
    >
      <GatsbyImage
        image={image}
        alt={`${props.title} image`}
        className="max-h-28 sm:max-h-56 md:max-h-full"
      />
      <div className="p-4">
        <div className="text-sm lg:text-base font-semibold text-rich-black mb-2">
          {props.title}
        </div>
        <div className="text-sm lg:text-base text-rich-black">
          {props.description}
        </div>
        <div
          className={`h-6 mt-2 font-semibold flex flex-row items-center gap-1 text-coral-red hover:opacity-50 ${
            expandCard ? "block" : "hidden"
          }`}
          onClick={() => window.open(props.readMoreLink, "_blank")}
        >
          Read more
          <ArrowRightIcon
            size={16}
            className="stroke-current text-coral-red stroke-2"
          />
        </div>
      </div>
    </div>
  );
}
