import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const TrainingPage = ({ location }) => {
  console.log('Temp training page');

  return (
    <Layout location={location}>
      <SEO title="Training" />
      <h1>Training</h1>
      <p>This page will have training info and B&B affiliat links</p>
    </Layout>
  );
};

export default TrainingPage;
