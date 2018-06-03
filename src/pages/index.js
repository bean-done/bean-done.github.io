import React from 'react'
import Link from 'gatsby-link'

import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    # Using markdown remark...
    allMarkdownRemark {
      # query for all markdown files
      edges {
        # target the list
        node {
          # get the actual file
          frontmatter {
            # get the data related to the md file
            title
            date(formatString: "MMMM D, YYYY")
          }
          html # get the contents of the md file
          id # unique id when mapping the posts in array
          excerpt(pruneLength: 280) # excerpt from the post
        }
      }
    }
  }
`
