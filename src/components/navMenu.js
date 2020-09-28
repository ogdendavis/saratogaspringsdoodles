import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.25em;
    color: white;
    transition: all 0.3s ease-in-out;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
    position: relative;
  }
  a:hover {
    color: orange;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }

  a.active-nav-link,
  a.active-nav-link:hover {
    color: #987;
  }
  a.active-nav-link:hover::before {
    opacity: 0;
  }

  /* Style for drop-downs */

  div.dropdownWrapper {
    position: relative;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-top: 0.5em;
    position: absolute;
    overflow-x: visible;
  }

  li {
    font-size: 0.85em;
    margin: 0;
    white-space: nowrap;
    a {
      width: fit-content;
    }
  }

  ul#puppies {
    display: ${({ hovered }) => (hovered === 'puppies' ? 'block' : 'none')};
    visibility: ${({ hovered }) =>
      hovered === 'puppies' ? 'visible' : 'hidden'};
  }
  ul#mama {
    display: ${({ hovered }) => (hovered === 'mama' ? 'block' : 'none')};
    visibility: ${({ hovered }) => (hovered === 'mama' ? 'visible' : 'hidden')};
  }
  ul#care {
    display: ${({ hovered }) => (hovered === 'care' ? 'block' : 'none')};
    visibility: ${({ hovered }) => (hovered === 'care' ? 'visible' : 'hidden')};
  }
`;

const NavMenu = ({ open }) => {
  const [hoverItem, setHoverItem] = useState('');

  return (
    <Menu className={open ? 'open' : ''} hovered={hoverItem}>
      <Link key="nav/" to="/" activeClassName="active-nav-link" tabIndex="0">
        Home
      </Link>
      <div
        className="dropdownWrapper"
        role="button"
        tabIndex="0"
        onMouseEnter={() => {
          setHoverItem('puppies');
        }}
        onMouseLeave={() => {
          setHoverItem('');
        }}
      >
        <Link
          key="nav/puppies"
          to="/puppies"
          activeClassName="active-nav-link"
          tabIndex="0"
        >
          Puppies
        </Link>
        <ul id="puppies">
          <li>
            <Link key="nav/p/index" to="/puppies" tabIndex="0">
              Upcoming Litters
            </Link>
          </li>
          <li>
            <Link key="nav/p/gallery" to="/puppies/gallery" tabIndex="0">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/policies"
              to="/puppies/policies-and-pricing"
              tabIndex="0"
            >
              Policies & Pricing
            </Link>
          </li>
          <li>
            <Link key="nav/p/guardians" to="/puppies/guardians" tabIndex="0">
              Guardian Program
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/application"
              to="/puppies/application"
              tabIndex="0"
            >
              Application
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="dropdownWrapper"
        role="button"
        tabIndex="0"
        onMouseEnter={() => {
          setHoverItem('mama');
        }}
        onMouseLeave={() => {
          setHoverItem('');
        }}
      >
        <Link
          key="nav/meet-our-mama"
          to="/meet-our-mama"
          activeClassName="active-nav-link"
          tabIndex="0"
        >
          Meet Our Mama
        </Link>
        <ul id="mama">
          <li>
            <Link key="nav/mom/loli" to="/meet-our-mama" tabIndex="0">
              Loli Pop
            </Link>
          </li>
          <li>
            <Link
              key="nav/mom/testing"
              to="/meet-our-mama/genetic-testing"
              tabIndex="0"
            >
              Genetic Testing
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="dropdownWrapper"
        role="button"
        tabIndex="0"
        onMouseEnter={() => {
          setHoverItem('care');
        }}
        onMouseLeave={() => {
          setHoverItem('');
        }}
      >
        <Link
          key="nav/care-and-feeding"
          to="/care-and-feeding"
          activeClassName="active-nav-link"
          tabIndex="0"
        >
          Care & Feeding
        </Link>
        <ul id="care">
          <li>
            <Link
              key="nav/care/nutrition"
              to="/care-and-feeding/nutrition"
              tabIndex="0"
            >
              Nutrition
            </Link>
          </li>
          <li>
            <Link
              key="nav/care/training"
              to="/care-and-feeding/training"
              tabIndex="0"
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              key="nav/care/enrichment"
              to="/care-and-feeding/enrichment"
              tabIndex="0"
            >
              Enrichment
            </Link>
          </li>
        </ul>
      </div>
      <Link
        key="nav/contact"
        to="/contact"
        activeClassName="active-nav-link"
        tabIndex="0"
      >
        Contact Us
      </Link>
    </Menu>
  );
};

export default NavMenu;
