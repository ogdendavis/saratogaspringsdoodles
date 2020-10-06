import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

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
    <img
      src={node.frontmatter.image}
      alt={node.frontmatter.title}
      key={`gallery-${node.id}`}
    />
  ));

  return (
    <Layout location={location}>
      <SEO title="Puppy photo gallery" />
      <h1>Photo Gallery</h1>
      <p>This will be a photo gallery of puppies</p>
      {allImages}
    </Layout>
  );
};

export default GalleryPage;
