import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';

import NavBurger from './navBurger';

const HeaderWrapper = styled.header`
  margin-bottom: 2em;
  position: relative;
  font-family: Dancing Script, cursive;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  background: ${props =>
    props.athome ? props.theme.headFootTransparent : props.theme.offWhite};
  border-bottom: 1px ${props => (props.athome ? 'none' : 'solid')}
    ${props => props.theme.offBlack};
  transition: all 0.5s ease;
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

const HeaderHero = styled.div``;

const HeaderHeading = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;
  padding-top: 35vh;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: ${props => (props.athome ? 'block' : 'none')};
  visibility: ${props => (props.athome ? 'visible' : 'hidden')};

  @media only screen and (max-width: 820px) {
    font-size: 3rem;
  }
`;

const Header = ({ siteTitle, location, logo, background }) => {
  // Check if on homepage for header color & hero image
  const [atHome, setAtHome] = useState(true);
  useEffect(() => {
    setAtHome(location.pathname === '/');
  }, [location]);

  // Telling the nav links if they were clicked from the home page, for header animation
  let fromHome = true;
  if (location.state && location.state.fromHome) {
    fromHome = location.state.fromHome;
  }

  // Get viewport height for homepage hero image
  const [viewportHeight, setViewportHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState('0');
  useEffect(() => {
    setViewportHeight(window.innerHeight);
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  // Ref to calculate header height for animation
  const headerRef = useRef(null);

  return (
    <Spring
      from={{
        height: fromHome ? `${viewportHeight}px` : `${headerHeight}px`,
      }}
      to={{
        height: atHome ? `${viewportHeight}px` : `${headerHeight}px`,
      }}
    >
      {styles => (
        <HeaderWrapper style={{ ...styles }}>
          <HeaderInner ref={headerRef} athome={atHome}>
            <NavBurger athome={atHome} />
          </HeaderInner>
          <HeaderHero>
            <HeaderHeading athome={atHome}>{siteTitle}</HeaderHeading>
            <Img
              fluid={background}
              alt="A very cute puppy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: '-1',
                ...styles,
              }}
            />
          </HeaderHero>
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
