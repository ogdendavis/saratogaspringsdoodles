import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const TrainingPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query trainingQuery {
      intro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/welcome.md/" }
      ) {
        frontmatter {
          welcome_training
        }
      }
      products: allMarkdownRemark(
        filter: { frontmatter: { section: { in: "training" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              description
              link
              button
            }
          }
        }
      }
      images: allFile(filter: { absolutePath: { regex: "/products/img/" } }) {
        edges {
          node {
            relativePath
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

  return (
    <Layout location={location}>
      <SEO title="Training" />
      <CarePageTemplate
        location={location}
        title="Training"
        intro={data.intro.frontmatter.welcome_training}
        cards={data.products.edges}
        images={data.images.edges}
      />
    </Layout>
  );
};

export default TrainingPage;
