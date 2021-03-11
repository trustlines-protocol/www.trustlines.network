import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContactForm from "../contact-form";
import IconButton from "../icon-button";
import ArrowDownIcon from "../icons/arrow-down";
import ArrowUpIcon from "../icons/arrow-up";

export default function ContactSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { markdownRemark } = useStaticQuery(graphql`
    query Contact {
      markdownRemark(fileAbsolutePath: { glob: "**/communities/contact.md" }) {
        frontmatter {
          title
        }
      }
    }
  `);

  const { frontmatter } = markdownRemark;

  return (
    <div className="bg-pink-pastel">
      <div className="mx-auto container flex flex-col justify-center px-4 section py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl text-center md:text-left md:text-3xl font-semibold text-rich-black max-w-lg">
            {frontmatter.title}
          </div>
          <IconButton
            Icon={
              isExpanded ? (
                <ArrowUpIcon size={16} className="stroke-4/3" />
              ) : (
                <ArrowDownIcon size={16} className="stroke-4/3" />
              )
            }
            label="Contact Us"
            textColor="rich-black"
            bgColor="neon-pink"
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full md:w-auto"
          />
        </div>
        {isExpanded && (
          <div className="mt-4">
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
}
