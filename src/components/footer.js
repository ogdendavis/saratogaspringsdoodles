import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import fb from '../images/icon-facebook-white.svg';
import insta from '../images/icon-instagram-white.svg';

const Foot = styled.footer`
  margin-top: 2em;
  padding-top: 1em;
  background: ${props => props.theme.headFootSolid};
  color: #f8f8f8;
  font-size: 0.8em;

  h3 {
    text-align: center;
  }
`;

const FootTop = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;
  justify-content: space-around;
  align-items: flex-start;
`;

const Contact = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.linkColorHover};
    transition: all 0.3s ease-in-out;
    position: relative;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0px;
    height: 1px;
    margin: 1px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: ${props => props.theme.linkColorHover};
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin: 0;
  }
`;

const SiteMap = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  h3 {
    width: 100%;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    line-height: 1.5;
  }

  > li {
    display: block;
    margin: 0 1em;
  }

  > li:first-of-type {
    margin-left: 0;
  }

  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in-out;
    position: relative;
  }
  a:hover {
    color: ${props => props.theme.linkColorHover};
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0px;
    height: 1px;
    margin: 1px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    margin: 0 auto;

    ul {
      margin: 0 1rem;
    }
    li {
      margin: 0;
    }
  }
`;

const FootSpacer = styled.div`
  display: none;
  visibility: hidden;

  @media only screen and (max-width: 1071px) {
    display: block;
    visibility: visible;
    margin: 1rem 0;
    width: 80vw;
    height: 1px;
    background: ${props => props.theme.offWhite};
  }
`;

const Social = styled.div`
  img {
    width: 60px;
    margin: 0 1em;
  }
`;

const FootMid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  margin: 1em 3em;
`;

const FootBottom = styled.div`
  box-sizing: border-box;
  padding: 2rem 2rem 1rem;
  text-align: center;
  line-height: 1.5;

  @media only screen and (max-width: 1071px) {
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: orange;
    transition: all 0.3s ease-in-out;
    position: relative;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0px;
    height: 1px;
    margin: 1px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }
`;

const Footer = ({ company = '', contact = {} }) => {
  const data = useStaticQuery(graphql`
    query footQuery {
      gd: file(relativePath: { eq: "gooddog-ssd-badge-color.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      pp: file(relativePath: { eq: "pawprint.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      bb: file(relativePath: { eq: "bbpartner.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Foot>
      <FootTop>
        <Contact>
          <h3>Get in Touch</h3>
          <ul>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </Contact>
        <FootSpacer />
        <SiteMap>
          <h3>Site Map</h3>
          <li>
            <Link key="foot/" to="/" tabIndex="0">
              Home
            </Link>
          </li>
          <li>
            <Link key="foot/puppies" to="/puppies" tabIndex="0">
              Puppies
            </Link>
            <ul>
              <li>
                <Link key="foot/p/index" to="/puppies" tabIndex="0">
                  Upcoming Litters
                </Link>
              </li>
              <li>
                <Link key="foot/p/gallery" to="/puppies/gallery" tabIndex="0">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  key="foot/p/policies"
                  to="/puppies/policies-and-pricing"
                  tabIndex="0"
                >
                  Policies & Pricing
                </Link>
              </li>
              <li>
                <Link
                  key="foot/p/guardians"
                  to="/puppies/guardians"
                  tabIndex="0"
                >
                  Guardian Program
                </Link>
              </li>
              <li>
                <Link
                  key="foot/p/application"
                  to="/puppies/application"
                  tabIndex="0"
                >
                  Application
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link key="foot/meet-the-dogs" to="/meet-the-dogs" tabIndex="0">
              Mamas & Papas
            </Link>
            <ul>
              <li>
                <Link key="foot/mom/loli" to="/meet-the-dogs" tabIndex="0">
                  Meet the Dogs
                </Link>
              </li>
              <li>
                <Link
                  key="foot/mom/testing"
                  to="/meet-the-dogs/genetic-testing"
                  tabIndex="0"
                >
                  Genetic Testing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              key="foot/care-and-feeding"
              to="/care-and-feeding"
              tabIndex="0"
            >
              Care & Feeding
            </Link>
            <ul>
              <li>
                <Link
                  key="foot/care/nutrition"
                  to="/care-and-feeding/nutrition"
                  tabIndex="0"
                >
                  Nutrition
                </Link>
              </li>
              <li>
                <Link
                  key="foot/care/training"
                  to="/care-and-feeding/training"
                  tabIndex="0"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  key="foot/care/enrichment"
                  to="/care-and-feeding/enrichment"
                  tabIndex="0"
                >
                  Enrichment
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link key="foot/contact" to="/contact" tabIndex="0">
              Contact Us
            </Link>
          </li>
        </SiteMap>
        <FootSpacer />
        <Social>
          <h3>Follow Us</h3>
          <a
            href={contact.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" width="60" height="60" />
          </a>
          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" width="60" height="60" />
          </a>
        </Social>
      </FootTop>
      <FootMid>
        <FootSpacer />
        <ImgContainer>
          <a
            href={contact.social.gooddog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={data.gd.childImageSharp.fixed} alt="Good Dog" />
          </a>
        </ImgContainer>
        <ImgContainer>
          <a
            href={contact.social.pawprint}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fixed={data.pp.childImageSharp.fixed}
              alt="Paw Print Genetics"
            />
          </a>
        </ImgContainer>
        <ImgContainer>
          <a
            href={contact.social.baxterandbella}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={data.bb.childImageSharp.fixed} alt="Baxter & Bella" />
          </a>
        </ImgContainer>
        <FootSpacer />
      </FootMid>
      <FootBottom>
        <div>
          Website by{' '}
          <a
            href="https://ogdendavis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Ogden-Davis
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.midwoofery.com/"
          >
            Midwoofery
          </a>
        </div>
        <div>
          © {new Date().getFullYear()}, {company}
        </div>
      </FootBottom>
    </Foot>
  );
};

export default Footer;
