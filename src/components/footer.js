import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import fb from '../images/icon-facebook-white.svg';
import insta from '../images/icon-instagram-white.svg';
import twit from '../images/icon-twitter-white.svg';

const Foot = styled.footer`
  margin-top: 2em;
  padding-top: 1em;
  background: rgb(0, 64, 64);
  color: #f8f8f8;
`;

const FootTop = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
`;

const Contact = styled.div`
  padding-bottom: 2rem;
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
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin: 0;
  }
`;

const Social = styled.div`
  img {
    width: 60px;
    margin: 0 1rem;
  }
`;

const FootBottom = styled.div`
  box-sizing: border-box;
  padding: 1rem 2rem;
  text-align: center;
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
        <Social>
          <a
            href={contact.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a
            href={contact.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twit} alt="Twitter" />
          </a>
        </Social>
      </FootTop>
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
