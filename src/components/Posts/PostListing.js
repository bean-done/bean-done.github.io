import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <span>{post.frontmatter.date}</span>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <div>{post.excerpt}</div>
    {/* <div
      dangerouslySetInnerHTML={{
        __html: post.html,
      }}
    /> */}
  </article>
)

export default PostListing
