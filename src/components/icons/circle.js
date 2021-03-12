import React from "react";

export default function Circle({ className }) {
  return (
    <div
      className={`rounded-full h-4 w-4 transition-colors duration-500 ${className}`}
    />
  );
}
