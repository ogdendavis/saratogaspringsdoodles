import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Carousel = styled.section`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  flex: 1;
  display: flex;
  align-items: stretch;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

const isMobile = () => {
  // If we're in a viewport less than 650px wide, use mobile settings
  return typeof window !== 'undefined' ? window.innerWidth < 650 : false;
};

const autoScroll = () => {
  const g = document.querySelector('.dogCarousel');
  if (!g) return;

  const m = isMobile();

  // get number of images in Carousel
  const n = g.children.length;

  // Get the width of one image
  const step = Math.floor(
    Number(window.getComputedStyle(g).width.slice(0, -2)) / (m ? 1 : 3)
  );

  // Get the farthest scroll point to the left
  const max = step * (n - (m ? 0 : 2));

  oneStep(g, step, max);

  window.setTimeout(autoScroll, 4000);
};

const oneStep = (target, step, max) => {
  const goTo = target.scrollLeft + step <= max ? target.scrollLeft + step : 0;
  target.scroll(goTo, 0);
};

const DogCarousel = ({ height = 300 }) => {
  // query only grabs files that are uploaded as attached to a dog or litter, since they're the only ones that end up in the static folder
  const data = useStaticQuery(graphql`
    query carouselQuery {
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

  useEffect(() => {
    window.setTimeout(autoScroll, 4000);
  });

  // indicator for if mobile view is needed
  const m = isMobile();

  const allImages = data.images.edges.map(({ node }) => {
    const w = m ? '100%' : '33.3%';
    return (
      <Img
        key={`car-${node.name}`}
        alt={node.name}
        fluid={node.childImageSharp.fluid}
        style={{
          width: w,
          flex: `0 0 ${w}`,
          scrollSnapAlign: 'start',
        }}
        imgStyle={{
          objectFit: 'cover',
        }}
      />
    );
  });

  return (
    <Carousel style={{ height }} className="dogCarousel">
      {allImages}
    </Carousel>
  );
};

export default DogCarousel;
