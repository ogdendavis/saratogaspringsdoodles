import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const EnrichmentPage = ({ location }) => {
  console.log('Temp enrichment page');

  return (
    <Layout location={location}>
      <SEO title="Enrichment" />
      <h1>Enrichment</h1>
      <p>This page will have enrichment info and Amazon affiliate links</p>
    </Layout>
  );
};

export default EnrichmentPage;
