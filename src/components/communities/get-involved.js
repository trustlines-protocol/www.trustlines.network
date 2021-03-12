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
    <div className="bg-coral-red-lighter">
      <div className="mx-auto container flex flex-col justify-center px-4 section">
        <SectionTextWithButton
          title={frontmatter.title}
          textHtml={html}
          textColor="coral-red"
          Button={
            <IconButton
              Icon={<BookmarkIcon />}
              label={frontmatter.bottomLinkLabel}
              href={frontmatter.bottomLinkAttachment.publicURL}
              textColor="white"
              bgColor="coral-red"
            />
          }
        />
      </div>
    </div>
  );
}
