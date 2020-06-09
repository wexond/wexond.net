module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `wexond.net`,
        start_url: `.`,
        icon: `${__dirname}/src/resources/images/favicon.png`,
      },
    },
    'gatsby-plugin-styled-components',
  ],
  pathPrefix: '.',
};
