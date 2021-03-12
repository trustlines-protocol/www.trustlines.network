import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function AboutVisionMission() {
  const data = useStaticQuery(graphql`
    query AboutVisionMission {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/about/(vision|mission).md" } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  const visionMissionData = data.allMarkdownRemark.edges;

  return (
    <div className="container mx-auto pb-20 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {visionMissionData.map(({ node }, i) => (
          <div key={i} className="flex-1">
            <div className="text-gray-300 text-6xl font-semibold mb-4 md:mb-8">
              {node.frontmatter.title}
            </div>
            <div
              className="text-2xl md:text-3xl text-rich-black font-semibold max-w-lg"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
