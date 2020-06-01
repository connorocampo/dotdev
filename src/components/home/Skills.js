import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import themeSettings from "../../components/base/settings"

// Images
import Design from "../../assets/images/icons/design.svg"
import Dev from "../../assets/images/icons/dev.svg"
import Marketing from "../../assets/images/icons/marketing.svg"

/*
 * Styles
 */

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Columns = styled.div`
  align-items: center;
  background: #ffffff;
  border: 1px solid #dae1e7;
  border-radius: 25px;
  display: flex;
  margin-top: -300px;
  margin-bottom: 200px;
  max-width: 1200px;
  text-align: center;
`

export const Icon = styled.img`
  padding-bottom: 75px;
`

export const ColumnHeader = styled.h4`
  margin-bottom: 50px;
`

export const ColumnText = styled.p`
  font-size: 24px;
  max-width: 350px;
  padding: 0 25px;
`

export const List = styled.ul`
  padding: 0 25px;
  max-width: 350px;
`

export const ListItem = styled.li`
  font-size: 24px;
  list-style: none;
  margin: 20px 0;
`

/*
 * Component
 */

class Skills extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeSettings}>
        <Container>
          <Columns className="has-box-shadow skills-columns">
            <div className="column column-1">
              <Icon src={Dev} alt="development icon" />
              <ColumnHeader>Front-end Development</ColumnHeader>
              <ColumnText style={{ marginBottom: "30px" }}>
                <span className="regular-fw">I am proficient</span> in HTML,
                CSS, Flexbox, CSS Grids, media queries, and custom CSS & SVG
                animations.
              </ColumnText>
              <ColumnText style={{ marginBottom: "75px" }}>
                <span className="regular-fw">I am familiar</span> with
                WordPress, JavaScript, jQuery, React, Gatsby, and GraphQL.
              </ColumnText>
              <ColumnHeader>Dev Tools</ColumnHeader>
              <List style={{ marginBottom: "30px" }}>
                <ListItem>GIT</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>VS Code</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Netlify</ListItem>
                <ListItem>Heroku</ListItem>
              </List>
            </div>
            <hr className="hr-border" />
            <div className="column column-2">
              <Icon src={Marketing} alt="marketing/seo icon" />
              <ColumnHeader>Marketing/SEO</ColumnHeader>
              <ColumnText style={{ marginBottom: "30px" }}>
                Most of my marketing/seo work consists of optimizing articles,
                and reporting/improving analytics.
              </ColumnText>
              <ColumnText style={{ marginBottom: "75px" }}>
                I also have experience launching and growing organic social
                media campaigns.
              </ColumnText>
              <ColumnHeader>Marketing Tools</ColumnHeader>
              <List style={{ marginBottom: "30px" }}>
                <ListItem>Google Analytics</ListItem>
                <ListItem>Search Console</ListItem>
                <ListItem>Yoast</ListItem>
                <ListItem>SEMrush</ListItem>
                <ListItem>Hootsuite</ListItem>
                <ListItem>MailChimp</ListItem>
              </List>
            </div>
            <div className="column column-3">
              <Icon src={Design} alt="design icon" />
              <ColumnHeader className="video-design-heading">
                Video/Design
              </ColumnHeader>
              <ColumnText style={{ marginBottom: "30px" }}>
                I enjoy learning, designing, and experimenting with simple,
                modern, and intuitive design for desktop and mobile devices.
              </ColumnText>
              <ColumnText style={{ marginBottom: "75px" }}>
                I also enjoy learning more about video production software to
                create impactful films.
              </ColumnText>
              <ColumnHeader>Video/Design Tools</ColumnHeader>
              <List style={{ marginBottom: "30px" }}>
                <ListItem>DaVinci Resolve</ListItem>
                <ListItem>Figma</ListItem>
                <ListItem>Sketch</ListItem>
                <ListItem>Abstract</ListItem>
                <ListItem>Photoshop</ListItem>
                <ListItem>Paper & Pencil</ListItem>
              </List>
            </div>
          </Columns>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Skills
