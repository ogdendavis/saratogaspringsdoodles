import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DogImage from '../components/dogImage';

const CallToAction = styled.div`
  background: teal;
  color: white;
  font-weight: 700;
  padding: 1rem;
  margin: 1rem auto;
`;

const AboutPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      breeder: file(absolutePath: { regex: "//cms/general/breeder.json/" }) {
        childGeneralJson {
          title
          breeder_photo
          breeder_bio
        }
      }
      business: file(absolutePath: { regex: "//cms/general/business.json/" }) {
        childGeneralJson {
          title
          business_photo
          business_about
        }
      }
      dogs: file(absolutePath: { regex: "//cms/general/dogs.json/" }) {
        childGeneralJson {
          dogs_parents
          dogs_litters
        }
      }
    }
  `);

  const breeder = data.breeder.childGeneralJson;
  const business = data.business.childGeneralJson;
  const dogs = data.dogs.childGeneralJson;

  return (
    <Layout location={location}>
      <SEO title="Contact Us" />
      {/* Need to style this whole thing -- just getting content in, for now */}
      {/* Make recurring contact us paragraphs into call-to-action banners */}
      <h1>{business.title}</h1>
      <p>{business.business_about}</p>
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <DogImage file={business.business_photo} alt={business.title} />
      <h2>{business.title} dogs are special</h2>
      {/* Create dog image gallery component?! */}
      <p>{dogs.dogs_parents}</p>
      <p>{dogs.dogs_litters}</p>
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <h2>Meet the Breeder</h2>
      <h3>{breeder.title}</h3>
      <DogImage file={breeder.breeder_photo} alt={breeder.title} />
      <p>{breeder.breeder_bio}</p>
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
    </Layout>
  );
};

export default AboutPage;
