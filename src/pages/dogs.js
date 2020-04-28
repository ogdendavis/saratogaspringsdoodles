import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DogCard from '../components/dogCard';

const DogPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query dogsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/dogs/.*.md/" } }
        sort: { order: ASC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              breed
              color
              birthdate
              gender
              bio
            }
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Our Dogs" />
      <h1>Our Dogs</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <DogCard dog={node.frontmatter} key={node.frontmatter.title} />
      ))}
    </Layout>
  );
};

export default DogPage;
