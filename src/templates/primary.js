import React from 'react';
import styled from 'styled-components';

import LitterCard from '../components/litterCard';
import DogCard from '../components/dogCard';
import Sidebar from '../components/sidebar';

// Default images by section
import puppiesImage from '../../static/img/puppies-blanket-1.jpg';
import mamaImage from '../../static/img/lolipop-1.jpg';
import careImage from '../../static/img/puppy-in-hand.jpg';
import fallbackImage from '../../static/img/lolipop.webp';

const HeroImage = styled.img`
  max-height: 50vh;
  width: 100%;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius};
`;

const ContentContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const MainContent = styled.div`
  width: 800px;

  @media only screen and (max-width: 1130px) {
    width: 100%;
  }
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
    ? puppiesImage
    : section === 'mama'
    ? mamaImage
    : section === 'care'
    ? careImage
    : fallbackImage;

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
      <DogCard dog={node} key={`dogcard-${node.frontmatter.title}`} />
    ))
  ) : section === 'care' ? (
    <div>
      I am the placeholder for the cards for the Care and Feeding section!
    </div>
  ) : null;

  return (
    <article>
      <h1>{title}</h1>
      <HeroImage src={useImage} alt="Large image of cute dogs" />
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
