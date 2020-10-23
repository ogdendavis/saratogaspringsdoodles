import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MessageImage = styled(Img)`
  width: 400px;
  max-width: 90vw;
  border-radius: ${props => props.theme.borderRadius};
`;

const MessageSent = ({ location }) => {
  const data = useStaticQuery(graphql`
    query messageSentQuery {
      image: file(relativePath: { eq: "image1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Message Sent" />
      <h1>Message Sent</h1>
      <p>
        Thanks for reaching out. We'll get back to you as soon as we're able.
      </p>
      <MessageImage fluid={data.image.childImageSharp.fluid} width="800" />
    </Layout>
  );
};

export default MessageSent;
