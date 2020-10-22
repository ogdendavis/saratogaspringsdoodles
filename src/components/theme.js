// Wrap pages in react-pose PoseGroup and styled-components ThemeProvider

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

// Font imports via fontsource (https://github.com/fontsource/fontsource)
import 'fontsource-open-sans/400-normal.css';
import 'fontsource-open-sans/700-normal.css';
import 'fontsource-open-sans/600-normal.css';
import 'fontsource-open-sans/400-italic.css';
import 'fontsource-dancing-script/400-normal.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open Sans, sans-serif;
    opacity: 0;
    background-color: ${props => props.theme.offWhite};
  }
  body.visible {
    transition: opacity 1s ease, background-color 1s ease;
    opacity: 1;
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
      background: file(relativePath: { eq: "hero.jpg" }) {
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
