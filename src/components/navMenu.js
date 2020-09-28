import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  a {
    margin: 0 1em;
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

const NavMenu = ({ open }) => {
  return (
    <Menu className={open ? 'open' : ''}>
      <Link key="nav/" to="/" activeClassName="active-nav-link">
        Home
      </Link>
      <Link
        key="nav/puppies"
        to="/puppies"
        activeClassName="active-nav-link"
      >
        Puppies
      </Link>
      <Link key="nav/meet-our-mama" to="/meet-our-mama" activeClassName="active-nav-link">
        Meet Our Mama
      </Link>
      <Link key="nav/care-and-feeding" to="/care-and-feeding" activeClassName="active-nav-link">
        Care & Feeding
      </Link>
      <Link key="nav/contact" to="/contact" activeClassName="active-nav-link">
        Contact Us
      </Link>
    </Menu>
  );
};

export default NavMenu;
