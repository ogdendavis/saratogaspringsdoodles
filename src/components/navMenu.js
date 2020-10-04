import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${props => (props.athome ? 'white' : props.theme.offBlack)};
    transition: all 0.3s ease-in-out;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
    position: relative;
  }
  a:hover {
    color: ${props => props.theme.linkColorHover};
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
    background-color: ${props => props.theme.linkColorHover};
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }

  a.active-nav-link,
  a.active-nav-link:hover {
    color: ${props => props.theme.linkColor};
  }
  a.active-nav-link:hover::before {
    opacity: 0;
  }

  /* Style for drop-downs */

  div.dropdownWrapper {
    position: relative;
  }
`;

const NavSpacer = styled.div`
  height: 1em;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1em 1em;
  position: absolute;
  overflow-x: visible;
  background: ${props =>
    props.athome ? props.theme.headFootTransparent : props.theme.offWhite};

  li {
    margin: 0.5em 0;
    white-space: nowrap;
    a {
      width: fit-content;
    }
  }

  &#puppies {
    display: ${({ hovered }) => (hovered === 'puppies' ? 'block' : 'none')};
    visibility: ${({ hovered }) =>
      hovered === 'puppies' ? 'visible' : 'hidden'};
  }
  &#mama {
    display: ${({ hovered }) => (hovered === 'mama' ? 'block' : 'none')};
    visibility: ${({ hovered }) => (hovered === 'mama' ? 'visible' : 'hidden')};
  }
  &#care {
    display: ${({ hovered }) => (hovered === 'care' ? 'block' : 'none')};
    visibility: ${({ hovered }) => (hovered === 'care' ? 'visible' : 'hidden')};
  }
`;

const NavMenu = ({ open, athome }) => {
  const [hoverItem, setHoverItem] = useState('');

  return (
    <Menu className={open ? 'open' : ''} athome={athome}>
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
        <NavSpacer />
        <NavList id="puppies" hovered={hoverItem} athome={athome}>
          <li>
            <Link
              key="nav/p/index"
              to="/puppies"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Upcoming Litters
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/gallery"
              to="/puppies/gallery"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/policies"
              to="/puppies/policies-and-pricing"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Policies & Pricing
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/guardians"
              to="/puppies/guardians"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Guardian Program
            </Link>
          </li>
          <li>
            <Link
              key="nav/p/application"
              to="/puppies/application"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Application
            </Link>
          </li>
        </NavList>
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
        <NavSpacer />
        <NavList id="mama" hovered={hoverItem} athome={athome}>
          <li>
            <Link
              key="nav/mom/loli"
              to="/meet-our-mama"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Loli Pop
            </Link>
          </li>
          <li>
            <Link
              key="nav/mom/testing"
              to="/meet-our-mama/genetic-testing"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Genetic Testing
            </Link>
          </li>
        </NavList>
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
        <NavSpacer />
        <NavList id="care" hovered={hoverItem} athome={athome}>
          <li>
            <Link
              key="nav/care/nutrition"
              to="/care-and-feeding/nutrition"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Nutrition
            </Link>
          </li>
          <li>
            <Link
              key="nav/care/training"
              to="/care-and-feeding/training"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Training
            </Link>
          </li>
          <li>
            <Link
              key="nav/care/enrichment"
              to="/care-and-feeding/enrichment"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Enrichment
            </Link>
          </li>
        </NavList>
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
