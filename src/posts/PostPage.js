import React, { Component } from 'react'
import Link from 'gatsby-link'

class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <article>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </article>
    )
  }
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
