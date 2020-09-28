import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GuardianPage = ({ location }) => {
  console.log('Temp guardian page');

  return (
    <Layout location={location}>
      <SEO title="Guardian program" />
      <h1>Guardian Program</h1>
      <p>This page will have information about the guardian program</p>
    </Layout>
  );
};

export default GuardianPage;
