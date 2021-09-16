import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import PlusIcon from "./icons/plus";
import ArrowRightIcon from "./icons/arrow-right";
import IconButton from "./icon-button";

import { useHover } from "../hooks/useHover";
import { useIsDevice } from "../hooks/useIsDevice";
import useIsClient from "../hooks/useIsClient";

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
    <div className="container mx-auto px-4 flex flex-col mb-24 sm:mb-32">
      <div className="flex flex-row justify-between mb-3 space-x-10">
        <div>
          <div className="text-3xl font-semibold mb-2">
            Why People Powered Money?
          </div>
          <div className="text-base text-rich-black-lightest">
            A financial system built on the idea of People Powered Money is
            accessible for{" "}
            <a
              className="underline"
              href="https://globalfindex.worldbank.org/sites/globalfindex/files/chapters/2017%20Findex%20full%20report_chapter2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              unbanked people
            </a>{" "}
            and allows them to make payments.
          </div>
        </div>
        <div className="hidden md:block">
          <IconButton
            textColor={"white"}
            bgColor={"rich-black"}
            ringColor={"transparent"}
            hoverBgColor="coral-red"
            label="More"
            className={"w-28 h-28 flex flex-col"}
            isCircle={true}
            Icon={<PlusIcon className="stroke-current text-white stroke-4/3" />}
            href={
              "https://docs.trustlines.network/resources/wp_content/use_in_the_real_world/"
            }
          />
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-2">
          {data.allUseCasesJson.edges.map(({ node }) => (
            <UseCaseCard key={node.title} {...node} />
          ))}
        </div>
        <IconButton
          Icon={<PlusIcon className="stroke-current text-white stroke-4/3" />}
          label="More"
          textColor="white"
          bgColor="rich-black"
          hoverTextColor="white"
          hoverBgColor="rich-black"
          className="md:hidden"
          href={
            "https://docs.trustlines.network/resources/wp_content/use_in_the_real_world/"
          }
        />
      </div>
    </div>
  );
}

function UseCaseCard(props) {
  const [hoverRef, isHovered] = useHover();
  const isMobile = useIsDevice("tablet");
  const [, key] = useIsClient();

  const image = getImage(props.image);

  const expandCard = isMobile || isHovered;

  return (
    <div
      ref={hoverRef}
      className={`flex-1 flex flex-col rounded-3xl shadow-card-gray overflow-hidden cursor-pointer translate-z-0 ${
        isMobile ? "mt-6" : isHovered ? "mt-0" : "mt-8"
      }`}
      onClick={() => window.open(props.readMoreLink, "_blank")}
      key={key}
    >
      <GatsbyImage
        image={image}
        alt={`${props.title} image`}
        className="max-h-28 sm:max-h-56 md:max-h-full overflow-hidden"
      />
      <div className="p-4">
        <div className="text-sm lg:text-base font-semibold text-rich-black mb-2">
          {props.title}
        </div>
        <div className="text-sm lg:text-base text-rich-black">
          {props.description}
        </div>
        <a
          className={`h-6 mt-2 font-semibold flex flex-row items-center text-coral-red ${
            expandCard ? "block" : "hidden"
          }`}
          href={props.readMoreLink}
          target="_blank"
          rel="noreferrer"
        >
          Read more
          <ArrowRightIcon
            size={16}
            className="stroke-current text-coral-red stroke-2 ml-1"
          />
        </a>
      </div>
    </div>
  );
}
