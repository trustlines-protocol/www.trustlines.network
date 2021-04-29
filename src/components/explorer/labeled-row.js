import React from "react";

export default function LabeledRow({ label, value }) {
  return (
    <div className="flex flex-row justify-between mt-6">
      <div className="flex-1">{label}</div>
      <div className="flex-1 text-gray-500 text-right">{value || "-"}</div>
    </div>
  );
}
