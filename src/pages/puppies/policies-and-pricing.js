import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const PoliciesPage = ({ location }) => {
  console.log('Temp policies/pricing page');

  return (
    <Layout location={location}>
      <SEO title="Policies and pricing" />
      <h1>Policies and Pricing</h1>
      <p>This page will have policies and pricing info</p>
    </Layout>
  );
};

export default PoliciesPage;
