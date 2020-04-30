import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const DogImage = ({ file, alt = 'dogImage', style = {}, imgStyle = {} }) => {
  // style and imgStyle props are passed into Gatsby Img as the props of the same name in their docs
  const data = useStaticQuery(graphql`
    query imgQuery {
      images: allFile(filter: { extension: { in: ["jpg", "jpeg", "png"] } }) {
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
