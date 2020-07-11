import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themeSettings from "../../components/base/settings";

/*
 * Styles
 */

import "../../assets/styles/tabs.css";

export const Container = styled.div`
  border-bottom: 1px solid #dae1e7;
  height: 950px;
  margin: 0 1em;
  padding: 100px 0;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

export const Header = styled.h2`
  margin-bottom: 100px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 36px;
    padding: 0px;
    margin-bottom: 50px;
  }
`;

export const Columns = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
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

export const EducationHeader = styled.h3`
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const List = styled.ul`
  margin-bottom: 50px;
  max-width: auto;
  }
`;

export const ListItem = styled.li`
  font-size: 24px;
  margin: 5px auto;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    list-style: none;
    text-align: center;
  }
`;

export const ListItemEducation = styled.li`
  font-size: 24px;
  margin: 5px auto;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    list-style: none;
  }
`;

/*
 * Component
 */

class Skills extends React.Component {
  // Show or hide page content on click event
  openHome = (event) => {
    let i, contentButton;

    // Loop through and hide page content
    let contentPage = document.getElementsByClassName("content-page");
    for (i = 0; i < contentPage.length; i++) {
      contentPage[i].style.display = "none";
    }

    // Loop through content buttons and replace the active class to empty
    contentButton = document.getElementsByClassName("content-button");
    for (i = 0; i < contentButton.length; i++) {
      contentButton[i].className = contentButton[i].className.replace(
        "active",
        ""
      );
    }

    // Loop through HTML id's to show the element with an active class during and event
    document.getElementById("skills").style.display = "block";
    // event.currentTarget.className += " active";

    // Set skills button as default active page content
    let skillsButton = document.getElementById("active-button");
    skillsButton.className += " active";
  };

  // Show or hide page content on click event
  openEducation = (event) => {
    let i, contentButton;

    // Loop through and hide page content
    let contentPage = document.getElementsByClassName("content-page");
    for (i = 0; i < contentPage.length; i++) {
      contentPage[i].style.display = "none";
    }

    // Loop through content buttons and replace the active class to empty
    contentButton = document.getElementsByClassName("content-button");
    for (i = 0; i < contentButton.length; i++) {
      contentButton[i].className = contentButton[i].className.replace(
        "active",
        ""
      );
    }

    // Loop through HTML id's to show the element with an active class during and event
    document.getElementById("education").style.display = "block";

    // Add active class to education button
    let educationButton = document.getElementById("education-button");
    educationButton.className += " active";
  };

  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Header>What I'ved Used and Studied</Header>
          <div className="navigation-container">
            <button
              onClick={this.openHome.bind(this.event, "skills")}
              className="content-button active"
              id="active-button"
            >
              Skills and Technology
            </button>
            <button
              onClick={this.openEducation.bind(this.event, "education")}
              className="content-button"
              id="education-button"
            >
              Certificates and Education
            </button>
          </div>

          <div id="skills" className="content-page active-section">
            <h2>Skills and Technology</h2>
            <Columns className="skills-columns">
              <div>
                <ColumnHeader>Code</ColumnHeader>
                <List>
                  <ListItem>GIT</ListItem>
                  <ListItem>HTML</ListItem>
                  <ListItem>CSS</ListItem>
                  <ListItem>Flexbox</ListItem>
                  <ListItem>CSS Grid</ListItem>
                  <ListItem>JavaScript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>GatsbyJS</ListItem>
                  <ListItem>WordPress/MAMP</ListItem>
                </List>
              </div>
              <div>
                <ColumnHeader>Tools</ColumnHeader>
                <List style={{ marginBottom: "0" }}>
                  <ListItem>VS Code</ListItem>
                  <ListItem>GitHub</ListItem>
                  <ListItem>Netlify</ListItem>
                  <ListItem>Netlify CMS</ListItem>
                  <ListItem>Google Analytics</ListItem>
                  <ListItem>Figma</ListItem>
                  <ListItem>Photoshop</ListItem>
                  <ListItem>Canva</ListItem>
                  <ListItem>Excalidraw</ListItem>
                </List>
              </div>
            </Columns>
          </div>

          <div id="education" className="content-page">
            <h2>Certificates and Education</h2>
            <Columns className="skills-columns">
              <div>
                <ColumnHeader>Certificates</ColumnHeader>
                <List>
                  <ListItemEducation>
                    <em>
                      <b>Google Analytics for Beginners</b>
                    </em>
                    , Google
                  </ListItemEducation>
                  <ListItemEducation>
                    <em>
                      <b>Responsive Web Design</b>
                    </em>
                    , freeCodeCamp
                  </ListItemEducation>
                  <ListItemEducation>
                    <em>
                      <b>HTML, CSS, and JS Fundamentals</b>
                    </em>
                    , SoloLearn
                  </ListItemEducation>
                  <ListItemEducation>
                    <em>
                      <b>SEO Fundamentals</b>
                    </em>
                    , SEMrush
                  </ListItemEducation>
                </List>
              </div>
            </Columns>
            <EducationHeader>Education</EducationHeader>
            <p className="education-text">
              In 2016, I earned my Bachelor of Science Degree in Sports and
              Exercise Science from the University of Central Florida. Soon
              after graduating, I picked up an interest in web development and
              launched my first site in the same year. Since then, I've went on
              to gain employment in tech roles and I continue to learn more
              about web development every day.
            </p>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Skills;
