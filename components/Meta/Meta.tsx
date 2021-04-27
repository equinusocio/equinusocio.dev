import React from 'react';
import Head from 'next/head';

interface IMetaProps {
  description?: string;
  title?: string;
  children?: any;
  url?: string;
  canonical?: string;
  image?: string;
  siteName?: string;
  keywords?: string[];
}

export const Meta = ({
  description = 'I\'m Mattia Astorino, UX Engineer in Milan and member of Open Source Design.',
  title = '[CHANGE ME] Something Default Title',
  siteName = 'Mattia Astorino',
  image = 'https://equinusocio.dev/cover.jpg',
  keywords,
  url,
  canonical,
  children,
}: IMetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    { keywords && <meta name="keywords" content={keywords.join()} />}
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />

    {canonical && <link rel="canonical" href="" /> }
    <meta property="og:site_name" content={title} />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="twitter:site" content={siteName} />

    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta name="og:description" property="og:description" content={description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />
    <meta property="og:image:alt" content={`Page image for ${title}`} />
    <meta name="twitter:image:alt" content={`Page image for ${title}`} />

    <meta name="twitter:creator" content="equinusocio" />
    {url && (
      <>
        <meta property="og:url" content={url} />
        <meta property="twitter:url" content={url} />
      </>
    )}

    {children}
  </Head>
);
