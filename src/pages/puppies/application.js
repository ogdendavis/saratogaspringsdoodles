import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const FormContainer = styled.form`
  input,
  textarea {
    border-radius: 5px;
    padding: 0.5rem;
  }

  .submitContainer {
    padding-top: 1rem;
    text-align: center;
  }

  input[type='submit'] {
    font-weight: 700;
    font-size: 1.1em;
    background-color: teal;
    color: white;
    padding: 0.5rem 3rem;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: orange;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 650px) {
    display: block;

    .senderInfo input {
      width: 100%;
    }

    .message textarea {
      min-height: 33vh;
    }
  }
`;

const ApplicationPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Puppy Application" />
      <h1>Puppy Application</h1>
      <p>This will be the application to join the waitlist!</p>
    </Layout>
  );
};

export default ApplicationPage;
