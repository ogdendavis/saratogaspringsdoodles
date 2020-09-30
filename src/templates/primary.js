import React from 'react';
import styled from 'styled-components';

import DogImage from '../components/dogImage';
import LitterCard from '../components/litterCard';
import DogCard from '../components/dogCard';

const IntroContainer = styled.section`
  margin-top: 1em;
`;

const CardContainer = styled.section``;

const OutroContainer = styled.section``;

const PrimaryPageTemplate = ({
  title = 'Sarasota Springs Doodles',
  image = null,
  intro = null,
  cardtype = null,
  cardinfo = null,
  outro = null,
}) => {
  // Assign random(ish) image if none is passed in
  const staticImgs = [
    'lolipop',
    'lolipop-1',
    'lolipop-2',
    'puppies-blanket',
    'puppies-blanket-1',
    'puppies-blanket-2',
    'puppies-blanket-3',
    'puppy-blanket',
    'puppy-flowers',
    'puppy-in-hand',
    'puppy-in-hand-1',
    'puppy-in-hand-2',
  ];
  const randoImage = staticImgs[Math.floor(Math.random() * staticImgs.length)];

  // Build cards, if card info present
  const cards = !cardinfo
    ? null
    : cardtype === 'litters'
    ? cardinfo.edges.map(({ node }) => (
        <LitterCard
          litter={node}
          dogImagePaths={cardinfo.dogImagePaths}
          key={`litter${node.frontmatter.dam.dam_name}${node.frontmatter.date}`}
        />
      ))
    : cardtype === 'dogs'
    ? cardinfo.edges.map(({ node }) => (
        <DogCard dog={node} key={node.frontmatter.title} />
      ))
    : null;

  return (
    <article>
      <h1>{title}</h1>
      <DogImage
        file={image ? image : randoImage}
        style={{ maxHeight: '50vh' }}
      />
      {intro && <IntroContainer dangerouslySetInnerHTML={{ __html: intro }} />}
      {cards && <CardContainer>{cards}</CardContainer>}
      {outro && <OutroContainer dangerouslySetInnerHTML={{ __html: outro }} />}
    </article>
  );
};

export default PrimaryPageTemplate;
