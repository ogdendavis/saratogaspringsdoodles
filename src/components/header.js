import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';

import DogImage from './dogImage';
import NavBurger from './navBurger';

const HeaderWrapper = styled.header`
  margin-bottom: 2em;
  position: relative;
  display: flex;
  align-items: flex-end;
  background: teal;
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

const HeaderIcon = styled.div`
  width: 2em;
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
    background: linear-gradient(rgba(0, 64, 64, 0.05), rgba(0, 64, 64, 0.5));
  }
`;

const Header = ({ siteTitle, location, logo, background }) => {
  // Telling the nav links if they were clicked from the home page, for header animation
  const atHome = location.pathname === '/';
  let fromHome = false;
  if (location.state && location.state.fromHome) {
    fromHome = location.state.fromHome;
  }

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
                <HeaderIcon>
                  <DogImage file={logo} alt="Happy dog" />
                </HeaderIcon>
                {siteTitle}
              </Link>
            </h1>
            <NavBurger />
          </HeaderInner>
          <HeaderBg
            fluid={background}
            objectFit="cover"
            objectPosition="50% 25%"
            alt="Dog on moon"
            imgStyle={{
              objectFit: 'cover',
              objectPosition: '75% 25%',
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
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
