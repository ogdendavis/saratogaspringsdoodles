// Wrap pages in react-pose PoseGroup and styled-components ThemeProvider

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

import openSansRegular from '../fonts/OpenSans-Regular.ttf';
import openSansBold from '../fonts/OpenSans-Bold.ttf';
import openSansItalic from '../fonts/OpenSans-Italic.ttf';
import dancingScriptRegular from '../fonts/DancingScript-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Open Sans;
    src: url(${openSansRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Open Sans;
    src: url(${openSansBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: Open Sans;
    src: url(${openSansItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: Dancing Script;
    src: url(${dancingScriptRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: Open Sans, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Dancing Script, cursive;
  }
`;

const Theme = ({ children, location }) => {
  const RoutesContainer = posed.div({
    enter: {
      opacity: 1,
      transition: { duration: 250 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 250 },
    },
  });

  const data = useStaticQuery(graphql`
    query TransitionQuery {
      site: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/business.md/" }
      ) {
        frontmatter {
          title
        }
      }
      background: file(relativePath: { eq: "puppy-flowers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const themeObject = {
    borderRadius: '5px',
    headFootTransparent:
      'linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8))',
    headFootSolid: '#333',
    linkColor: '#48cccd',
    linkColorHover: 'orange',
    offWhite: '#f8f8f8',
    offBlack: 'hsla(0, 0%, 0%, 0.8)',
    headingFont: 'Dancing Script, cursive',
    bodyFont: 'Open Sans, sans-serif',
  };

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle />
      <PoseGroup>
        <Header
          siteTitle={data.site.frontmatter.title}
          location={location}
          background={data.background.childImageSharp.fluid}
          key="staticheader"
        />
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    </ThemeProvider>
  );
};

export default Theme;
