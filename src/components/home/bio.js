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
  height: calc(100vh - 100px);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 20px;
  text-align: center;
`

export const Blurb = styled.p`
  font-size: 36px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
`

/*
 * Component
 */

class Bio extends React.Component {
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
            I<span className="is-animated-gradient">code</span>, and{" "}
            <span className="is-animated-gradient">optimize</span> modern
            websites.
          </Blurb>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Bio
