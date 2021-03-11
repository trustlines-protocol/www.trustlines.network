import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Map from "./map";

export default function CommunitiesMapSection() {
  const { markdownRemark } = useStaticQuery(graphql`
    query CommunitiesMapLanding {
      markdownRemark(
        fileAbsolutePath: { glob: "**/communities/map-landing.md" }
      ) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  const { html, frontmatter } = markdownRemark;

  return (
    <div className="container mx-auto mb-16 md:mb-32 p-4">
      <div className="text-lg md:text-3xl font-semibold">
        {frontmatter.title}
      </div>
      <Map borderColor="neon-pink" shadowColor="gray" subTextHTML={html} />
    </div>
  );
}
