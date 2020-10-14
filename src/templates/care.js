import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

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
  images = null,
  location,
}) => {
  const renderedCards = cards
    ? cards.map(({ node }) => {
        // Pull frontmatter from node
        const c = node.frontmatter;
        // Find appropriate photo from image array
        const i = images.find(({ node }) => node.relativePath === c.image);
        // Put it all together and make the card!
        return (
          <ProductCard
            key={`pcard-${c.title}`}
            title={c.title}
            copy={c.description}
            image={i.node.childImageSharp.fluid}
            to={c.link}
            button={c.button}
          />
        );
      })
    : [];

  return (
    <article>
      <h1>{title}</h1>
      <Container>
        <Main>
          <Intro>
            <Markdown>{intro}</Markdown>
          </Intro>
          {renderedCards}
        </Main>
        <Sidebar section={'care'} location={location} />
      </Container>
    </article>
  );
};

export default CarePageTemplate;
