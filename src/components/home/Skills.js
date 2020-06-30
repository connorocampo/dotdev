import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themeSettings from "../../components/base/settings";

/*
 * Styles
 */

export const Container = styled.div`
  border-bottom: 1px solid #dae1e7;
  padding: 100px 0;
`;

export const Header = styled.h2`
  margin-bottom: 100px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 36px;
    padding: 0px;
  }
`;

export const Columns = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ColumnHeader = styled.h3`
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const List = styled.ul`
  max-width: 350px;
`;

export const ListItem = styled.li`
  font-size: 24px;
  margin: 20px auto;
  margin-left: 25px;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    list-style: none;
    text-align: center;
  }
`;

/*
 * Component
 */

class Skills extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Header>Skills & Technology</Header>
          <Columns className="skills-columns">
            <div className="column">
              <ColumnHeader>Code</ColumnHeader>
              <List>
                <ListItem>GIT</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>Flexbox</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>GatsbyJS</ListItem>
                <ListItem>WordPress/MAMP</ListItem>
              </List>
            </div>
            <div className="column">
              <ColumnHeader>Dev Tools</ColumnHeader>
              <List>
                <ListItem>VS Code</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>Netlify</ListItem>
                <ListItem>Google Analytics</ListItem>
                <ListItem>Figma</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Canva</ListItem>
                <ListItem>Excalidraw</ListItem>
              </List>
            </div>
          </Columns>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Skills;
