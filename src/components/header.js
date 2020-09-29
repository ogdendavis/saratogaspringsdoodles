import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';

import NavBurger from './navBurger';

const HeaderWrapper = styled.header`
  margin-bottom: 2em;
  position: relative;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  background: ${props =>
    props.athome ? props.theme.headFootTransparent : props.theme.headFootSolid};
  transition: background 0.5s ease;
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

const HeaderBg = styled(Img)`
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const Header = ({ siteTitle, location, logo, background }) => {
  // Telling the nav links if they were clicked from the home page, for header animation
  const atHome = location.pathname === '/';
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
          <HeaderBg
            fluid={background}
            objectFit="cover"
            objectPosition="50% 25%"
            alt="Dog on moon"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              ...styles,
            }}
          />
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
