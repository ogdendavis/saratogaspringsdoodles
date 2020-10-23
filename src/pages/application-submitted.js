import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ApplicationImage = styled(Img)`
  width: 600px;
  max-width: 90vw;
  border-radius: ${props => props.theme.borderRadius};
`;

const ApplicationSubmitted = ({ location }) => {
  const data = useStaticQuery(graphql`
    query applicationSubmittedQuery {
      image: file(relativePath: { eq: "puppies-blanket-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Application Submitted" />
      <h1>Application Submitted</h1>
      <p>
        Congratulations -- you've taken the first step towards adding a puppy to
        your family!
      </p>
      <p>Your application has been submitted, and we'll be in touch soon.</p>
      <ApplicationImage fluid={data.image.childImageSharp.fluid} width="800" />
    </Layout>
  );
};

export default ApplicationSubmitted;
