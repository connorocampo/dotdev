import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../components/base/settings"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import PostsList from "../components/PostList"
import Footer from "../components/base/Footer"

const Heading = styled.div`
  font-family: "Open Sans Heavy";
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <ThemeProvider theme={themeSettings}>
      <Layout location={location} title={`Posts in category "${category}"`}>
        <Helmet>
          <title>{category} | Connor Ocampo's Website</title>
          <meta
            name="Connor Ocampo's Website"
            content="Connor Ocampo's Website"
          />
          <meta name="theme-color" content="#0090D9" />
          <meta
            name="description"
            content="The category page for Connor Ocampo's website."
          />
        </Helmet>
        <Header />
        <div>
          {/* <SEO title={`Posts in category "${category}"`} /> */}

          <div style={{ marginBottom: "100px" }}>
            <Heading>{category}</Heading>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            <PostsList postEdges={data.allMarkdownRemark.edges} />
          </div>
        </div>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt(pruneLength: 280)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryTemplate
