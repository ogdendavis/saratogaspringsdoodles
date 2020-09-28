import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeCard from '../components/homepageCard';

import lolipop from '../../static/img/lolipop.webp';

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
          title="Temp Card"
          copy="This is a placeholder -- need to redesign cards!"
          button="Do it, then"
          to="/"
        />
      </Cards>
    </Layout>
  );
};

export default IndexPage;
