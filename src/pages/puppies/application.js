import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import SelectList from '../../components/selectList';

const FormContainer = styled.form`
  input:not([type='radio']):not([type='submit']),
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
  justify-content: flex-start;

  > input:not(:last-child),
  > div:not(:last-child) {
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
      <FormContainer
        name="application"
        method="POST"
        data-netlify="true"
        action="/application-submitted"
      >
        <input type="hidden" name="form-name" value="application" />
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
            <SelectList
              title="Does anyone in your family have pet allergies?"
              name="allergies"
              options={['Severe', 'Mild', 'None']}
              required={true}
            />
            <strong>Do you currently have any pets? If so, what kind?</strong>
            <textarea name="otherpets" placeholder="Dogs, cats, etc." />
            <strong>
              Tell us a little bit about yourself, your home, and your family
            </strong>
            <textarea
              name="homefamfreeresponse"
              placeholder="We'd like to get to know you!"
            />
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Plans for Your Puppy</FormSectionHeading>
          <FormGroup>
            <SelectList
              title="I'm planning for this puppy to be a:"
              name="purpose"
              options={[
                'Companion',
                'Service Dog',
                'Therapy Dog',
                'Breeding Dog',
              ]}
            />
            <SelectList
              title="Are you willing and able to provide a new puppy/dog with optimal health care, nutrition, and exercise?"
              name="healthacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
            <SelectList
              title="Are you aware that doodles have a high-maintenance coat that will require regular brushing and professional grooming every 6-8 weeks?"
              name="brushacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
            <SelectList
              title="Are you able to budget approximately $50-$90 (depending on your cut and groomer) every 6-8 weeks for professional grooming?"
              name="groomingacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
            <SelectList
              title="Are you willing and able to properly train and socialize a new puppy?"
              name="socializeacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
            <SelectList
              title="Will you seek the help of a professional trainer if you are unable to train your puppy/dog yourself?"
              name="trainacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
            <SelectList
              title="Will you contact us if the need should ever arise for you to re-home your puppy?"
              name="rehomeacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Your Preferences</FormSectionHeading>
          <FormGroup>
            <SelectList
              title="I'm interested in a:"
              name="breed"
              options={['Bernedoodle', 'Goldendoodle', 'Either']}
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <FormRow>
              <SelectList
                title="Preferred Color:"
                name="color"
                options={[
                  'No Preference',
                  'Phantom Black/Brown',
                  'Traditional Tricolor',
                  'Traditional Golden',
                ]}
              />
              <SelectList
                title="Preferred Gender:"
                name="gender"
                options={['No Preference', 'Male', 'Female']}
              />
            </FormRow>
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormSectionHeading>Price and Delivery</FormSectionHeading>
          <FormGroup>
            <SelectList
              title="Will you need delivery within the U.S.?"
              name="delivery"
              options={[
                'Yes, I will require a flight nanny and transportation to the airport for my puppy at additional cost',
                'No, I plan on flying in myself and will take my puppy home in the cabin as a carry-on',
                'No, I plan on driving to your location to pick up my puppy in person',
                'Unsure',
              ]}
              required={true}
            />
            <SelectList
              title="Have you read our pricing page?"
              name="priceacknowledge"
              options={[
                'Yes, I am aware of the total purchase price for my new puppy',
                'No, not yet',
              ]}
              required={true}
            />
            <SelectList
              title="Are you aware that your $500 deposit to secure a spot on our waiting list is non-refundable and will go towards the cost of your new puppy?"
              name="depositacknowledge"
              options={['Yes', 'No']}
              required={true}
            />
          </FormGroup>
        </FormSection>
        <Submit>
          <input type="submit" value="Submit Application" />
        </Submit>
      </FormContainer>
    </Layout>
  );
};

export default ApplicationPage;
