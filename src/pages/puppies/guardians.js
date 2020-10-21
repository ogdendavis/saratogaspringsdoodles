import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentPageTemplate from '../../templates/content';

import image from '../../../static/img/goldendoodlepups5.jpg';

const GuardianPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query guardianQuery {
      content: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/guardians.md/" }
      ) {
        html
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Guardian Program" />
      <ContentPageTemplate
        location={location}
        title="Guardian Program"
        section="puppies"
        content={data.content.html}
        image={image}
      />
    </Layout>
  );
};

export default GuardianPage;
