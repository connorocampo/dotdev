import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

import "../assets/styles/header.css"

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const Heading = styled.h1`
  font-size: ${props => props.theme.size.headerBig};
  font-weight: ${props => props.theme.weight.heavy};
  margin: 100px 0;
`;

const Subheading = styled.div`
  font-size: ${props => props.theme.size.headerMedium};
  font-weight: ${props => props.theme.weight.heavy};
  margin: 25px 0;
`;

const Text = styled.p`
  font-size: ${props => props.theme.size.bodyMedium};
  line-height: 2;
`;

// Styles

export default () => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Privacy Policy | Connor Ocampo's Website</title>
        <meta name="Privacy Policy | Connor Ocampo's Website" content="Privacy Policy | Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <meta name="description" content="The privacy policy page for Connor Ocampo's website." />
      </Helmet>
      <Header />
      <Heading>Privacy Policy and Disclaimer</Heading>
      <Text>
        <Subheading>Privacy Policy for https://connorocampo.github.io/website/</Subheading>
        At https://connorocampo.github.io/website/, we recognize that privacy of your personal information is important. Here is information on what types of personal information we receive and collect when you use and visit https://connorocampo.github.io/website/, and how we safeguard your information. We never sell your personal information to third parties.

        <Subheading>Who we are</Subheading>
        Our website address is: https://connorocampo.github.io/website/.  This site is owned an operated by Connor Ocampo, a sole proprietor in the state of Florida in the United States.  He can be reached at cmosofla@gmail.com.

        What personal data we collect and why we collect it

        {/* <Subheading>Comments</Subheading>
        When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.

        We do not collect your email address from the comments form for use in any email list, such as a newsletter or marketing email list.  We also never sell email addresses to third parties. */}

        <Subheading>Media</Subheading>
        In general, users are not able to upload images or other media files to this website.  However, if you do upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.

        <Subheading>Contact forms</Subheading>
        When you fill out a contact form on https://connorocampo.github.io/website/ we only collect the information you enter into the contact form.  If the form asks for your name, email address, or any other personal information, then that information is sent to us via email.  We only retain that information—including your email address—for as long as necessary to address your purpose in contacting us.

        Email addresses provided in contact forms are not ever used by https://connorocampo.github.io/website/ for any purpose other than to reply to you in regards to your reason for contacting us.  We never sell information from contact forms to any third parties for any purpose.

        <Subheading>Log Files</Subheading>
        As with most other websites, we collect and use the data contained in log files. The information in the log files include your IP (internet protocol) address, your ISP (internet service provider, such as AOL or Shaw Cable), the browser you used to visit our site (such as Internet Explorer or Firefox), the time you visited our site and which pages you visited throughout our site.

        <Subheading>Cookies and Web Beacons</Subheading>
        We use third party advertisements on https://connorocampo.github.io/website/ to support our site. Some of these advertisers may use technology such as cookies and web beacons when they advertise on our site, which will also send these advertisers (such as Google through the Google AdSense program) information including your IP address, your ISP , the browser you used to visit our site, and in some cases, whether you have Flash installed. This is generally used for geotargeting purposes (showing New York real estate ads to someone in New York, for example) or showing certain ads based on specific sites visited (such as showing cooking ads to someone who frequents cooking sites).

        You can chose to disable or selectively turn off our cookies or third-party cookies in your browser settings, or by managing preferences in programs such as Norton Internet Security. However, this can affect how you are able to interact with our site as well as other websites. This could include the inability to login to services or programs, such as logging into forums or accounts.

        In addition, if you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

        If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

        If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.

        <Subheading>Embedded content from other websites</Subheading>
        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

        These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.

        <Subheading>Analytics</Subheading>
        As you use this Website, we use automatic data collection technology (Google Analytics) to collect certain information about your device, browsing actions, and patterns. This generally includes information about where you are, how you use our website, and any communications between your computer and this site. Among other things, we will collect data about the type of computer you use, your Internet connection, your IP address, your operating system, and your browser type.

        We collect this data for statistical purposes and we don’t collect personal information. The purpose of this data is to improve our Website and offerings.

        If you wish to opt out of Google Analytics so that none of your personal information is collected and stored by Google Analytics, you can download and install the Google Analytics Opt-out Browser Add-on here.  For more information on how Google collects and uses your data, you can access the Google Privacy Policy here.

        <Subheading>Who we share your data with</Subheading>
        We don’t sell or share your data with anyone.  We do use a 3rd party email provider to store your email address if you voluntarily signed up for our email newsletter.  The privacy policy for SendInBlue can be found here.

        <Subheading>How long we retain your data</Subheading>
        If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

        For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.

        <Subheading>What rights you have over your data</Subheading>
        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.

        <Subheading>Where we send your data</Subheading>
        Visitor comments may be checked through an automated spam detection service.

        <Subheading>Our contact information</Subheading>
        For questions regarding your data and how we use it, you can reach us at cmosofla@gmail.com.  You can also email us here if you would like an extract of all of your personal information stored on our website or to request that we delete all of your information stored on our website.
        </Text>
      <Footer />
    </Layout>
  </ThemeProvider>
)
