import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themeSettings from "../../components/base/settings";

// Imports

import "../../assets/styles/main.css";

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
  @media screen and (max-width: 735px) {
    margin-top: 10px;
  }
`;

export const BioContent = styled.div`
  margin-top: -100px;
  @media screen and (max-width: 735px) {
    margin-top: 0px;
  }
`;

export const Tagline = styled.h1`
  color: #0f0d16;
  line-height: 1;
  margin-bottom: 20px;
  margin-left: -3px;
  @media screen and (max-width: 735px) {
    font-size: 42px;
  }
`;

export const Blurb = styled.span`
  font-size: 18px;
`;

/*
 * Component
 */

class Hero extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container className="bio-container">
          <BioContent>
            <Blurb>Front-end Developer</Blurb>
            <Tagline>Connor Ocampo</Tagline>
          </BioContent>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Hero;
