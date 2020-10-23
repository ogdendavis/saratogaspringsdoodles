import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

import NavBurger from './navBurger';
import Hero from './hero';

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

const Header = ({ siteTitle, location, logo }) => {
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
          <Hero siteTitle={siteTitle} atHome={atHome} />
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
