import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const TrainingPage = ({ location }) => {
  const cards = [
    {
      title: 'XXXXXXXXX',
      copy: `Baxter and Bella offers a lifetime membership that gives you full access to their training curriculum, plus one-on-one sessions with a trainer. Remember to use the code SARATOGA for 25% off!`,
      image:
        'https://static.wixstatic.com/media/5919e2_cce6a32e2ad5490f95c7f9e44e34a791.jpg',
      to: 'https://www.baxterandbella.com/learn-more',
      button: 'Sign up',
    },
  ];

  return (
    <Layout location={location}>
      <SEO title="Training" />
      <CarePageTemplate
        location={location}
        title="Training"
        intro={`asdf`}
        cards={cards}
      />
    </Layout>
  );
};

export default TrainingPage;
