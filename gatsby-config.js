module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'Description I put in here',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // Tell Gatsby that we should be able to query img from the specified directory
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
