import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"

// Components
import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Sidebar from "../components/base/Sidebar"
import Footer from "../components/base/Footer"

// Media

import favicon from "../../static/favicon.ico"

export const PostTitle = styled.h1`
  margin-bottom: 15px;
`
export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #0f0d16;
  height: 200px;
  margin-bottom: 50px;
  width: 200px;
`

export const AboutTheAuthorBlurb = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  line-height: 1.5;
`

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <ThemeProvider theme={themeSettings}>
      <Layout>
        <Helmet>
          <title>{post.frontmatter.title} | Connor Ocampo's Website</title>
          <meta
            name="{frontmatter.title} | Connor Ocampo's Website"
            content="Blog | About Connor Ocampo's Website"
          />
          <meta name="theme-color" content="#0090D9" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <Header />
        <div className="blog-post-container">
          <div className="article">
            <PostTitle className="blog-post-title">
              {post.frontmatter.title}
            </PostTitle>
            <p className="post-subtitle">
              {post.frontmatter.date} - {post.timeToRead} min read
            </p>
            {/* <span className="tags">{post.frontmatter.tags}</span> */}
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              style={{
                marginTop: "50px",
                marginBottom: "50px",
              }}
              className="article-content"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "100px",
              }}
              className="pagination"
            >
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className="btn btn-secondary blog-post-pagination-btn"
                  style={{
                    background: "#FAFBFC",
                    borderRadius: "25px",
                    border: "1px solid #DAE1E7",
                    color: "#474747",
                    marginBottom: "100px",
                    maxWidth: "325px",
                    padding: "10px 25px",
                    textDecoration: "none",
                  }}
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}

              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  className="btn btn-secondary blog-post-pagination-btn"
                  style={{
                    background: "#FAFBFC",
                    borderRadius: "25px",
                    border: "1px solid #DAE1E7",
                    color: "#474747",
                    marginBottom: "100px",
                    maxWidth: "325px",
                    padding: "10px 25px",
                    textDecoration: "none",
                  }}
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </div>
          </div>
          {/* /.article */}

          <Sidebar />
        </div>
        {/* /.blog-post-container */}

        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
      timeToRead
    }
  }
`
