require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  pathPrefix: process.env.NODE_ENV === 'production' ? '/borderscapes/' : '/',
  siteMetadata: {
    title: `Borderscapes`,
    description: `Borderscapes | WebGIS of Egyptian State Formation and the Changing Socio-Spatial Landscape of the Nile First Cataract Region in the 4th and 3rd millennia BCE`,
    author: `Julian Bogdani <julian.bogdani@uniroma1.it>`,
    siteUrl: `https://lab-archeologia-digitale.github.io/borderscapes/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`,
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
      resolve: `gatsby-plugin-sass`,
      options: { implementation: require("sass") },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lad-rect.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
}