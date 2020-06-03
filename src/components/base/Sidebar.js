import React from "react"
import styled from "styled-components"

// Media

import BookCover from "../../assets/images/BookCover.jpeg"
import AvatarBitmoji from "../../assets/images/AvatarBitmoji.png"

/*
 * Styles
 */

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #0f0d16;
  height: 200px;
  margin-bottom: 50px;
  width: 200px;
`

const AboutTheAuthorBlurb = styled.p`
  font-family: "Rubik Light", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  margin: 0 auto;
`

/*
 * Component
 */

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="about-the-author-card">
          <Image src={AvatarBitmoji} alt="Connor Ocampo" />
          <p className="h4" style={{ marginBottom: " 30px" }}>
            About the Author
          </p>
          <AboutTheAuthorBlurb>
            Hey, I’m Connor Ocampo. I’m a self-taught front-end developer based
            in Boca Raton, FL. I enjoy long bike rides on the pavement, really
            nice people, and oxford commas.
          </AboutTheAuthorBlurb>
        </div>
        {/* /.about-the-author-card  */}

        <div className="book">
          <a
            href="https://leanpub.com/firstyearincode"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-book"
          >
            <img
              src={BookCover}
              alt="Your First Year in Code Book"
              style={{ height: "400px", width: "300px" }}
            />
          </a>
          <p
            className="book-text"
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              marginTop: "25px",
              marginBottom: "305px",
            }}
          >
            A complete guide for new and aspiring developers
          </p>
        </div>
      </div>
    )
  }
}

export default Sidebar
