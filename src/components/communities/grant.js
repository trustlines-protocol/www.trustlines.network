import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import IconButton from "../icon-button";
import CircleIcon from "../icons/circle";

export default function Grant() {
  const { markdownRemark } = useStaticQuery(graphql`
    query Grant {
      markdownRemark(fileAbsolutePath: { glob: "**/communities/grant.md" }) {
        frontmatter {
          title
          bottomLink: bottom_link
          bottomLinkLabel: bottom_link_label
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 520)
            }
          }
        }
        html
      }
    }
  `);

  return (
    <div className="mx-auto px-4 container flex flex-col-reverse md:flex-row py-14 md:py-28">
      <div className="flex-1 flex flex-col gap-8 justify-center">
        <div className="text-2xl md:text-3xl font-semibold text-rich-black max-w-xs md:max-w-md">
          {markdownRemark.frontmatter.title}
        </div>
        <div
          className="text-base md:text-lg md:pr-8 max-w-md gap-4 flex flex-col"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <div className="flex">
          <IconButton
            key={markdownRemark.frontmatter.bottomLinkLabel}
            href={markdownRemark.frontmatter.bottomLink}
            label={markdownRemark.frontmatter.bottomLinkLabel}
            textColor="white"
            bgColor="black"
            hoverBgColor="coral-red"
            Icon={
              <CircleIcon className={"bg-coral-red group-hover:bg-white"} />
            }
            glowColor="coral-red"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-end mb-8 md:mb-0">
        <GatsbyImage
          alt="grant image"
          image={getImage(markdownRemark.frontmatter.image)}
        />
      </div>
    </div>
  );
}
