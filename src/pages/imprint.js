import React from "react";
import { graphql } from "gatsby";

import CustomHelmet from "../components/custom-helmet";

export default function Imprint({ data }) {
  return (
    <div>
      <CustomHelmet>
        <title>Legal Imprint</title>
        <meta
          name="description"
          content="Legal imprint page meta description"
        />
      </CustomHelmet>
      <div
        className="privacy-policy mx-auto container flex flex-col space-y-4 py-10"
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
