import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryPageTemplate from '../../templates/primary';

const PuppyPage = ({ location }) => {
  // Get all litter data, and image paths for all dogs
  const data = useStaticQuery(graphql`
    query puppiesQuery {
      litters: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cms/litters/.*.md/" } }
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM YYYY")
              reservation_list
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
              dub_sire {
                dub_sire_name
                dub_sire_in_house
                dub_sire_image
              }
            }
            html
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
      pageIntro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/litters.md/" }
      ) {
        html
      }
      pageOutro: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/puppy-training.md/" }
      ) {
        html
      }
    }
  `);

  // Sorted litters by date end up with "Invalid date" first
  // Move them to last by shifting the first item to the end of the array
  // until the first item of the array has a valid date
  while (data.litters.edges[0].node.frontmatter.date === 'Invalid date') {
    data.litters.edges.push(data.litters.edges.shift());
  }

  // Convert dogs from graphql call into more accessible dogs object to easily look up images
  const dogImagePaths = {};
  data.dogs.edges.forEach(({ node }) => {
    dogImagePaths[node.frontmatter.title] = node.frontmatter.image;
  });
  // Add image paths to litters data, to better pass it to the template
  data.litters.dogImagePaths = dogImagePaths;

  return (
    <Layout location={location}>
      <SEO title="Upcoming Litters" />
      <PrimaryPageTemplate
        location={location}
        title="Upcoming Litters"
        section="puppies"
        intro={data.pageIntro.html}
        cardinfo={data.litters}
        outro={data.pageOutro.html}
      />
    </Layout>
  );
};

export default PuppyPage;
