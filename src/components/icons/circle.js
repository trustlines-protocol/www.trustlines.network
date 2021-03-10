import React from "react";

export default function Circle({ size = 24, className }) {
  return (
    <div
      className={`rounded-full ${className}`}
      style={{ height: size, width: size }}
    ></div>
  );
}
