import React from 'react'
import Link from 'gatsby-link'

const PostListing = () => <div>Hello</div>

const IndexPage = ({ data }) => (
  <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return <PostListing post={node} />
    })}
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
        }
      }
    }
  }
`
