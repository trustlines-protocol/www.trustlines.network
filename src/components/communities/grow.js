import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SectionTextWithButton from "../section-text-with-button";
import IconButton from "../icon-button";
import DownloadIcon from "../icons/download";

export default function GrowSection() {
  const { markdownRemark } = useStaticQuery(graphql`
    query Grow {
      markdownRemark(fileAbsolutePath: { glob: "**/communities/grow.md" }) {
        frontmatter {
          title
          bottomLink: bottom_link
          bottomLinkLabel: bottom_link_label
        }
        html
      }
    }
  `);

  const { html, frontmatter } = markdownRemark;

  return (
    <div className="bg-aquamarine-green-light">
      <div className="mx-auto container flex flex-col justify-center px-4 section">
        <SectionTextWithButton
          title={frontmatter.title}
          textHtml={html}
          textColor="dark-green"
          Button={
            <IconButton
              Icon={<DownloadIcon className="stroke-4/3" />}
              label={frontmatter.bottomLinkLabel}
              href={frontmatter.bottomLink}
              textColor="white"
              bgColor="dark-green"
            />
          }
        />
      </div>
    </div>
  );
}
