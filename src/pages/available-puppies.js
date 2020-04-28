import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LitterCard from '../components/litterCard.js';

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
        {data.litters.edges.map(({ node }) => (
          <LitterCard
            litter={node.frontmatter}
            dogImagePaths={dogImagePaths}
            key={`litter${node.frontmatter.dam.dam_name}${node.frontmatter.date}`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PuppyPage;
