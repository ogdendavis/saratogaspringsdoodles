/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.css';
import Footer from './footer';

// Header moved to transition component
const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/business.md/" }
      ) {
        frontmatter {
          title
        }
      }
      contact: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/contact.md/" }
      ) {
        frontmatter {
          phone
          email
          social {
            facebook
            instagram
            gooddog
            pawprint
            baxterandbella
          }
          address {
            street
            city
            state
            zip
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '1150px',
          padding: `0 1rem 1.5rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer
        company={data.site.frontmatter.title}
        contact={data.contact.frontmatter}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  location: {},
};

export default Layout;
