import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"

import themeSettings from "../components/base/settings"

// Stylesheets

import "../assets/styles/main.css"
import "../assets/styles/header.css"
import "../assets/styles/footer.css"

// Components

import favicon from "../../static/favicon.ico"
import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Skills from "../components/home/Skills"
import RecentWork from "../components/home/RecentWork"
import Footer from "../components/base/Footer"

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="Connor Ocampo | Front-end Developer"
          content="Connor Ocampo | Front-end Developer"
        />
        <meta name="theme-color" content="#0090D9" />
        <meta
          name="description"
          content="The home page for Connor Ocampo's website."
        />
        <link rel="icon" href={favicon} />
        <script
          src="https://kit.fontawesome.com/2641fe0f3e.js"
          crossorigin="anonymous"
        ></script>

        {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Skills />
      <RecentWork />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
