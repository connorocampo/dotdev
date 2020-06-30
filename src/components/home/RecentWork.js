import React from "react";
import styled from "styled-components";

// Media
import ProjectWPBinge from "../../assets/images/ProjectWPBinge.png";
import ProjectDotcom from "../../assets/images/ProjectDotcom.png";
import ProjectDashboard from "../../assets/images/ProjectDashboard.png";
import ProjectToDo from "../../assets/images/ProjectToDo.png";
import ProjectDroneWorld from "../../assets/images/ProjectDroneWorld.png";
import ProjectCharmCity from "../../assets/images/ProjectCharmCity.png";

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
          My Recent Work
        </h2>
        <RecentWorkText className="recent-work-text">
          Here are a few recent front-end development projects.
        </RecentWorkText>
        <ImageContainer className="work-image-container">
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

          <a
            href="https://connorocampo.github.io/flexbox-fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectCharmCity}
                alt="A redesign for Charm City Burger's website."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">
                  An "updated" design for Charm City Burger's current website.
                </p>
              </div>
            </div>
          </a>

          {/* <a
            href="https://connors-mailchimp-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectMailchimp}
                alt="Mailchimp Email Signup app using Mailchimp API."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">
                  Mailchimp Email Signup app using Mailchimp API.
                </p>
              </div>
            </div>
          </a> */}

          <a
            href="https://connorocampo.github.io/react-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={ProjectToDo}
                alt="Simple To Do List React App."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p className="overlay-text">Simple To Do List React App.</p>
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
                  marginRight: "10px",
                }}
              ></i>

              <span className="is-gradient">View code in GitHub</span>
            </a>
          </div>
        </span>
        {/* <RecentWorkText>Here are a few recent design projects.</RecentWorkText>
        <ImageContainer className="work-image-container">
          <a
            href="https://connorocampo.github.io/website/static/DesignArticles-46a7f98ca0e8cbe20381c3aa4f5de2d0.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={DesignArticles}
                alt="A ficticious web development agency mockup."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">Article layout for this website :)</p>
              </div>
            </div>
          </a>
          <a
            href="https://connorocampo.github.io/website/static/DesignOne-3104bd0340aebe581a7401e7a45418db.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={DesignSAL}
                alt="A ficticious web development agency mockup."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">
                  A ficticious web development agency mockup.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://connorocampo.github.io/website/static/DesignModernizingMedicine-0529420cd91e73468b0d0600925981e4.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={trial}
                alt="Standard letter-sized brochure mockup for Modernizing
                Medicine."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">
                  Standard letter-sized brochure mockup for Modernizing
                  Medicine.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://connorocampo.github.io/website/static/DesignCharles-ce4541de4767562dcac592ce874099f8.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={DesignCharles}
                alt="Portfolio website for my brother."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">Portfolio website for my brother.</p>
              </div>
            </div>
          </a>
          <a
            href="https://connorocampo.github.io/sibling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={DesignSibling}
                alt="A design to code project from a Dribbble graphic."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">
                  A design to code project from a Dribbble graphic.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://connorocampo.github.io/vans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay-container">
              <Image
                src={DesignVans}
                alt="A design to code project from a Vans Dribbble graphic."
                className="image-hover work-image-mobile project-image"
              />
              <div className="overlay">
                <p class="overlay-text">
                  A design to code project from a Vans Dribbble graphic.
                </p>
              </div>
            </div>
          </a>
        </ImageContainer>
        <span style={{ marginBottom: "200px" }}>
          <div class="dribbble-border-gradient-outline">
            <a
              href="https://dribbble.com/connorocampo"
              className="gradient-btn dribbble-border-gradient-fill-light gradient-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dribbble}
                alt="dribbble icon"
                style={{
                  marginRight: "10px",
                  height: "28px",
                }}
              />
              <span className="is-gradient">View more in Dribbble</span>
            </a>
          </div>
        </span> */}
      </Container>
    );
  }
}

export default RecentWork;
