/*
 * A couple of possible ways to make this interactive: click to pull up modal
 * image (scrollable?), load image rows as they scroll into view
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GalleryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const GalleryImage = styled.img`
  width: 370px;
  height: 370px;
  border: 1px solid ${props => props.theme.offWhite};
  object-fit: cover;

  @media only screen and (max-width: 1160px) {
    width: 50%;
    height: auto;
  }
`;

const GalleryPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query galleryQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/gallery/.*.md/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              image
            }
          }
        }
      }
    }
  `);

  const allImages = data.allMarkdownRemark.edges.map(({ node }) => (
    <GalleryImage
      src={node.frontmatter.image}
      alt={node.frontmatter.title}
      key={`gallery-${node.id}`}
    />
  ));

  return (
    <Layout location={location}>
      <SEO title="Photo Gallery" />
      <h1>Photo Gallery</h1>
      <p>This will be a photo gallery of puppies</p>
      <GalleryContainer>{allImages}</GalleryContainer>
    </Layout>
  );
};

export default GalleryPage;
