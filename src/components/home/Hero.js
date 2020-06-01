import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

// Images

import AvatarBitmoji from "../../assets/images/AvatarBitmoji.png"

import "../../assets/styles/main.css"

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(97vh - 100px);
  padding: 0 1em;
`

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #0f0d16;
  height: 200px;
  margin-top: -100px;
  margin-bottom: 30px;
  width: 200px;
`

export const Tagline = styled.h1`
  font-family: "Rubik Bold";
  margin-bottom: 20px;
  text-align: center;
`

export const Blurb = styled.p`
  font-size: 36px;
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
`

/*
 * Component
 */

class Hero extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container className="bio-container">
          <Image
            src={AvatarBitmoji}
            alt="Connor Ocampo"
            className="bio-thumbnail"
          />
          <Tagline className="is-black bio-tagline">
            Front-end Developer
          </Tagline>
          <Blurb className="bio-blurb">
            Hey, I'm Connor. I{" "}
            <span className="is-animated-gradient">code</span> modern websites.
          </Blurb>
          {/* <a
            href="mailto:connorocampo@gmail.com"
            className="is-black nav-item mobile-contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={email}
              alt="email icon"
              style={{ marginRight: "10px", marginBottom: "-1.5px" }}
            />
            Contact
          </a> */}
        </Container>
      </ThemeProvider>
    )
  }
}

export default Hero
