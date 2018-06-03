import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.svg'

/**
 * Brand colors:
 *
 * 306b34 green ( borders? )
 * ff4989 pink (brand + call to action)
 * eff1f3 white (background mainly)
 * 080708 black (text, mainly)
 * 56cbf9 blue ( highlighted component, possibly call to action )
 */

const HeaderWrapper = styled.div`
  background: #56cbf9;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
