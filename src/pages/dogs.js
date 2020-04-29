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
            }
            html
          }
        }
      }
      pageIntro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/dogs.md/" }
      ) {
        html
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Our Dogs" />
      <h1>Our Dogs</h1>
      <div dangerouslySetInnerHTML={{ __html: data.pageIntro.html }} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <DogCard dog={node} key={node.frontmatter.title} />
      ))}
    </Layout>
  );
};

export default DogPage;
