import React from "react";
import { graphql } from "gatsby";

import CustomHelmet from "../components/custom-helmet";

export default function PrivacyPolicy({ data }) {
  return (
    <div>
      <CustomHelmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy page meta description"
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
  query PrivacyPolicy {
    markdownRemark(
      fileAbsolutePath: { glob: "**/privacy-policy/privacy-policy.md" }
    ) {
      html
    }
  }
`;
