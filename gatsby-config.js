/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `SlashBin`,
    description: `SlashBin is a mobile application that uses the power of Machine Learning to help fight climate change by recycling correctly.`,
    author: `slashbin`,
  },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-react-helmet`],
}
