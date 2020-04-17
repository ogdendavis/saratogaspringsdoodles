import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import dog1 from '../images/dog1.png'

const HeaderWrapper = styled.header`
  background: teal;
  margin-bottom: 2em;
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 60em;
  padding: 1.5em;
  a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
`

const HeaderIcon = styled.img `
  max-height: 2em;
  margin-right: 1em;
`

const MainNav = styled.nav`
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
    transition: color .5s ease;
  }
  a:hover {
    color: orange;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderInner>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <HeaderIcon src={dog1} alt="Happy dog" />
          {siteTitle}
        </Link>
      </h1>
      <MainNav>
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Dogs</Link>
        <Link to="/">Available Puppies</Link>
        <Link to="/">Contact Us</Link>
      </MainNav>
    </HeaderInner>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
