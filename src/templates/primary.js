import React from 'react';
import styled from 'styled-components';

import DogImage from '../components/dogImage';
import LitterCard from '../components/litterCard';
import DogCard from '../components/dogCard';
import Sidebar from '../components/sidebar';

const ContentContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const MainContent = styled.div`
  width: 800px;
  max-width: 100%;
`;

const PrimaryPageTemplate = ({
  title = 'Sarasota Springs Doodles',
  section = null,
  image = null,
  intro = null,
  cardinfo = null,
  outro = null,
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

  // Build cards, if card info present
  const cards = !cardinfo ? null : section === 'puppies' ? (
    cardinfo.edges.map(({ node }) => (
      <LitterCard
        litter={node}
        dogImagePaths={cardinfo.dogImagePaths}
        key={`litter${node.frontmatter.dam.dam_name}${node.frontmatter.date}`}
      />
    ))
  ) : section === 'mama' ? (
    cardinfo.edges.map(({ node }) => (
      <DogCard dog={node} key={node.frontmatter.title} />
    ))
  ) : section === 'care' ? (
    <div>
      I am the placeholder for the cards for the Care and Feeding section!
    </div>
  ) : null;

  return (
    <article>
      <h1>{title}</h1>
      <DogImage file={useImage} style={{ maxHeight: '50vh' }} />
      <ContentContainer>
        <MainContent>
          {intro && <section dangerouslySetInnerHTML={{ __html: intro }} />}
          {cards && <section>{cards}</section>}
          {outro && <section dangerouslySetInnerHTML={{ __html: outro }} />}
        </MainContent>
        <Sidebar section={section} />
      </ContentContainer>
    </article>
  );
};

export default PrimaryPageTemplate;
