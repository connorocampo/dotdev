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
  height: 650px;
  padding: 100px 0;
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
            <h1>Skills and Technology</h1>
            <p>
              Tabs are kind of cool I guess. They're kind of like, super fast
              for displaying content and stuff. Feel welcome to lurk and copy my
              code to play around with it for your own projects.
            </p>
          </div>

          <div id="education" className="content-page">
            <h1>Certificates and Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>Sam Smith</li>
              <li>Alicia Keys</li>
              <li>Etta James</li>
            </ul>
            <p>
              Atque exercitationem, minima accusamus maiores blanditiis
              provident dicta suscipit! Dolorum deserunt veritatis doloremque,
              laudantium quasi placeat autem!
            </p>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Skills;
