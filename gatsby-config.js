module.exports = {
  siteMetadata: {
    title: `Adrien Lacquemant`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
