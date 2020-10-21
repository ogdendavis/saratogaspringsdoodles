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
      andrea: file(relativePath: { eq: "andrea-and-pups.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 432) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lolipop: file(relativePath: { eq: "lolipop.webp" }) {
        childImageSharp {
          fluid(maxWidth: 432) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      flowerpup: file(relativePath: { eq: "puppy-flowers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 432) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Cards>
        <HomeCard
          img={data.andrea.childImageSharp.fluid}
          title="Hi, I'm Andrea"
          copy={data.breeder.html}
          button="Learn More"
          to="/puppies"
        />
        <HomeCard
          img={data.lolipop.childImageSharp.fluid}
          title="Mamas and Papas"
          copy="A healthy, happy mama and papa produce healthy, happy puppies. All of our sires and dams are beloved family pets, and are genetically tested to ensure they'll produce the healthiest offspring possible."
          button="Meet the Dogs"
          to="/meet-the-dogs"
        />
        <HomeCard
          img={data.flowerpup.childImageSharp.fluid}
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
