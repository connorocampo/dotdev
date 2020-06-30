import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Images
import logo from "../../assets/images/icons/logo.svg";
import email from "../../assets/images/icons/email.svg";

// Styles

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1em;
  max-width: 1200px;
`;

export const NavItems = styled.span`
  font-size: ${(props) => props.theme.size.bodySmall};
  @media screen and (max-width: 600px) {
    text-decoration: underline;
  }
`;

// Component

class Header extends React.Component {
  render() {
    return (
      <Container className="header-container">
        <span className="brand-container">
          <Link to="/" className="brand">
            <img src={logo} alt="Connor Ocampo" />
          </Link>
        </span>
        <NavItems className="nav-items navbar-nav">
          <a
            href="https://connorocampo.com/wp-content/uploads/2020/06/Connor-Ocampo-Resume.pdf"
            className="is-black nav-item articles-link-hide"
            target="_blank"
            rel="noreferrer"
            download
          >
            Resume
          </a>
          <Link to="/blog/" className="is-black nav-item articles-link-hide">
            Blog
          </Link>
          <a
            href="mailto:connorocampo@gmail.com"
            className="is-black nav-item desktop-contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={email}
              alt="email icon"
              className="email-icon"
              style={{
                marginRight: "10px",
                marginBottom: "-2px",
              }}
            />
            Contact
          </a>
        </NavItems>
      </Container>
    );
  }
}

export default Header;
