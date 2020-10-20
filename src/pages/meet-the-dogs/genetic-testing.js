import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentPageTemplate from '../../templates/content';

import image from '../../../static/img/puppy-in-hand-1.jpg';

const GeneticTestingPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query geneticTestingQuery {
      content: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/testing.md/" }
      ) {
        html
      }
    }
  `);
  return (
    <Layout location={location}>
      <SEO title="Genetic Testing" />
      <ContentPageTemplate
        location={location}
        title="Genetic Testing"
        section="mama"
        content={data.content.html}
        image={image}
      />
    </Layout>
  );
};

export default GeneticTestingPage;
