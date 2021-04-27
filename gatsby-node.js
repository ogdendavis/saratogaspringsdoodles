const path = require('path');

/**
 * Programmatically create pages from litters in CMS
 */
exports.createPages = ({ graphql, actions }) => {
  // Extract createPage function (hook?) from actions object
  const { createPage } = actions;
  // Grab template that will be used to render pages
  const litterPageTemplate = path.resolve('src/templates/litterPage.js');

  // Query to grab info needed for litter pages from graphql
  return graphql(`
    query litterPagesQuery {
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
              count
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
              photos {
                image
                caption
              }
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // Once we have data from graphql, do things!
    // First check for errors
    if (result.errors) {
      throw result.errors;
    }

    // Grab litters
    const litters = result.data.litters.edges;

    // If we only want to make pages for some litters, this is where we would filter them!

    // TODO: for litters with same title, generate unique slug
    // Use random number or ID? Must keep consistent for reproduction on front end

    // Now create the pages!
    litters.forEach(litter => {
      // Generate slug from title
      const slug = `${litter.node.frontmatter.title} ${litter.node.frontmatter.date}`
        .toLowerCase() // convert to all lowercase
        .replace(/[^A-Za-z0-9 ]/g, '') // strip non-word characters
        .replace('invalid date', 'coming soon') // remove invalid date from tbd litters
        .split(' ') // create array of words
        .join('-'); // join words with dashes

      // Publish the page using the template
      createPage({
        path: `litters/${slug}`,
        component: litterPageTemplate,
        context: {
          content: litter.node,
        },
      });
    });
  });
};
