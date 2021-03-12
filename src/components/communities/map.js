import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Map from "../map";

export default function MapSection() {
  const { markdownRemark } = useStaticQuery(graphql`
    query CommunitiesMap {
      markdownRemark(
        fileAbsolutePath: { glob: "**/communities/map-communities.md" }
      ) {
        frontmatter {
          title
          subTitle
        }
        html
      }
    }
  `);

  const { html, frontmatter } = markdownRemark;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-lg md:text-3xl font-semibold">
        {frontmatter.title}
      </div>
      <div className="text-rich-black my-4">{frontmatter.subTitle}</div>
      <Map
        textColor="white"
        borderColor="gray-500"
        shadowColor="neon-pink"
        subTextHTML={html}
      />
    </div>
  );
}
