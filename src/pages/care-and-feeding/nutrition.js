import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const NutritionPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query nutritionQuery {
      intro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/welcome.md/" }
      ) {
        frontmatter {
          welcome_nutrition
        }
      }
      products: allMarkdownRemark(
        filter: { frontmatter: { section: { in: "nutrition" } } }
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
      <SEO title="Nutrition" />
      <CarePageTemplate
        location={location}
        title="Nutrition"
        intro={data.intro.frontmatter.welcome_nutrition}
        cards={data.products.edges}
        images={data.images.edges}
      />
    </Layout>
  );
};

export default NutritionPage;
