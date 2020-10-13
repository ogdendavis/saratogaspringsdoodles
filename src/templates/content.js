import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar';

// Default images by section
import puppiesImage from '../../static/img/puppies-blanket-1.jpg';
import mamaImage from '../../static/img/lolipop-1.jpg';
import careImage from '../../static/img/puppy-in-hand.jpg';
import fallbackImage from '../../static/img/lolipop.webp';

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 800px;

  @media only screen and (max-width: 1130px) {
    width: 100%;
  }
`;

const TopImage = styled.img`
  width: 45%;
  display: inline;
  float: left;
  margin-right: 1em;
  margin-top: 0.25em;
  border-radius: ${props => props.theme.borderRadius};

  @media only screen and (max-width: 460px) {
    width: 100%;
    margin: 0 0 1em;
  }
`;

const Copy = styled.div``;

const ContentPageTemplate = ({
  title = 'Sarasota Springs Doodles',
  section = null,
  image = null,
  content = null,
  location,
}) => {
  // Pick an image to use, if none has been passed in
  const useImage = image
    ? image
    : section === 'puppies'
    ? puppiesImage
    : section === 'mama'
    ? mamaImage
    : section === 'care'
    ? careImage
    : fallbackImage;

  return (
    <article>
      <h1>{title}</h1>
      <Container>
        <Main>
          <TopImage src={useImage} alt="Image of cute dogs" style={{}} />
          <Copy dangerouslySetInnerHTML={{ __html: content }} />
        </Main>
        <Sidebar section={section} location={location} />
      </Container>
    </article>
  );
};

export default ContentPageTemplate;
