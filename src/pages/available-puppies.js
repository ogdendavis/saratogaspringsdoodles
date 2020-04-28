import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DogImage from '../components/dogImage';

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
  margin-bottom: 1rem;

  div {
    width: 400px;
    min-width: 50%;
  }
`;

const LitterInfo = styled.div`
  margin: auto;
  ul {
    list-style: none;
    margin: 0 0 2em;
  }
`;

const PuppyPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query puppiesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/litters/.*.md/" } }
        sort: { order: ASC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              count
              colors
              size {
                min
                max
              }
              dam {
                dam_name
                dam_in_house
              }
              sire {
                sire_name
                sire_in_house
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Puppies and upcoming litters" />
      <h1>Our Upcoming Litters</h1>
      <p>
        <Link to="/contact">Contact us</Link> to inquire about availability for
        these litters
      </p>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const sire = node.frontmatter.sire.sire_in_house ? (
            <Link to={`/dogs#${node.frontmatter.sire.sire_name}`}>
              {node.frontmatter.sire.sire_name}
            </Link>
          ) : (
            node.frontmatter.sire.sire_name
          );
          const dam = node.frontmatter.dam.dam_in_house ? (
            <Link to={`/dogs#${node.frontmatter.dam.dam_name}`}>
              {node.frontmatter.dam.dam_name}
            </Link>
          ) : (
            node.frontmatter.dam.dam_name
          );

          return (
            <Litter
              key={`litter${node.frontmatter.dam.dam_name}${node.frontmatter.date}`}
            >
              <h2>
                {sire} and {dam}
              </h2>
              <ParentContainer>
                <DogImage />
                <DogImage />
              </ParentContainer>
              <LitterInfo>
                <ul>
                  <li>
                    <b>Due date:</b> {node.frontmatter.date}
                  </li>
                  {node.frontmatter.count && (
                    <li>
                      <b>Puppies expected:</b> {node.frontmatter.count}
                    </li>
                  )}
                  {node.frontmatter.size && (
                    <li>
                      <b>Full-grown size:</b> {node.frontmatter.size.min} to{' '}
                      {node.frontmatter.size.max} pounds
                    </li>
                  )}
                  {node.frontmatter.colors && (
                    <li>
                      <b>Possible colors: </b>
                      {node.frontmatter.colors}
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
