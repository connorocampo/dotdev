import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

// Media

import AvatarBitmoji from "../assets/images/AvatarBitmoji.png"
import BookCover from "../assets/images/BookCover.jpeg"

const Heading = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
`

const PostCount = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 75px;
`

const PostTitle = styled.h3`
  color: #0f0d16;
  margin-bottom: 15px;
`

const Excerpt = styled.p`
  color: #0f0d16;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 15px;
`

const AboutTheAuthorBlurb = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  margin: 0 auto;
`

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #0f0d16;
  height: 200px;
  margin-bottom: 50px;
  width: 200px;
`

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

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
          </Helmet>
          <Header />
          <div className="blog-container">
            <div className="articles">
              <Heading className="page-title">Articles</Heading>
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
                      <span className="is-gradient h4 blog-list-read-more">
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

            <div className="sidebar">
              <div className="about-the-author-card">
                <Image src={AvatarBitmoji} alt="Connor Ocampo" />
                <p className="h4" style={{ marginBottom: " 30px" }}>
                  About the Author
                </p>
                <AboutTheAuthorBlurb>
                  Hey, I’m Connor Ocampo. I’m a self-taught front-end developer
                  based in Boca Raton, FL. I enjoy long bike rides on the
                  pavement, really nice people, and oxford commas.
                </AboutTheAuthorBlurb>
              </div>
              {/* /.about-the-author-card  */}

              <div className="book">
                <a
                  href="https://leanpub.com/firstyearincode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-book"
                >
                  <img
                    src={BookCover}
                    alt="Your First Year in Code Book"
                    style={{ height: "450px", width: "350px" }}
                  />
                </a>
                <p
                  className="book-text"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.5",
                    marginTop: "25px",
                    marginBottom: "305px",
                  }}
                >
                  A complete guide for new and aspiring developers
                </p>
              </div>
            </div>
            {/* /.sidebar */}
          </div>
          {/* /.blog-container */}
          <Footer />
        </Layout>
      </ThemeProvider>
    )
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
`
