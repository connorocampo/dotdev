import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

// Imports

// import AvatarBitmoji from "../../assets/images/AvatarBitmoji.png"
import "../../assets/styles/main.css"

/*
 * Styles
 */

export const Container = styled.div`
  // background: pink;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(97vh - 100px);
  padding: 0 1em;
`

// export const Image = styled.img`
//   border-radius: 50%;
//   border: 5px solid #0f0d16;
//   height: 200px;
//   margin-top: -100px;
//   margin-bottom: 30px;
//   width: 200px;
// `

export const Tagline = styled.h1`
  color: #0f0d16;
  line-height: 1;
  margin-bottom: 20px;
  margin-left: -3px;
  @media screen and (max-width: 735px) {
    font-size: 42px;
  }
`

export const Blurb = styled.span`
  // font-size: 36px;
  font-size: 18px;
`

/*
 * Component
 */

class Hero extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container className="bio-container">
          {/* <Image
            src={AvatarBitmoji}
            alt="Connor Ocampo"
            className="bio-thumbnail"
          /> */}
          <div style={{ marginTop: "-100px" }}>
            <Blurb>Front-end Developer</Blurb>
            <Tagline>Connor Ocampo</Tagline>
          </div>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Hero
