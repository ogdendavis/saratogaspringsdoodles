import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Dog = styled.section`
  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 128, 128, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem;
`;

// Eventually make this a slideshow?
const DogImageWrapper = styled.div`
  width: 100%;

  img {
    display: block;
    border-radius: 5px;
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
        filter: { fileAbsolutePath: { regex: "/cms/dogs/.*.md/" } }
        sort: { order: ASC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              breed
              color
              birthdate
              gender
              bio
            }
          }
        }
      }
    }
  `);

  // Calculate ages from birthdays
  const now = new Date();
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const bday = new Date(node.frontmatter.birthdate);
    const ms = Math.floor(now - bday);
    // 31557600000 milliseconds in a year
    const years = Math.floor(ms / 31557600000);
    // 2629800000 milliseconds in a month
    const months = Math.floor(ms / 2629800000);
    node.frontmatter.displayAge =
      years > 0
        ? `${years} year${years > 1 ? 's' : ''}`
        : `${months} month${months > 1 ? 's' : ''}`;
  });

  return (
    <Layout location={location}>
      <SEO title="Our Dogs" />
      <h1>Our Dogs</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Dog key={`dog${node.frontmatter.title}`} id={node.frontmatter.title}>
          <DogImageWrapper>
            <img
              src={node.frontmatter.image}
              alt={node.frontmatter.title}
              style={{ width: '25%' }}
            />
          </DogImageWrapper>
          <DogInfo>
            <h2>{node.frontmatter.title}</h2>
            <ul>
              <li>{node.frontmatter.breed}</li>
              <li>{node.frontmatter.color}</li>
              <li>{node.frontmatter.sex === 'M' ? 'Male' : 'Female'}</li>
              <li>{node.frontmatter.displayAge}</li>
            </ul>
            <p>{node.frontmatter.bio}</p>
          </DogInfo>
        </Dog>
      ))}
    </Layout>
  );
};

export default DogPage;
