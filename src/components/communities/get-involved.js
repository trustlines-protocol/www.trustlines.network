import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SectionTextWithButton from "../section-text-with-button";
import IconButton from "../icon-button";
import BookmarkIcon from "../icons/bookmark";

export default function GetInvolvedSection() {
  const { markdownRemark } = useStaticQuery(graphql`
    query GetInvolved {
      markdownRemark(
        fileAbsolutePath: { glob: "**/communities/get-involved.md" }
      ) {
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
    <div className="bg-coral-red-lighter">
      <div className="mx-auto container flex flex-col justify-center px-4 section">
        <SectionTextWithButton
          title={frontmatter.title}
          textHtml={html}
          textColor="coral-red"
          Button={
            <IconButton
              Icon={<BookmarkIcon className="stroke-4/3" />}
              label={frontmatter.bottomLinkLabel}
              href={frontmatter.bottomLink}
              textColor="white"
              bgColor="coral-red"
            />
          }
        />
      </div>
    </div>
  );
}
