import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import avatars from '../images/avatar.jpg';

export default function SEO({
  children,
  title,
  location,
  description,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={title}>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image" href={avatars} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content={site.siteMetadata?.description}
      />
      <meta
        property="og:site_name"
        content={site.siteMetadata?.title}
        key="Ogsitename"
      />
      <meta property="og:description" content={description} />
      {children}
    </Helmet>
  );
}
