import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import styled from '../utils/styledComponents'
import { revealNav } from '../utils/animations'

const Container = styled('ul')`
  display: flex;
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
      transition: background-color 100ms ease-out;
      svg {
        font-size: ${props => props.theme.ms2};
      }
      &:hover {
        background: rgba(255,255,255, .15);
      }
    }
  }
`

class Nav extends Component {
  emailRef: null | HTMLLIElement
  linkedInRef: null | HTMLLIElement
  gitHubRef: null | HTMLLIElement

  constructor(props: {}) {
    super(props)
    this.emailRef = null
    this.linkedInRef = null
    this.gitHubRef = null
  }

  componentDidMount() {
    if (this.emailRef && this.linkedInRef && this.gitHubRef) {
      revealNav([
        this.gitHubRef,
        this.linkedInRef,
        this.emailRef,
      ])
    }
  }

  render() {
    return (
      <Container>
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
