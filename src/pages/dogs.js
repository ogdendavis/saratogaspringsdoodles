import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DogImage from '../components/dogImage';

const Dog = styled.section`
  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 128, 128, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const DogImageWrapper = styled.div`
  width: 100%;

  div {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const DogInfo = styled.div`
  h2 {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0 0 1rem;
    display: flex;
    flex-flow: row wrap;
    padding: 0 2rem;
    justify-content: center;

    li {
      display: inline-block;
      margin: 0 2rem;
    }
  }

  p {
    font-style: italic;
  }
`;

const DogPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query dogsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms-content-dogs/" } }
        sort: { order: ASC, fields: [frontmatter___name] }
      ) {
        edges {
          node {
            frontmatter {
              name
              breed
              color
              age
              sex
              bio
            }
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <SEO title="Our Dogs" />
      <h1>Our Dogs</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Dog key={`dog${node.frontmatter.name}`}>
          <DogImageWrapper>
            <DogImage style={{ width: '25%' }} />
          </DogImageWrapper>
          <DogInfo>
            <h2>{node.frontmatter.name}</h2>
            <ul>
              <li>{node.frontmatter.breed}</li>
              <li>{node.frontmatter.color}</li>
              <li>{node.frontmatter.sex === 'M' ? 'Male' : 'Female'}</li>
              <li>
                {node.frontmatter.age} year{node.frontmatter.age > 1 ? 's' : ''}
              </li>
            </ul>
            <p>{node.frontmatter.bio}</p>
          </DogInfo>
        </Dog>
      ))}
    </Layout>
  );
};

export default DogPage;
