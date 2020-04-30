import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Foot = styled.footer`
  margin-top: 4em;
  color: #aaa;
  font-size: 0.8em;
`;

const Footer = ({ company = '' }) => {
  return (
    <Foot>
      © {new Date().getFullYear()}, {company}
    </Foot>
  );
};

export default Footer;
