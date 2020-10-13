import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar';
import ProductCard from '../components/productCard';

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

const Intro = styled.div`
  margin-bottom: -1rem;
`;

const CarePageTemplate = ({
  title = 'Sarasota Springs Doodles',
  image = null,
  intro = null,
  cards = null,
  location,
}) => {
  const renderedCards = cards
    ? cards.map(c => (
        <ProductCard
          key={`pcard-${c.title}`}
          title={c.title}
          copy={c.copy}
          image={c.image ? c.image : false}
          to={c.to ? c.to : 'https://pawtree.com/andreasaunders/'}
          button={c.button ? c.button : 'Buy Now'}
        />
      ))
    : [];

  return (
    <article>
      <h1>{title}</h1>
      <Container>
        <Main>
          <Intro dangerouslySetInnerHTML={{ __html: intro }} />
          {renderedCards}
        </Main>
        <Sidebar section={'care'} location={location} />
      </Container>
    </article>
  );
};

export default CarePageTemplate;
