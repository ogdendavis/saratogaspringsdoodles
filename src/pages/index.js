import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

import lolipop from '../../static/img/lolipop.webp';
import andrea from '../../static/img/andrea-loli-square.png';
import image1 from '../../static/img/charliebrown.webp';

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
          img={andrea}
          title="Hi, I'm Andrea"
          copy="I started out as a guardian home for my Mable, a standard poodle. I ended up helping whelp a litter for the breeders, and fell in love with the whole process. I have always loved dogs and am loving using my experience and knowledge of being an OB Tech at a local Hospital to breed top quality genetic health tested puppies."
          button="Learn More"
          to="/puppies"
        />
        <HomeCard
          img={lolipop}
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
