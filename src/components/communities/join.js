import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SectionTextWithButton from "../section-text-with-button";
import IconButton from "../icon-button";
import DownloadIcon from "../icons/download";

import HeroImage from "../../content/communities/images/hero.svg";

export default function JoinSection() {
  const { markdownRemark } = useStaticQuery(graphql`
    query Join {
      markdownRemark(fileAbsolutePath: { glob: "**/communities/join.md" }) {
        frontmatter {
          title
          bottomLinkAttachment: bottom_link_attachment {
            publicURL
          }
          bottomLinkLabel: bottom_link_label
        }
        html
      }
    }
  `);

  const { html, frontmatter } = markdownRemark;

  return (
    <div className="bg-dark-green flex flex-row justify-end relative">
      <img
        src={HeroImage}
        alt="hero image"
        className="object-cover md:h-auto md:w-full md:object-contain"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center container mx-auto px-4 text-white">
        <SectionTextWithButton
          title={frontmatter.title}
          textHtml={html}
          textColor="white"
          Button={
            <IconButton
              Icon={<DownloadIcon className="stroke-4/3" />}
              label={frontmatter.bottomLinkLabel}
              href={frontmatter.bottomLinkAttachment.publicURL}
              textColor="white"
              bgColor="majorelle-blue"
            />
          }
        />
      </div>
    </div>
  );
}
