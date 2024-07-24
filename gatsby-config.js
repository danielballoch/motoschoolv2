require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `motoschoolv2`,
    siteUrl: `https://www.motoschool.co.nz`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", 
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.READ_ONLY_DATOCMS,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};