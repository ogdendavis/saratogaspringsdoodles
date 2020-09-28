import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ApplicationPage = ({ location }) => {
  console.log('Temp application page');

  return (
    <Layout location={location}>
      <SEO title="Puppy Application" />
      <h1>Puppy Application</h1>
      <p>This will be the application to join the waitlist!</p>
    </Layout>
  );
};

export default ApplicationPage;
