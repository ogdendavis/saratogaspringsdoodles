import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutDiv = styled.div`
  font-size: 5rem;
  color: red;
  font-weight: 900;
`;

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact Us" />
      <AboutDiv>Yo!</AboutDiv>
    </Layout>
  );
};

export default AboutPage;
