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
        Nutrition, training, and enrichment are all important to make sure that
        a dog lives the longest, healthiest life possible. I use, and strongly
        recommend,{' '}
        <a
          href="https://www.pawtree.com/andreasaunders"
          target="_blank"
          rel="noopener noreferrer"
        >
          pawTree
        </a>{' '}
        and{' '}
        <a
          href="https://www.baxterandbella.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baxter and Bella
        </a>
        . Click the links below for more information, and to get discounts on
        some of my recommended services and products.
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
