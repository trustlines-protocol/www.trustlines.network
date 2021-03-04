import React from "react";
import { Helmet } from "react-helmet";
import ContentSlider from "../components/content-slider";
import { graphql } from "gatsby";

export default function Landing({data}) {

  console.log('landing data', data)
  return (
    <div>
      <Helmet>
        <title>Landing page</title>
        <meta name="description" content="landing page meta description" />
      </Helmet>
      <div>Landing page</div>
      <ContentSlider />
    </div>
  );
}


