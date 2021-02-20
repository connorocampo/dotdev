import React from "react";
import styled from "styled-components";

import "../../assets/styles/footer.css";

// Images
import email from "../../assets/images/icons/email.svg";

/*
 * Styles
 */

export const Container = styled.div`
  background: #f4f4f4;
`;

export const CTA = styled.div`
  align-items: center;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 60px 0;
`;

export const Copyright = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  margin: 0 auto;
  margin-top: -50px;
  max-width: 1200px;
  padding: 0 1em;
  padding-bottom: 50px;
  @media screen and (max-width: 735px) {
    flex-direction: column;
  }
`;

/*
 * Component
 */

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <CTA className="is-black-bg is-white cta-container">
          <h2
            style={{ fontSize: "36px" }}
            className="footer-padding-left footer-header-mobile"
          >
            Contact Connor
          </h2>
          <p
            className="footer-text-mobile"
            style={{ textAlign: "center", width: "235px" }}
          >
            Contact via carrier pigeon is preferred, though an email will
            suffice.
          </p>
          <span className="footer-padding-right">
            <div className="border-gradient-outline">
              <a
                href="mailto:connorocampo@gmail.com"
                className="gradient-btn border-gradient-fill-dark gradient-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={email}
                  alt="email icon"
                  style={{ marginRight: "10px", marginBottom: "-2px" }}
                />
                Send an email
              </a>
            </div>
          </span>
        </CTA>
        <Copyright>
          <p>Made with {"<3"} by me.</p>
          <span
            className="social-media-mobile"
            style={{ marginLeft: "-100px" }}
          >
            <a
              href="https://github.com/connorocampo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github footer-icons"></i>
            </a>
            <a
              href="https://codepen.io/connorocampo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen footer-icons"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/connorocampo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin footer-icons"></i>
            </a>
            <a
              href="https://twitter.com/connorocampo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter footer-icons"></i>
            </a>
          </span>
          <p>© 2021.</p>
        </Copyright>
      </Container>
    );
  }
}

export default Footer;
