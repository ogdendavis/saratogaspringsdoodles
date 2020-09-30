import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const DogImage = ({ file, alt = 'dogImage', style = {}, imgStyle = {} }) => {
  // style and imgStyle props are passed into Gatsby Img as the props of the same name in their docs
  const data = useStaticQuery(graphql`
    query imgQuery {
      images: allFile(
        filter: { extension: { in: ["jpg", "jpeg", "png", "webp"] } }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  // Early return if no file
  if (!file) {
    return null;
  }
  // Remove leading slash from nested file names
  const searchFor = file.slice(1);

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(searchFor);
  });

  return image ? (
    <Img
      alt={alt}
      fluid={image.node.childImageSharp.fluid}
      style={{
        borderRadius: '5px',
        ...style,
      }}
      imgStyle={imgStyle}
    />
  ) : null;
};

export default DogImage;
