import React from "react";
import styled from "styled-components";

// Media
import ProjectPortfolio from "../../assets/images/ProjectPortfolio.png";
import ProjectWPBinge from "../../assets/images/ProjectWPBinge.png";
import ProjectDotcom from "../../assets/images/ProjectDotcom.png";
import ProjectDashboard from "../../assets/images/ProjectDashboard.png";
import ProjectDarkMode from "../../assets/images/ProjectDarkMode.png";
import ProjectDroneWorld from "../../assets/images/ProjectDroneWorld.png";

/*
 * Styles
 */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0;
  padding: 0 1em;
`;

export const RecentWorkText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  max-width: 1250px;
`;

export const Image = styled.img`
  border-radius: 15px;
  box-shadow: 8px 8px 8px rgba(128, 128, 128, 0.1);
  height: 200px;
  margin: 1em;
  width: 375px;
`;

/*
 * Component
 */

class RecentWork extends React.Component {
  render() {
    return (
      <Container>
        <h2 className="recent-work-header" style={{ marginBottom: "50px" }}>
          My Recent Projects
        </h2>
        <RecentWorkText className="recent-work-text">
          Here are a few recent front-end development projects.
        </RecentWorkText>
        <ImageContainer className="work-image-container">
          <a
            href="https://connorocampo.github.io/dark-mode-example/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectDarkMode}
                alt="Simple To Do List React App."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Example of Dark Mode Toggle Button using HTML, CSS, and JS.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://connorocampo.dev/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectPortfolio}
                alt="Front-end Developer Portfolio builts on GatsbyJS."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Developer Portfolio built with GatsbyJS, hosted on Netlify,
                  using Netlify CMS.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://wpbinge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectWPBinge}
                alt="Custom WordPress theme"
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Custom WordPress theme for a WordPress blog.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://connorocampo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectDotcom}
                alt="Personal WordPress blog."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Custom WordPress theme for my personal blog.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://connorocampo.github.io/lorem-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectDashboard}
                alt="A pure HTML and CSS responsive dashboard with lorem text."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Pure HTML & CSS responsive dashboard with lorem text.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://connorocampo.github.io/drone-world/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectDroneWorld}
                alt="A single page company product page."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  Landing page site for Drone World Reviews.
                </p>
              </div>
            </div>
          </a>
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div className="recent-work-border-gradient-outline">
            <a
              href="https://github.com/connorocampo"
              className="gradient-btn recent-work-border-gradient-fill-light gradient-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github is-black"
                style={{
                  marginRight: "5px",
                }}
              ></i>

              <span className="is-gradient">View code in GitHub</span>
            </a>
          </div>
        </span>
      </Container>
    );
  }
}

export default RecentWork;
