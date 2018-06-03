import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
      /* background-color: #262322;
      background-color: #262322aa;
      box-shadow: 4px 3px 30px #262322; */
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

const Header = ({ data }) => (
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
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
)

export default Header
