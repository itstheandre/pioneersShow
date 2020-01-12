module.exports = {
  siteMetadata: {
    title: `Pioneers Show`,
    description: `Podcast`,
    author: `André de Albuquerque`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "1prmlm1y",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            // "TTInterphases-MediumItalic",
            // "TTInterphases-BlackItalic",
            // "TTInterphases-DemiBold",
            // "TTInterphases-Light",
            // "TTInterphases-ExtraLightItalic",
            // "TTInterphases-ExtraBold",
            // "TTInterphases-ThinItalic",
            // "TTInterphases-LightItalic",
            // "TTInterphases-Regular",
            // "TTInterphases-ExtraLight",
            // "TTInterphases-Medium",
            // "TTInterphases-DemiBoldItalic",
            // "TTInterphases-Bold",
            // "TTInterphases-ExtraBoldItalic",
            // "TTInterphases-BoldItalic",
            // "TTInterphases-Black",
            // "TTInterphases-Italic",
            // "TTInterphases-Thin",
            // "TTInterphasesMono-Italic",
            // "TTInterphasesMono-BoldItalic",
            // "TTInterphasesMono-Regular",
            // "TTInterphasesMono-Bold",
          ],
          urls: ["./fonts/fonts.css"],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
