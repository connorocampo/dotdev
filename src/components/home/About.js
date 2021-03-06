import React from "react";
import styled from "styled-components";

/*
 * Styles
 */

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 1em;
`;

export const AboutText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  line-height: 1.5;
  max-width: 1000px;
  text-align: center;
`;

/*
 * Component
 */

class About extends React.Component {
  render() {
    return (
      <Section className="is-black-bg">
        <h2
          className="is-white about-header-mobile"
          style={{
            paddingBottom: "50px",
            textAlign: "center",
          }}
        >
          About Me
        </h2>
        <AboutText className="is-white about-text-mobile">
          I'm a self-taught Front-end Developer based in South Florida where we
          have two seasons: hot and hotter{" "}
          <span role="img" aria-label="fire emoji">
            🔥
          </span>
          . Currently, I am learning more about JavaScript, Spanish, and music.
        </AboutText>
      </Section>
    );
  }
}

export default About;
