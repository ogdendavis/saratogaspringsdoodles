import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

import lolipop from '../../static/img/lolipop.webp';
import flowerpup from '../../static/img/puppy-flowers.jpg';

const Cards = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
`;

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query homeQuery {
      breeder: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/breeder.md/" }
      ) {
        frontmatter {
          breeder_photo
        }
        html
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Cards>
        <HomeCard
          img={data.breeder.frontmatter.breeder_photo}
          title="Hi, I'm Andrea"
          copy={data.breeder.html}
          button="Learn More"
          to="/puppies"
        />
        <HomeCard
          img={lolipop}
          title="Mamas and Papas"
          copy="A healthy, happy mama and papa produce healthy, happy puppies. All of our sires and dams are beloved family pets, and are genetically tested to ensure they'll produce the healthiest offspring possible."
          button="Meet the Dogs"
          to="/meet-the-dogs"
        />
        <HomeCard
          img={flowerpup}
          title="Lifelong Health"
          copy="I work to give your puppy the best start in life possible, but your dog's long-term health is up to you. Feeding high-quality food, teaching desired behaviors, and giving your dog outlets for mental and physical stimulation are all important elements of your new pup's lifelong health."
          button="See Our Recommendations"
          to="/care-and-feeding"
        />
      </Cards>
    </Layout>
  );
};

export default IndexPage;
