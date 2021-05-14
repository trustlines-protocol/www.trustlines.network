import React from "react";
import { Helmet } from "react-helmet";

export default function CustomHelmet({ title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{title}</title>
      <meta
        name="description"
        content="The Trustlines Network is the first project to create a universally accessible medium of exchange"
      />
      <meta
        itemProp="name"
        content="Trustlines Network - Building a better financial system"
      />
      <meta
        itemProp="description"
        content="The Trustlines Network is the first project to create a universally accessible medium of exchange"
      />
      <meta
        itemProp="image"
        content="https://trustlines.network/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp"
      />
      <meta name="google-site-verification" content="HL3TOtDXbLI7elMpxJckrsQT6bhamDiefyPzH-tZLuk" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp"
      />
      <meta
        name="twitter:image"
        content="/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp"
      />
      <meta
        property="og:title"
        content="Trustlines Network - Building a better financial system"
      />
      <meta name="author" content="Trustlines Network" />
      <meta property="og:locale" content="en_US" />
      <meta
        name="description"
        content="The Trustlines Network is a community-driven project that empowers people to create their own money and access digital payments. We call it People Powered Money."
      />
      <meta
        property="og:description"
        content="The Trustlines Network is a community-driven project that empowers people to create their own money and access digital payments. We call it People Powered Money."
      />
      <link rel="canonical" href="https://trustlines.network/" />
      <meta property="og:url" content="https://trustlines.network/" />
      <meta property="og:site_name" content="Trustlines Network" />
      <meta
        property="og:image"
        content="https://trustlines.network/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:image"
        content="https://trustlines.network/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp"
      />
      <meta
        property="twitter:title"
        content="Trustlines Network - Building a better financial system"
      />
      <meta
        name="twitter:title"
        content="Trustlines Network - Building a better financial system"
      />
      <meta
        name="twitter:description"
        content="The Trustlines Network is the first project to create a universally accessible medium of exchange"
      />
      <meta name="twitter:site" content="@TrustlinesFound" />
      <meta name="twitter:creator" content="@TrustlinesFound" />
      <script type="application/ld+json">
        {JSON.stringify({
          description:
            "Trustlines Network - Building a better financial system",
          "@type": "WebSite",
          headline: "Trustlines Network",
          sameAs: [
            "https://twitter.com/TrustlinesFound",
            "https://trustlines.foundation/",
            "https://twitter.com/trustlines_app",
            "https://reddit.com/r/Trustlines",
            "https://github.com/trustlines-protocol",
            "https://docs.trustlines.network/",
            "https://blog.trustlines.network/",
            "https://forum.trustlines.network/",
            "https://dev.trustlines.network/",
            "https://t.me/trustlines_network",
            "https://gitter.im/trustlines/community",
          ],
          publisher: {
            "@type": "Organization",
            logo: {
              "@type": "ImageObject",
              url:
                "https://trustlines.network/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp",
            },
            name: "Trustlines Network",
          },
          author: {
            "@type": "Person",
            name: "Trustlines Network",
          },
          url: "https://trustlines.network/",
          name: "Trustlines Network",
          image:
            "https://trustlines.network/static/5482f8ccf5ad3923212df820d2ce7bbe/10fc8/trustlines.webp",
          "@context": "https://schema.org",
        })}
      </script>
    </Helmet>
  );
}
