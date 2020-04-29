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
      breeder: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/breeder.md/" }
      ) {
        frontmatter {
          title
          breeder_photo
        }
        html
      }
      business: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/business.md/" }
      ) {
        frontmatter {
          title
          business_photo
        }
        html
      }
      dogs: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/dogs.md/" }
      ) {
        html
      }
      litters: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/litters.md/" }
      ) {
        html
      }
    }
  `);

  const breeder = data.breeder;
  const business = data.business;
  const dogs = data.dogs;
  const litters = data.litters;

  return (
    <Layout location={location}>
      <SEO title="Contact Us" />
      {/* Need to style this whole thing -- just getting content in, for now */}
      {/* Make recurring contact us paragraphs into call-to-action banners */}
      <h1>{business.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: business.html }} />
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <DogImage
        file={business.frontmatter.business_photo}
        alt={business.frontmatter.title}
      />
      <h2>{business.frontmatter.title} dogs are special</h2>
      {/* Create dog image gallery component?! */}
      <div dangerouslySetInnerHTML={{ __html: dogs.html }} />
      <div dangerouslySetInnerHTML={{ __html: litters.html }} />
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <h2>Meet the Breeder</h2>
      <h3>{breeder.frontmatter.title}</h3>
      <DogImage
        file={breeder.frontmatter.breeder_photo}
        alt={breeder.frontmatter.title}
      />
      <div dangerouslySetInnerHTML={{ __html: breeder.html }} />
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
    </Layout>
  );
};

export default AboutPage;
