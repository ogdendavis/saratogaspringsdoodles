import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

import img1 from '../../static/img/img_0026.jpg';
import img2 from '../../static/img/img_1662.jpg';
import img3 from '../../static/img/img_6135.jpg';
import img4 from '../../static/img/gypsy-clone.jpg';
import img5 from '../../static/img/rando3.jpg';

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
          img={img1}
          title="Meet Our Dogs"
          copy="We love our sires and dams, and we think you will, too."
          button="Say hello"
          to="/dogs"
        />
        <HomeCard
          img={img2}
          title="Check Puppy Availability"
          copy="We're proud of the care that we put in to each litter."
          button="Check for puppies"
          to="/available-puppies"
        />
        <HomeCard
          img={img3}
          title="Meet The Breeder"
          copy="He lives on the moon and works with dogs."
          button="Meet the breeder"
          to="/about#breeder"
        />
        <HomeCard
          img={img4}
          title="Read Our Story"
          copy="We've been doing this for years."
          button="Learn about us"
          to="/about"
        />
        <HomeCard
          img={img5}
          title="Like Us on Facebook"
          copy="Connect for special info and regular updates."
          button="Go to Facebook"
          to={data.fb.frontmatter.social.facebook}
          external={true}
        />
      </Cards>
    </Layout>
  );
};

export default IndexPage;
