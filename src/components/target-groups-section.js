import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import ContactForm from "./contact-form";
import IconButton from "./icon-button";
import PlusIcon from "./icons/plus";
import MinusIcon from "./icons/minus";
import ArrowRightIcon from "./icons/arrow-right";
import ArrowUpIcon from "./icons/arrow-up";
import ArrowDownIcon from "./icons/arrow-down";

export default function TargetGroupsSection(props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/target-groups/**" } }
      ) {
        edges {
          node {
            frontmatter {
              order
              group_name
              action_title
              bottom_links {
                label
                link
              }
              enable_contact_form
            }
            html
          }
        }
      }
    }
  `);

  const sortedNodes = data.allMarkdownRemark.edges
    .sort(
      (edgeA, edgeB) =>
        edgeA.node.frontmatter.order - edgeB.node.frontmatter.order
    )
    .map(({ node }) => ({
      actionTitle: node.frontmatter["action_title"],
      bottomLinks: node.frontmatter["bottom_links"] || [],
      enableContactForm: node.frontmatter["enable_contact_form"] || false,
      groupName: node.frontmatter["group_name"],
      html: node.html,
    }));

  return (
    <div className="flex flex-col mx-auto container mb-32">
      {sortedNodes.map((node, index) => (
        <TargetGroupItem
          key={node.groupName}
          isLastItem={index === sortedNodes.length - 1}
          {...node}
        />
      ))}
    </div>
  );
}

function TargetGroupItem(props) {
  const {
    bottomLinks = [],
    enableContactForm = false,
    groupName,
    actionTitle,
    html,
    isLastItem,
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col px-6 rounded-3xl ${
        isExpanded ? "bg-gray-50 mb-4" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-between py-5 md:py-10 cursor-pointer ${
          isLastItem && !isExpanded ? "border-b-0" : "border-b-2"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="font-semibold text-2xl md:text-5xl text-rich-black">
            {groupName.split(" ")[0]}
          </div>
          <div className="font-semibold text-2xl md:text-5xl text-rich-black">
            {groupName.split(" ")[1]}
          </div>
        </div>
        <div className="flex-1 flex flex-row w-full items-center gap-4 mt-4 md:mt-0">
          <div className="flex-1">
            <div className="text-sm md:text-lg text-rich-black max-w-xs">
              {actionTitle}
            </div>
          </div>
          <IconButton
            Icon={
              isExpanded ? (
                <MinusIcon size={32} className="stroke-2" />
              ) : (
                <PlusIcon size={32} className="stroke-2" />
              )
            }
            onClick={() => setIsExpanded(true)}
            isCircle
            textColor="coral-red"
            bgColor="coral-red-lighter"
          />
        </div>
      </div>
      {isExpanded && (
        <div className="py-5 md:py-10">
          <div
            className="flex flex-col gap-4 text-sm md:text-lg text-rich-black"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {bottomLinks.length > 0 && (
            <div className="flex flex-col md:flex-row mt-10 gap-8">
              {bottomLinks.map((bottomLink) => (
                <div
                  key={bottomLink.label}
                  className="text-coral-red font-semibold flex flex-row items-center hover:opacity-50 cursor-pointer text-sm md:text-lg"
                >
                  {bottomLink.label}
                  <ArrowRightIcon
                    size={18}
                    className="stroke-current text-coral-red stroke-2"
                  />
                </div>
              ))}
            </div>
          )}
          {enableContactForm && <TargetGroupItemContactForm />}
        </div>
      )}
    </div>
  );
}

function TargetGroupItemContactForm() {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="mt-10">
      <IconButton
        Icon={
          showContactForm ? (
            <ArrowUpIcon size={16} className="stroke-2" />
          ) : (
            <ArrowDownIcon size={16} className="stroke-2" />
          )
        }
        label="Contact Us"
        textColor={"white"}
        hoverTextColor={"coral-red"}
        bgColor={"coral-red"}
        hoverBgColor={"transparent"}
        ringColor={"transparent"}
        iconPosition="right"
        onClick={() => setShowContactForm(!showContactForm)}
      />
      {showContactForm && <ContactForm />}
    </div>
  );
}
