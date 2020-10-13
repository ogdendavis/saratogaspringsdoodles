import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const TrainingPage = ({ location }) => {
  const cards = [
    {
      title: 'Lifetime Membership',
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
        intro={`<p>Training your puppy is also very important: If you are a new puppy owner or would like a refresher course, I have teamed up with <a href="https://www.baxterandbella.com/" target="_blank" rel="noopener noreferrer">Baxter and Bella</a>. Amy Jensen is the trainer behind Baxter and Bella -- she's a former teacher who has used her lesson planning and instructional skills to develop an amazing program that teaches you how to communicate with, socialize, and train your puppy.</p><p>When you sign up for a Baxter & Bella membership, be sure to use the code SARATOGA to save 25% off your lifetime membership.</p>`}
        cards={cards}
      />
    </Layout>
  );
};

export default TrainingPage;
