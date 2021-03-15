import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function AboutIntro() {
  const data = useStaticQuery(graphql`
    query AboutIntro {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/about/intro*.md" } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const introTexts = data.allMarkdownRemark.edges;

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {introTexts.map(({ node }, i) => (
          <div key={i} className="flex-1">
            <div
              className="text-lg font-normal max-w-md"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
