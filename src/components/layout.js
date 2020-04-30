/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Footer from './footer';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site: markdownRemark(
        fileAbsolutePath: { regex: "//cms/general/business.md/" }
      ) {
        frontmatter {
          title
          business_logo
        }
      }
      background: file(relativePath: { eq: "desert-dog-md.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.frontmatter.title}
        location={location}
        logo={data.site.frontmatter.business_logo}
        background={data.background.childImageSharp.fluid}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: location.pathname === '/' ? '90vw' : '960px',
          padding: location.pathname === '/' ? '0' : `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer company={data.site.frontmatter.title} />
      </div>
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
