module.exports = {
  siteMetadata: {
    title: `My Home`,
    description: `My persona Home assistant`,
    author: `@11arn11`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Home`,
        short_name: `my home`,
        start_url: `/`,
        background_color: `#3F50B5`,
        theme_color: `#3F50B5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-plugin-offline`
  ],
}
