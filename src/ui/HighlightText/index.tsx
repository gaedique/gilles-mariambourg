"use client";
import React from "react";
import { HighlightTextProps } from "./types";

export const HighlightText = ({
  text,
  highlight,
  highlightClassName = "text-brand-bay-of-many-600 font-bold",
}: HighlightTextProps) => {
  // If highlight is a string, escape special regex characters and create a regex object
  const regex =
    highlight instanceof RegExp
      ? highlight
      : new RegExp(
          `(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi"
        );

  // Split the text by the regex
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        // Check if this part matches the regex
        const isMatch = regex.test(part);
        // Reset regex lastIndex since we're reusing it
        regex.lastIndex = 0;

        return isMatch ? (
          <em key={index} className={highlightClassName}>
            {part}
          </em>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        );
      })}
    </>
  );
};
