import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import DogImage from '../../components/dogImage';
import DogCarousel from '../../components/dogCarousel';

const AboutSection = styled.section`
  margin-bottom: 1rem;
`;

const CallToAction = styled.div`
  background: teal;
  color: white;
  font-weight: 700;
  padding: 1rem;
  margin: 1rem auto 2rem;
  text-align: center;
  clear: both;

  a {
    color: orange;
    text-decoration: none;
    position: relative;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0px;
    height: 1px;
    margin: 1px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }
`;

const CareAndFeedingPage = ({ location }) => {
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
      <SEO title="Nutrition" />
      {/* Need to style this whole thing -- just getting content in, for now */}
      <h1>{business.frontmatter.title}</h1>
      <AboutSection>
        <div dangerouslySetInnerHTML={{ __html: business.html }} />
        <DogImage
          file={business.frontmatter.business_photo}
          alt={business.frontmatter.title}
          style={{
            width: '50%',
            margin: 'auto',
            minWidth: '340px',
          }}
        />
      </AboutSection>
      <CallToAction>
        Interested in adding a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <AboutSection>
        <h2>{business.frontmatter.title} dogs are special</h2>
        <div dangerouslySetInnerHTML={{ __html: dogs.html }} />
        <div dangerouslySetInnerHTML={{ __html: litters.html }} />
        <DogCarousel />
      </AboutSection>
      <CallToAction>
        Want to add a Moon Dog to your family?{' '}
        <Link to="/contact">Contact us</Link> for waitlist and reservation
        information.
      </CallToAction>
      <AboutSection id="breeder">
        <h2>Meet the Breeder</h2>
        <h3>{breeder.frontmatter.title}</h3>
        <DogImage
          file={breeder.frontmatter.breeder_photo}
          alt={breeder.frontmatter.title}
          style={{
            width: '25%',
            minWidth: '180px',
            float: 'left',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: breeder.html }} />
      </AboutSection>
      <CallToAction>
        Have a question about our dogs? <Link to="/contact">Contact us</Link>{' '}
        and we'll answer it.
      </CallToAction>
    </Layout>
  );
};

export default CareAndFeedingPage;
