import React from "react";
import { Helmet } from "react-helmet";

export default function CustomHelmet(props) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      {...props}
    />
  );
}
