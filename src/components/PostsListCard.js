import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import styled from "styled-components";

const PostTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.theme.size.medium};
`;

const PostsListCard = ({ timeToRead, frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug;

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
        <Link
          to={`/${fields.slug}/`}
          className="is-gradient blog-list-read-more"
        >
          Read More &rarr;
        </Link>
      </div>
      <hr style={{ border: "1px solid #eeeeee" }} />
    </div>
  );
};

export default PostsListCard;

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
`;
