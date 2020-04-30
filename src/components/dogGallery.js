import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Gallery = styled.section`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 2rem;
`;

const autoScroll = () => {
  const g = document.querySelector('.dogGallery');
  if (!g) return;

  const max = g.scrollLeftMax;
  const step = Math.floor(
    Number(window.getComputedStyle(g).width.slice(0, -2)) / 3
  );

  oneStep(g, step, max);

  window.setTimeout(autoScroll, 4000);
};

const oneStep = (target, step, max) => {
  const goTo = target.scrollLeft + step <= max ? target.scrollLeft + step : 0;
  target.scroll(goTo, 0);
};

const DogGallery = ({ height = 300 }) => {
  // query only grabs files that are uploaded as attached to a dog or litter, since they're the only ones that end up in the static folder
  const data = useStaticQuery(graphql`
    query galleryQuery {
      images: allFile(
        filter: {
          absolutePath: { regex: "/static/" }
          extension: { in: ["jpg", "jpeg", "png", "webp"] }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const allImages = data.images.edges.map(({ node }) => {
    return (
      <Img
        key={`gal-${node.name}`}
        alt={node.name}
        fluid={node.childImageSharp.fluid}
        style={{
          width: '25%',
        }}
        imgStyle={{
          objectFit: 'cover',
        }}
      />
    );
  });

  return (
    <Gallery style={{ height }} className="dogGallery">
      {allImages}
    </Gallery>
  );
};

export default DogGallery;
