const path = require("path")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Connor Ocampo | Front-end Developer`,
    author: `Connor Ocampo`,
    description: `Connor Ocampo | Front-end Developer.`,
    siteUrl: `https://connorocampo.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Connor Ocampo`,
        short_name: `Connor`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#345d7e`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168382175-1`,
      },
    },
    {
      resolve: "gatsby-plugin-categories",
      options: {
        templatePath: `${__dirname}/src/templates/category.js`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: "Quiet Light",
              injectStyles: true,
              extensions: [],
              extensionDataDirectory: path.resolve("extensions"),
              logLevel: "error",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
