// Wrap pages in react-pose PoseGroup and styled-components ThemeProvider

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

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
  };

  return (
    <ThemeProvider theme={themeObject}>
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
