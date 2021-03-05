import React, { useState } from "react";
import Slider from "./slider";
import { useStaticQuery, graphql } from "gatsby";

export default function ContentSlider(props) {
  const data = useStaticQuery(graphql`
    query SliderContent {
      md: allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
        slides: nodes {
          meta: frontmatter {
            slide_subtitle
            slide_title
            order
            content_image {
              childImageSharp {
                gatsbyImageData(
                  width: 768
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            slide_background_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, height: 472)
              }
            }
          }
          html
        }
      }
    }
  `);

  const slides = data.md.slides;
  const [activePage, setActivePage] = useState(1);

  const onPageChange = (page) => {
    setActivePage(page);
  };
  return (
    <Slider
      slides={slides}
      activePage={activePage}
      onPageChange={onPageChange}
    />
  );
}
