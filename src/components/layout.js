/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

import Header from './header';
import './layout.css';

const Foot = styled.footer`
  margin-top: 4em;
  color: #aaa;
  font-size: 0.8em;
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          company
        }
      }
    }
  `);
  console.log(location);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: location.pathname === '/' ? '90vw' : '960px',
          padding: location.pathname === '/' ? '0' : `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Foot>
          © {new Date().getFullYear()}, {data.site.siteMetadata.company}
        </Foot>
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
