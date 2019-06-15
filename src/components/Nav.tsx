import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../utils/styledComponents'
import { revealNav } from '../utils/animations'
import me from '../media/luke-headshot-150.jpg'

const Container = styled('ul')`
  display: flex;
  align-items: center;
  li {
    list-style-type: none;
    margin-left: 0.5em;
    opacity: 0;
    &:first-child {
      margin-left: 0;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5em;
      width: 3.5em;
      border-radius: 100%;
      color: white;
      transition: background 100ms ease-out;
      svg {
        font-size: ${props => props.theme.ms2};
      }
      &:hover, &.active {
        background: rgba(255,255,255, .15);
      }
    }
    &.about {
      margin-right: 1em;
      padding-right: 2em;
      border-right: 1px solid rgba(255,255,255, 0.25);
      a {
        height: 5em;
        width: 5em;
        picture {
          line-height: 0;
          img {
            height: 3em;
            width: 3em;
            border-radius: 100%;
            object-position: center;
            object-fit: cover;
          }
        }
      }
    }
  }
`

class Nav extends Component {
  aboutRef: null | HTMLLIElement
  emailRef: null | HTMLLIElement
  linkedInRef: null | HTMLLIElement
  gitHubRef: null | HTMLLIElement

  constructor(props: {}) {
    super(props)
    this.aboutRef = null
    this.emailRef = null
    this.linkedInRef = null
    this.gitHubRef = null
  }

  componentDidMount() {
    if (this.aboutRef && this.emailRef && this.linkedInRef && this.gitHubRef) {
      revealNav([
        this.aboutRef,
        this.gitHubRef,
        this.linkedInRef,
        this.emailRef,
      ])
    }
  }

  render() {
    return (
      <Container>
        <li className="about" ref={li => this.aboutRef = li}>
          <NavLink to="/about" activeClassName="active">
            <picture>
              <img src={me} alt="" />
            </picture>
          </NavLink>
        </li>
        <li ref={li => this.gitHubRef = li}>
          <a href="https://github.com/elramus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li ref={li => this.linkedInRef = li}>
          <a href="https://www.linkedin.com/in/lukeramus" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li ref={li => this.emailRef = li}>
          <a href="mailto:luke.ramus@gmail.com">
            <FontAwesomeIcon icon={['far', 'envelope']} />
          </a>
        </li>
      </Container>
    )
  }
}


export default Nav
