import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ArrowRightIcon from "../icons/arrow-right";
import BitcoinIcon from "../icons/bitcoin";
import MoneyIcon from "../icons/money";
import TrustlineIcon from "../icons/trustline";

import { COLOR_NAME_CLASSES } from "../../constants";

const NAME_TO_COMPONENT = {
  bitcoin: <BitcoinIcon />,
  money: <MoneyIcon />,
  trustline: <TrustlineIcon />,
};

export default function AboutBoxes() {
  const data = useStaticQuery(graphql`
    query AboutBoxes {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/about/box-*.md" } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              order
              title
              iconName: icon_name
              bgColor: bg_color
              imageBgColor: image_bg_color
              bottomLinks: bottom_links {
                link
                label
              }
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const boxesData = data.allMarkdownRemark.edges;

  return (
    <div>
      {boxesData.map(({ node }, i) => (
        <Box {...node.frontmatter} html={node.html} key={i} />
      ))}
    </div>
  );
}

function Box({
  html,
  bottomLinks = [],
  iconName,
  image,
  title,
  bgColor,
  imageBgColor,
  order,
}) {
  const reverse = order === 2;

  const { bgColorClassName } = COLOR_NAME_CLASSES[bgColor] || {};
  const { bgColorClassName: imgBgColorClassName } =
    COLOR_NAME_CLASSES[imageBgColor] || {};

  return (
    <div
      className={`flex ${
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
      <div
        className={`flex-1 ${bgColorClassName} flex flex-col justify-center`}
      >
        <div
          className={`container-half px-4 ${
            reverse ? "md:mr-auto" : "md:ml-auto"
          }`}
        >
          <div
            className={`flex flex-col justify-center text-white py-8 space-y-4 ${
              reverse ? "md:pl-8" : "md:pr-8"
            }`}
          >
            <div className="h-12 w-12 rounded-lg flex flex-col justify-center items-center bg-black bg-opacity-10">
              {NAME_TO_COMPONENT[iconName]}
            </div>
            <div className="mb-2 font-semibold text-xl xl:text-2xl">
              {title}
            </div>
            <div
              className="xl:text-lg flex flex-col space-y-4 max-w-md"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {(bottomLinks || []).map(({ link, label }) => (
              <a
                key={label}
                href={link}
                rel="noreferrer"
                target="_blank"
                className="flex flex-row items-center xl:text-lg mt-4 cursor-pointer font-semibold"
              >
                {label}
                <ArrowRightIcon
                  size={16}
                  className="ml-1 stroke-current text-white stroke-2"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-1 ${imgBgColorClassName}`}>
        <div
          className={`flex flex-col justify-end container-half h-full ${
            reverse ? "items-end ml-auto" : "items-start mr-auto"
          }`}
        >
          <GatsbyImage
            alt="About box image"
            image={getImage(image)}
            key={"about-box-image-" + title}
            className={`max-h-96 ${reverse ? "" : "transform -scale-x-100"}`}
          />
        </div>
      </div>
    </div>
  );
}
