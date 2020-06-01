import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from 'styled-components';

const PostTitle = styled.div`
  font-family: 'Inter Black', 'Open Sans';
  font-size: ${props => props.theme.size.headerMedium};
`;

const PostsListCard = ({ timeToRead, frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug

  return (
    <div>
      <div style={{ margin: "25px 0" }}>
        <PostTitle>{title}</PostTitle>
        <p className="post-subtitle">
          {frontmatter.date} - {timeToRead} min read
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}

          style={{ margin: "25px 0" }}
        />
        <Link to={`/${fields.slug}/`}>
          Read More &rarr;
        </Link>
      </div>
        <hr style={{ border: "1px solid #eeeeee" }} />
    </div>
  )
}

export default PostsListCard

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 280)
          timeToRead
        }
      }
    }
  }
`