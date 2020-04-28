import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import dogFace from '../images/dog5.png';

const Litter = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: space-around;

  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 128, 128, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1.25em;

  h2 {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: teal;
    transition: all 0.3s ease-in-out;
    position: relative;
  }
  a:hover {
    color: orange;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
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

const ParentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  min-width: 50%;

  figure {
    margin-bottom: 0.5rem;
  }

  caption {
    display: block;
    margin: auto;
    font-size: 0.75rem;
    font-style: italic;
  }
`;

const ParentImg = styled.img`
  display: block;
  width: 300px;
  max-width: 100%;
  margin: 5px auto 0;
  border-radius: 5px;
`;

const LitterInfo = styled.div`
  margin: auto;
  ul {
    list-style: none;
    margin: 0 0 2em;
  }
`;

const PuppyPage = ({ location }) => {
  // Get all litter data, and image paths for all dogs
  const data = useStaticQuery(graphql`
    query puppiesQuery {
      litters: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/litters/.*.md/" } }
        sort: { order: ASC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
              count
              colors
              size {
                min
                max
              }
              dam {
                dam_name
                dam_in_house
                dam_image
              }
              sire {
                sire_name
                sire_in_house
                sire_image
              }
            }
          }
        }
      }
      dogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/dogs/.*.md/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
            }
          }
        }
      }
    }
  `);

  // Convert dogs from graphql call into more accessible dogs object to easily look up images
  const dogImagePaths = {};
  data.dogs.edges.forEach(({ node }) => {
    dogImagePaths[node.frontmatter.title] = node.frontmatter.image;
  });

  return (
    <Layout location={location}>
      <SEO title="Puppies and upcoming litters" />
      <h1>Our Upcoming Litters</h1>
      <p>
        <Link to="/contact">Contact us</Link> to inquire about availability for
        these litters
      </p>
      <div>
        {data.litters.edges.map(({ node: litter }) => {
          // Get link to sire / dam profile, if in-house
          const sire = litter.frontmatter.sire.sire_in_house ? (
            <Link to={`/dogs#${litter.frontmatter.sire.sire_name}`}>
              {litter.frontmatter.sire.sire_name}
            </Link>
          ) : (
            litter.frontmatter.sire.sire_name
          );
          const dam = litter.frontmatter.dam.dam_in_house ? (
            <Link to={`/dogs#${litter.frontmatter.dam.dam_name}`}>
              {litter.frontmatter.dam.dam_name}
            </Link>
          ) : (
            litter.frontmatter.dam.dam_name
          );

          // Get path to sire / dam image: attached to litter, attached to in-house dog, or default img
          const damImage = litter.frontmatter.dam.dam_image ? (
            <ParentImg
              src={litter.frontmatter.dam.dam_image}
              alt={litter.frontmatter.dam.dam_name}
            />
          ) : litter.frontmatter.dam.dam_in_house ? (
            <ParentImg
              src={dogImagePaths[litter.frontmatter.dam.dam_name]}
              alt={litter.frontmatter.dam.dam_name}
            />
          ) : (
            <ParentImg src={dogFace} alt="dog face" />
          );
          const sireImage = litter.frontmatter.sire.sire_image ? (
            <ParentImg
              src={litter.frontmatter.sire.sire_image}
              alt={litter.frontmatter.dam.dam_name}
            />
          ) : litter.frontmatter.sire.sire_in_house ? (
            <ParentImg
              src={dogImagePaths[litter.frontmatter.sire.sire_name]}
              alt={litter.frontmatter.sire.sire_name}
            />
          ) : (
            <ParentImg src={dogFace} alt="dog face" />
          );

          return (
            <Litter
              key={`litter${litter.frontmatter.dam.dam_name}${litter.frontmatter.date}`}
            >
              <h2>
                {sire} and {dam}
              </h2>
              <ParentContainer>
                <figure>
                  {damImage}
                  <caption>{litter.frontmatter.dam.dam_name}</caption>
                </figure>
                <figure>
                  {sireImage}
                  <caption>{litter.frontmatter.sire.sire_name}</caption>
                </figure>
              </ParentContainer>
              <LitterInfo>
                <ul>
                  <li>
                    <b>Expected:</b> {litter.frontmatter.date}
                  </li>
                  {litter.frontmatter.count && (
                    <li>
                      <b>Puppy count:</b> {litter.frontmatter.count}
                    </li>
                  )}
                  {litter.frontmatter.size && (
                    <li>
                      <b>Full-grown size:</b> {litter.frontmatter.size.min} to{' '}
                      {litter.frontmatter.size.max} pounds
                    </li>
                  )}
                  {litter.frontmatter.colors && (
                    <li>
                      <b>Possible colors: </b>
                      {litter.frontmatter.colors}
                    </li>
                  )}
                </ul>
                <p>
                  <Link to="/contact">Contact us</Link> about this litter
                </p>
              </LitterInfo>
            </Litter>
          );
        })}
      </div>
    </Layout>
  );
};

export default PuppyPage;
