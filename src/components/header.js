import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';

import dog1 from '../images/dog1.png';

const HeaderWrapper = styled.header`
  margin-bottom: 2em;
  position: relative;
  display: flex;
  align-items: flex-end;
  background: teal;
`;

const MainNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  a {
    margin: 1em 1em 0;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25em;
    color: white;
    transition: all 0.3s ease-in-out;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
    position: relative;
  }
  a:hover {
    color: orange;
  }
  a::before,
  a::after {
    content: '';
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
    transition: all 0.3s ease-in-out;
    transition-duration: 0.75s;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before,
  a:hover::after {
    width: 100%;
    opacity: 1;
    left: 0;
  }
`;

const HeaderInner = styled.div`
  color: teal;
  margin: 0 auto;
  width: 100%;
  max-width: 60em;
  padding: 1.5em;
  position: relative;
  z-index: 2;
  a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  h1 a {
    color: white;
    text-decoration: none;
  }
`;

const HeaderIcon = styled.img`
  max-height: 2em;
  margin-right: 1em;
`;

const HeaderBg = styled(Img)`
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.5));
  }
`;

const Header = ({ siteTitle, location }) => {
  // Telling the nav links if they were clicked from the home page, for header animation
  const atHome = location.pathname === '/';

  const data = useStaticQuery(graphql`
    query headerQuery {
      background: file(relativePath: { eq: "puppy-on-grass.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
        edges {
          node {
            frontmatter {
              menu
              slug
            }
          }
        }
      }
    }
  `);

  // Construct nav -- first get full pages from CMS
  const navPages = data.allMarkdownRemark.edges.map(({ node }) => (
    <Link
      key={`nav${node.frontmatter.slug}`}
      to={`/${node.frontmatter.slug}`}
      state={{ fromHome: atHome }}
    >
      {node.frontmatter.menu}
    </Link>
  ));

  // Now add hard-coded pages
  navPages.unshift(
    <Link key={`nav/`} to={`/`} state={{ fromHome: atHome }}>
      Home
    </Link>
  );
  navPages.splice(
    2,
    0,
    <Link key={`nav/dogs`} to={`/dogs`} state={{ fromHome: atHome }}>
      Our Dogs
    </Link>
  );

  return (
    <Spring
      from={{ height: location.state.fromHome ? '500px' : '175px' }}
      to={{ height: atHome ? '500px' : '175px' }}
    >
      {styles => (
        <HeaderWrapper style={{ ...styles }}>
          <HeaderInner>
            <h1 style={{ margin: 0 }}>
              <Link to="/">
                <HeaderIcon src={dog1} alt="Happy dog" />
                {siteTitle}
              </Link>
            </h1>
            <MainNav>{navPages}</MainNav>
          </HeaderInner>
          <Spring
            from={{ opacity: location.state.fromHome ? 1 : 0 }}
            to={{ opacity: atHome ? 1 : 0 }}
          >
            {styles => (
              <HeaderBg
                fluid={data.background.childImageSharp.fluid}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  ...styles,
                }}
              />
            )}
          </Spring>
        </HeaderWrapper>
      )}
    </Spring>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  atHome: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
  atHome: false,
};

export default Header;
