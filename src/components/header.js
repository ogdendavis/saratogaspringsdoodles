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
