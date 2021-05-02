import React from 'react';
import styled from 'styled-components';

import herovid from '../images/bernies.mp4';
import fallbackImage from '../images/fallbackHero.webp';

const HeroContainer = styled.div``;

const HeroHeading = styled.h1`
  color: #fff;
  font-size: 8vw;
  text-align: center;
  padding-top: 35vh;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: ${props => (props.atHome ? 'block' : 'none')};
  visibility: ${props => (props.atHome ? 'visible' : 'hidden')};

  @media only screen and (max-width: 820px) {
    font-size: 3rem;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${fallbackImage}) center/cover no-repeat;
  object-fit: cover;
`;

const Hero = ({ siteTitle, atHome }) => {
  return (
    <HeroContainer>
      <HeroHeading atHome={atHome}>{siteTitle}</HeroHeading>
      <HeroVideo autoPlay muted loop playsinline>
        <source src={herovid} type="video/mp4" />
      </HeroVideo>
    </HeroContainer>
  );
};

export default Hero;
