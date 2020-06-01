import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

import ByeCat from "../assets/images/ByeCat.gif"

const Heading = styled.h1`
  font-family: "Inter Black", "Open Sans Heavy";
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`

export const Image = styled.img`
  margin-bottom: 100px;
  max-width: 700px;
`

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>404 Error | Connor Ocampo's Website</title>
        <meta
          name="404 Error | Connor Ocampo's Website"
          content="404 Error | Connor Ocampo's Website"
        />
        <meta name="theme-color" content="#0090D9" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      <Heading className="page-title">404 Error</Heading>
      <p>
        Whoops! The page you are looking for does not exist. Feel free to stay
        distracted by watching this looping cat gif or use the navigation
        buttons above to get back to the site.
      </p>
      <Image
        src={ByeCat}
        alt="A cat dissapearing in a box"
        className="bye-cat"
      />
      <Footer />
    </Layout>
  </ThemeProvider>
)
