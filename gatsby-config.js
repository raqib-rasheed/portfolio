/**
 * @type {import('gatsby').GatsbyConfig}
 */
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  siteMetadata: {
    title: "raqib's_portfolio",
    siteUrl: 'https://raqib.dev',
    description: 'A Frontend developer',
    twitter: 'https://twitter.com/raqib__rasheed',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'yys0eoto',
        dataset: 'portfolio',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
  ],
};
