import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ApplicationPage = ({ location }) => {
  console.log('Temp care and feeding page');

  return (
    <Layout location={location}>
      <SEO title="Care and Feeding" />
      <h1>Care and Feeding</h1>
      <p>
        This page isn't specified in the outline, but probably makes sense to
        have a landing page that links to nutrition, training, and enrichment
        pages (and probably also directly to affiliate links?)
      </p>
    </Layout>
  );
};

export default ApplicationPage;
