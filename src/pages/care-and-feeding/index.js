import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CareCard from '../../components/careCard';

// Images for cards
import nutritionImage from '../../../static/img/puppy-blanket.jpg';
import trainingImage from '../../../static/img/lolipop-2.jpg';
import enrichmentImage from '../../../static/img/puppy-in-hand-2.jpg';

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CareAndFeedingPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Care and Feeding" />
      <h1>Care and Feeding</h1>
      <p>
        An intro paragraph should go here -- just a couple of sentences, only
        taking up 2-3 lines on a laptop screen, max, when the container is at
        full width. I'm continuing to write because I want this to take up those
        2-3 lines, so I can see what it looks like. You know, it's best to have
        a sense of the spacing on the screen while I'm designing the cards for
        the sections.
      </p>
      <Cards>
        <CareCard
          title="Nutrition"
          img={nutritionImage}
          copy="Ensuring your pet gets the proper nutrition is very important. All our dogs and puppies are raised on high-quality pawTree products."
          button="Learn More"
          to="/care-and-feeding/nutrition"
        />
        <CareCard
          title="Training"
          img={trainingImage}
          copy="We give our puppies a great start for training, using ENS and Puppy Culture techniques."
          button="See How"
          to="/care-and-feeding/training"
        />
        <CareCard
          title="Enrichment"
          img={enrichmentImage}
          copy="Mental and physical stimulation are important for your puppy's happiness and health."
          button="Learn More"
          to="/care-and-feeding/enrichment"
        />
      </Cards>
    </Layout>
  );
};

export default CareAndFeedingPage;
