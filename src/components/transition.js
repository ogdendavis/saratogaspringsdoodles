// Attempting to create a page transition with react-pose
// Should I redo this in Spring? Having two animation libraries feels like a lot of overhead

import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Transition = ({ children, location }) => {
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
      background: file(relativePath: { eq: "desert-dog-md.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <PoseGroup>
      <Header
        siteTitle={data.site.frontmatter.title}
        location={location}
        background={data.background.childImageSharp.fluid}
        key="staticheader"
      />
      <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
    </PoseGroup>
  );
};

export default Transition;
