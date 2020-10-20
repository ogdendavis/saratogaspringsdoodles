import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

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
        html
      }
      andrea: imageSharp(id: { eq: "3fee2d1a-a4b5-5d68-ad2d-f1d7a3091ef3" }) {
        fluid(maxWidth: 431) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      lolipop: imageSharp(id: { eq: "7303db22-6663-5c89-bb4d-86e337bc75cc" }) {
        fluid(maxWidth: 431) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      flowerpup: imageSharp(
        id: { eq: "87c2be15-c396-5e81-b501-d64e1011daca" }
      ) {
        fluid(maxWidth: 431) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Cards>
        <HomeCard
          img={data.andrea.fluid}
          title="Hi, I'm Andrea"
          copy={data.breeder.html}
          button="Learn More"
          to="/puppies"
        />
        <HomeCard
          img={data.lolipop.fluid}
          title="Mamas and Papas"
          copy="A healthy, happy mama and papa produce healthy, happy puppies. All of our sires and dams are beloved family pets, and are genetically tested to ensure they'll produce the healthiest offspring possible."
          button="Meet the Dogs"
          to="/meet-the-dogs"
        />
        <HomeCard
          img={data.flowerpup.fluid}
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
