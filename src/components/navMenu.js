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
  justify-content: space-between;
  align-items: flex-start;

  a {
    text-decoration: none;
    font-size: 1.5em;
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

  @media only screen and (max-width: 820px) {
    /* When Nav Burger is active */
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: flex-start;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    transform: translateY(-100%);
    background: rgb(0, 64, 64);
    padding-top: 3em;
    padding-left: 6em;
    padding-bottom: 2em;

    &.open {
      transform: none;
      a {
        color: orange;
      }
      a.active-nav-link {
        color: #987;
      }
    }

    & > a,
    .dropdownWrapper > a {
      font-size: 1.75em;
    }
  }
`;

const NavSpacer = styled.div`
  height: 1em;

  @media only screen and (max-width: 820px) {
    /* When Nav Burger is active */
    height: 0;
    display: none;
    visibility: hidden;
  }
`;

const NavList = styled.ul`
  font-size: 0.9em;
  list-style: none;
  margin: 0;
  padding: 0 1em 1em;
  position: absolute;
  overflow-x: visible;
  background: ${props =>
    props.athome ? props.theme.headFootTransparent : props.theme.offWhite};

  li {
    margin: 1em 0.25em;
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

  @media only screen and (max-width: 820px) {
    /* Styles for when nav burger is active */
    position: relative;
    padding: 0;

    li {
      margin: 0.5em 0 0.5em 1em;
    }

    &#puppies,
    &#mama,
    &#care {
      display: block;
      visibility: visible;
      background: transparent;
    }
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
          key="nav/meet-the-dogs"
          to="/meet-the-dogs"
          activeClassName="active-nav-link"
          tabIndex="0"
        >
          Mamas & Papas
        </Link>
        <NavSpacer />
        <NavList id="mama" hovered={hoverItem} athome={athome}>
          <li>
            <Link
              key="nav/mom/loli"
              to="/meet-the-dogs"
              tabIndex="0"
              activeClassName="active-nav-link"
            >
              Meet the Dogs
            </Link>
          </li>
          <li>
            <Link
              key="nav/mom/testing"
              to="/meet-the-dogs/genetic-testing"
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
