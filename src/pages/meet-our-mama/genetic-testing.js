import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GeneticTestingPage = ({ location }) => {
  console.log('Temp genetic testing page');

  return (
    <Layout location={location}>
      <SEO title="Genetic Testing" />
      <h1>Genetic Testing</h1>
      <p>This page will have information about genetic testing</p>
    </Layout>
  );
};

export default GeneticTestingPage;
