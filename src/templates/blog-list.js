import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import themeSettings from "../components/base/settings";
import favicon from "../../static/favicon.ico";

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Sidebar from "../components/base/Sidebar";
import Footer from "../components/base/Footer";

const Heading = styled.h1`
  font-weight: 800;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const PostCount = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 75px;
`;

const PostTitle = styled.h3`
  color: #0f0d16;
  font-weight: 800;
  margin-bottom: 15px;
`;

const Excerpt = styled.p`
  color: #0f0d16;
  font-size: 24px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString();
    const nextPage = "/blog/" + (currentPage + 1).toString();

    return (
      <ThemeProvider theme={themeSettings}>
        <Layout>
          <Helmet>
            <title>Articles | Connor Ocampo's Website</title>
            <meta
              name="Articles | Connor Ocampo's Website"
              content="Articles | Blog Connor Ocampo's Website"
            />
            <meta name="theme-color" content="#0090D9" />
            <link rel="icon" href={favicon} />
            <script
              src="https://kit.fontawesome.com/2641fe0f3e.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <Header />
          <div className="blog-container">
            <div className="articles">
              <Heading>Articles</Heading>
              <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>

              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                  <div
                    style={{ margin: "25px 0" }}
                    className="articles-content"
                  >
                    <Link
                      to={node.fields.slug}
                      style={{ textDecoration: "none", color: "#474747" }}
                    >
                      <PostTitle>{node.frontmatter.title} </PostTitle>

                      <p className="post-subtitle">
                        {node.frontmatter.date} - {node.timeToRead} min read
                      </p>
                    </Link>
                    <Excerpt>{node.excerpt}</Excerpt>
                    <Link to={node.fields.slug}>
                      <span className="is-gradient blog-list-read-more">
                        Read More &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "50px 0 100px 0",
                }}
                className="pagination"
              >
                {!isFirst && (
                  <Link
                    to={prevPage}
                    rel="prev"
                    className="pagination-blog-list-mobile"
                    style={{
                      background: "#FAFBFC",
                      borderRadius: "25px",
                      border: "1px solid #DAE1E7",
                      color: "#474747",
                      marginBottom: "100px",
                      padding: "10px 25px",
                      textDecoration: "none",
                    }}
                  >
                    ← Previous Page
                  </Link>
                )}
                {!isLast && (
                  <Link
                    to={nextPage}
                    rel="next"
                    className="pagination-blog-list-mobile"
                    style={{
                      background: "#FAFBFC",
                      borderRadius: "25px",
                      border: "1px solid #DAE1E7",
                      color: "#474747",
                      marginBottom: "100px",
                      padding: "10px 25px",
                      textDecoration: "none",
                    }}
                  >
                    Next Page →
                  </Link>
                )}
              </div>
            </div>
            {/* /.articles */}

            <Sidebar />
          </div>
          {/* /.blog-container */}
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 280)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`;
