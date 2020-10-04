import React from 'react';
import styled from 'styled-components';

import DogImage from '../components/dogImage';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 800px;
  max-width: 100%;
`;

const Copy = styled.div``;

const ContentPageTemplate = ({
  title = 'Sarasota Springs Doodles',
  section = null,
  image = null,
  content = null,
}) => {
  // Pick an image to use, if none has been passed in
  const useImage = image
    ? image
    : section === 'puppies'
    ? 'puppies-blanket-1'
    : section === 'mama'
    ? 'lolipop-1'
    : section === 'care'
    ? 'puppy-in-hand'
    : 'lolipop';

  return (
    <article>
      <h1>{title}</h1>
      <Container>
        <Main>
          <DogImage
            file={useImage}
            style={{
              width: '45%',
              display: 'inline',
              float: 'left',
              marginRight: '1rem',
            }}
          />
          <Copy dangerouslySetInnerHTML={{ __html: content }} />
        </Main>
        <Sidebar section={section} />
      </Container>
    </article>
  );
};

export default ContentPageTemplate;
