import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryPageTemplate from '../../templates/primary';

const MamaPage = ({ location }) => {
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
      <SEO title="Meet Our Mama" />
      <PrimaryPageTemplate
        title="Meet Our Mama"
        intro={data.pageIntro.html}
        cardtype="dogs"
        cardinfo={data.allMarkdownRemark}
      />
    </Layout>
  );
};

export default MamaPage;
