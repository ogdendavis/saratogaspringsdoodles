import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

import lolipop from '../../static/img/lolipop.webp';
import image1 from '../../static/img/charliebrown.webp';
import image2 from '../../static/img/puppies-blanket-2.jpg';

const Intro = styled.section`
  font-size: 1.1em;
`;

const Cards = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
`;

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query homeQuery {
      pageIntro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/welcome.md/" }
      ) {
        html
      }
      fb: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/contact.md/" }
      ) {
        frontmatter {
          social {
            facebook
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Intro dangerouslySetInnerHTML={{ __html: data.pageIntro.html }} />
      <Cards>
        <HomeCard
          img={lolipop}
          title="Something Awesome"
          copy="This is a placeholder. We should pick a few (3-5ish) key elements to highlight on the home page, and feature them in this space."
          button="Learn More"
          to="/"
        />
        <HomeCard
          img={image2}
          title="Something Else Awesome"
          copy="This is a placeholder. We should pick a few (3-5ish) key elements to highlight on the home page, and feature them in this space."
          button="Go There"
          to="/"
        />
        <HomeCard
          img={image1}
          title="Yet Another Awesome Thing"
          copy="This is a placeholder. We should pick a few (3-5ish) key elements to highlight on the home page, and feature them in this space."
          button="Clicky Clicky"
          to="/"
        />
      </Cards>
    </Layout>
  );
};

export default IndexPage;
