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
  a::before {
    content: '';
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }

  a.active-nav-link {
    color: #a0410a;
  }
  a.active-nav-link:hover {
    color: #a0410a;
  }
  a.active-nav-link:hover::before {
    opacity: 0;
  }

  a.active-nav-link-home {
    color: #d56658;
  }
  a.active-nav-link-home:hover {
    color: #d56658;
  }
  a.active-nav-link-home:hover::before {
    opacity: 0;
  }
`;

const HeaderInner = styled.div`
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
  let fromHome = false;
  if (location.state && location.state.fromHome) {
    fromHome = location.state.fromHome;
  }

  const data = useStaticQuery(graphql`
    query headerQuery {
      background: file(relativePath: { eq: "puppy-on-grass.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Spring
      from={{ height: fromHome ? '500px' : '175px' }}
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
            <MainNav>
              <Link
                key="nav/"
                to="/"
                state={{ fromHome: atHome }}
                activeClassName="active-nav-link-home"
              >
                Home
              </Link>
              <Link
                key="nav/about"
                to="/about"
                state={{ fromHome: atHome }}
                activeClassName="active-nav-link-home"
              >
                About Us
              </Link>
              <Link
                key="nav/dogs"
                to="/dogs"
                state={{ fromHome: atHome }}
                activeClassName="active-nav-link"
              >
                Our Dogs
              </Link>
              <Link
                key="nav/available-puppies"
                to="/available-puppies"
                state={{ fromHome: atHome }}
                activeClassName="active-nav-link"
              >
                Available Puppies
              </Link>
              <Link
                key="nav/contact"
                to="/contact"
                state={{ fromHome: atHome }}
                activeClassName="active-nav-link"
              >
                Contact Us
              </Link>
            </MainNav>
          </HeaderInner>
          <Spring
            from={{ opacity: fromHome ? 1 : 0 }}
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
  location: PropTypes.object.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
  location: {},
};

export default Header;
