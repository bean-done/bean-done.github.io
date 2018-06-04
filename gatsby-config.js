module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'Description I put in here',
  },
  pathPrefix: '/gatsby-test-site',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp', // for images
    'gatsby-plugin-sharp', // for images
    {
      // Tell Gatsby that we should be able to query img from the specified directory
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },

    {
      // Tell Gatsby that we should be able to query markdown files from the specified directory
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      // for markdown files being read
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
  ],
}
