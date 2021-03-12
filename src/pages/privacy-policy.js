import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function PrivacyPolicy({ data }) {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy page meta description"
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
  query PrivacyPolicy {
    markdownRemark(
      fileAbsolutePath: { glob: "**/privacy-policy/privacy-policy.md" }
    ) {
      html
    }
  }
`;
