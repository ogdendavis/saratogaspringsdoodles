import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  a {
    margin: 1em 1em 0;
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
`;

const MainNav = () => {
  return (
    <Nav>
      <Link key="nav/" to="/" activeClassName="active-nav-link">
        Home
      </Link>
      <Link key="nav/about" to="/about" activeClassName="active-nav-link">
        About Us
      </Link>
      <Link key="nav/dogs" to="/dogs" activeClassName="active-nav-link">
        Our Dogs
      </Link>
      <Link
        key="nav/available-puppies"
        to="/available-puppies"
        activeClassName="active-nav-link"
      >
        Available Puppies
      </Link>
      <Link key="nav/contact" to="/contact" activeClassName="active-nav-link">
        Contact Us
      </Link>
    </Nav>
  );
};

export default MainNav;
