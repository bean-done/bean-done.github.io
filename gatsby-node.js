const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// This will run for every file when Gatsby builds the site
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  // Check that the node we are operating on is a markdown file
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode, // get the parent node that we are loading
      basePath: 'posts', // base file path for file: folder where we are getting the files from
    })
    // attach node field to individual node
    createNodeField({
      node,
      name: 'slug', // name of the field we are passing in
      value: `/posts${slug}`, // use /posts as a sort of namespace
    })
  }
}

// Create pages out of all of our blog posts
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // use graphQL to get the data, and then use data to generate our pages
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // For all of our markdown pages, do this...
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug, // generated above, in onCreateNode
          component: path.resolve('./src/pages/about.js'), // what react component to use?
          context: {
            slug: node.fields.slug,
          },
        })
      })
    })
    resolve()
  })
}
