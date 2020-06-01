import React from "react"
import styled from "styled-components"

/*
 * Styles
 */

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em 300px 1em;
`

export const AboutText = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  line-height: 1.5;
  max-width: 1000px;
  text-align: center;
`

/*
 * Component
 */

class About extends React.Component {
  render() {
    return (
      <Section className="is-black-bg" style={{ marginBottom: "100px" }}>
        <h2
          className="is-white about-header-mobile"
          style={{
            paddingTop: "100px",
            paddingBottom: "50px",
            textAlign: "center",
          }}
        >
          About Me
        </h2>
        <AboutText className="is-white about-text-mobile">
          I'm a self-taught Front-end Developer who enjoys focusing on the
          design aspect of development. Professionally, I have a history of work
          in front-end development and search engine optimization (SEO).
        </AboutText>
      </Section>
    )
  }
}

export default About
