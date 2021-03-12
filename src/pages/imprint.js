import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function Imprint({ data }) {
  return (
    <div>
      <Helmet>
        <title>Legal Imprint</title>
        <meta
          name="description"
          content="Legal imprint page meta description"
        />
      </Helmet>
      <div
        className="privacy-policy mx-auto container flex flex-col gap-4 py-10"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  );
}

export const query = graphql`
  query Imprint {
    markdownRemark(fileAbsolutePath: { glob: "**/imprint/imprint.md" }) {
      html
    }
  }
`;
