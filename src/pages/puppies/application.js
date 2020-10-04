import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const FormContainer = styled.form`
  input,
  textarea {
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 0.25rem;
  }
`;

const FormSection = styled.fieldset`
  padding: 1rem;
  width: 50vw;
  max-width: 600px;
  min-width: 300px;
  margin: 1.5rem auto;
`;

const FormSectionHeading = styled.legend`
  font-family: ${props => props.theme.headingFont};
  font-size: 2em;
`;

const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-items: flex-start;

  input:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Submit = styled.div`
  text-align: center;

  input {
    width: auto;
    font-weight: 700;
    font-size: 1.1em;
    background-color: ${props => props.theme.headFootSolid};
    color: white;
    padding: 0.5rem 3rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.linkColorHover};
      color: ${props => props.theme.headFootSolid};
      cursor: pointer;
    }
  }
`;

const ApplicationPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Puppy Application" />
      <h1>Puppy Application</h1>
      <FormContainer>
        <FormSection>
          <FormSectionHeading>About You</FormSectionHeading>
          <FormGroup>
            <FormRow>
              <input
                type="text"
                name="firstname"
                placeholder="First Name *"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name *"
                required
              />
            </FormRow>
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="address1"
              placeholder="Street Address *"
              required
            />
            <input type="text" name="address2" placeholder="Apt #, Box, etc." />
            <FormRow>
              <input type="text" name="city" placeholder="City *" required />
              <input type="text" name="state" placeholder="State *" required />
            </FormRow>
            <input type="text" name="zip" placeholder="Zip Code *" required />
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
            />
            <input type="tel" name="phone" placeholder="Your Phone*" required />
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>About Your Home</FormSectionHeading>
          <FormGroup>
            This will have info about home type and family members
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Your Previous Pets</FormSectionHeading>
          <FormGroup>Info about previous pets (duh)</FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Plans for Your Puppy</FormSectionHeading>
          <FormGroup>Plans for training, socialization, etc.</FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Your Preferences</FormSectionHeading>
          <FormGroup>Sex, color, coat, size, etc.</FormGroup>
        </FormSection>
        <Submit>
          <input type="submit" value="Submit Application" />
        </Submit>
      </FormContainer>
    </Layout>
  );
};

export default ApplicationPage;
