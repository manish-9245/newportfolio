import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Manish Tiwari",
  description = "Hey! I am Manish, a full-stack developer from India.",
  OGImage = "",
  OGType = "website",
  canonicalUrl = "https://ayushsoni1010.com/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Manish Tiwari`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Manish Tiwari" />
        <meta name="author" content="manish-9245" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@manisht_13" />
        <meta name="twitter:creator" content="@manisht_13" />
        <meta name="twitter:title" content="Manish Tiwari" />
        <meta
          name="twitter:description"
          content="Hey! I am Manish, a full-stack developer from India."
        />
        <meta
          name="twitter:image"
          content="https://twitter.com/manisht_13/photo"
        />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
