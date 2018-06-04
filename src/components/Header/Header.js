import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../../images/logo.svg'

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
  background-color: #56cbf9;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  min-height: 9.4rem; /* Match up with the content inside it  */
  h1 {
    img {
      height: 110px;
      margin: 0;
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
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
      font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
      a {
        text-decoration: none;
        color: #eff1f3;
        padding-bottom: 0.5rem;
        &:hover {
          border-bottom: 3px solid #56cbf9;
        }
      }
    }
  }
`

export default class Header extends Component {
  headerShouldBeLarge(pathName) {
    const pathToCheck = pathName ? pathName : this.props.location.pathname
    return pathToCheck === '/'
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props

    const largeHeader = this.headerShouldBeLarge()

    if (this.headerShouldBeLarge(prevProps.location.pathname) === largeHeader) {
      // no need to animate, we are already there
      return
    }
    if (largeHeader) {
      console.log('on home page')
      console.log(this.wrapper)
      // On home page, animate the header open
      this.wrapper.animate(
        [
          // animation frames
          { height: '20vh' },
          { height: '70vh' },
        ],
        {
          duration: 300, //ms
          fill: 'forwards', // tells animation to stay in the end frame
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        }
      )
    } else {
      console.log('on other page')
      console.log(this.wrapper)
      // not the home page, animate the header closed
      this.wrapper.animate(
        [
          // animation frames
          { height: '70vh' },
          { height: '20vh' },
        ],
        {
          duration: 300, //ms
          fill: 'forwards', // tells animation to stay in the end frame
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        }
      )
    }
  }

  render() {
    const { data, location } = this.props

    return (
      /* 
        Here we use findDOMNode to get the actual DOM element rather than the component. 
        This is necessary for working with the web animations API 
        */
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
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
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            opacity: 0.3,
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    )
  }
}
