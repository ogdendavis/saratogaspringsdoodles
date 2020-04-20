/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const generatePagesFromCMS = async () => {
    await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then( res => {
      res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/components/page.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });
    }).catch( er => console.error('Error in gatsby-node createPages', er));
  }

  return generatePagesFromCMS();
}
