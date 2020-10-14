import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const EnrichmentPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query enrichmentQuery {
      intro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/welcome.md/" }
      ) {
        frontmatter {
          welcome_enrichment
        }
      }
      products: allMarkdownRemark(
        filter: { frontmatter: { section: { in: "enrichment" } } }
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
      <SEO title="Enrichment" />
      <CarePageTemplate
        location={location}
        title="Enrichment"
        intro={data.intro.frontmatter.welcome_enrichment}
        cards={data.products.edges}
        images={data.images.edges}
      />
    </Layout>
  );
};

export default EnrichmentPage;
