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
    }
  `);

  // Convert dogs from graphql call into more accessible dogs object to easily look up images
  const dogImagePaths = {};
  data.dogs.edges.forEach(({ node }) => {
    dogImagePaths[node.frontmatter.title] = node.frontmatter.image;
  });
  // Add image paths to litters data, to better pass it to the template
  data.litters.dogImagePaths = dogImagePaths;

  const outro = `<p>As a breeder, I hold myself to a high standard of ethical breeding by performing <a href="/meet-the-dogs/genetic-testing">genetic testing</a> all of my breeding dogs to ensure that they have healthiest (and happiest) puppies possible.</p><p>All our pups are raised with an enormous amount of love and care: They're whelped in the puppy room across the hall from my bedroom and are moved to the kitchen once their eyes and ears are open. They're part of my family's every day life, and become accustomed to vacuuming, mopping, dishwashers, TV’s, music, lawnmowers outside, dogs, cats, and adults and children of all ages and sizes.</p><p>I use Early Neurological Stimulation (ENS) and Puppy Culture’s Puppy Enrichment Activities with my puppies, giving them the very best start in life before they go to their furever homes.</p><h2>Early Neurological Stimulation (ENS)</h2><p>In an effort to improve the performance of dogs used for military purposes, a program called “Bio Sensor” was developed. The military learned that performing early neurological stimulation exercises with puppies could have important and lasting effects. The studies showed that there are specific time periods early in life when neurological stimulation has maximum results.  The first period begins at the third day of life and lasts until the sixteenth day, because this interval of time is a period of rapid neurological growth and development.</p><p>I perform ENS with every puppy, handling them daily during that two-week window at the beginning of their lives. I go through the following exercises with each puppy every day:</p><ul><li>Tactile Stimulation: Holding the pup in one hand and gently tickling him or her between the toes using a Q-tip.</li><li>Head Held Erect: Using both hands, I hold the pup upright, so that its head is directly above its tail.</li><li>Head Pointed Down: Again using both hands, the puppy's head is reversed and pointed downward towards the ground.</li><li>Supine Position: I hold the pup so that its back is resting in the palms of my hands with its nose facing the ceiling.</li><li>Thermal Stimulation: I place the pup standing on a cool, damp towel.</li></ul><h3>ENS Benefits</h3><ul><li>Improved cardiovascular performance</li><li>Stronger heartbeat</li><li>Stronger adrenal glands</li><li>More tolerance to stress</li><li>Greater resistance to disease</li></ul><p>I do ENS in addition to the daily love and handling each pup receives beginning the moment it is born.</p>`;

  return (
    <Layout location={location}>
      <SEO title="Puppies and upcoming litters" />
      <PrimaryPageTemplate
        title="Upcoming Litters"
        section="puppies"
        intro={data.pageIntro.html}
        cardinfo={data.litters}
        outro={outro}
      />
    </Layout>
  );
};

export default PuppyPage;
