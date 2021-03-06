import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryPageTemplate from '../../templates/primary';

import image from '../../../static/img/puppy-in-hand-2.jpg';

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
      <SEO title="Meet Our Dogs" />
      <PrimaryPageTemplate
        location={location}
        title="Meet Our Dogs"
        section="mama"
        intro={data.pageIntro.html}
        cardinfo={data.allMarkdownRemark}
        image={image}
      />
    </Layout>
  );
};

export default MamaPage;
