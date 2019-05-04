import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styled from '../utils/styledComponents'

const Container = styled('ul')`
  display: flex;
  li {
    list-style-type: none;
    margin-left: 0.5em;
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

const Header = () => (
  <Container>
    <li>
      <a href="mailto:luke.ramus@gmail.com">
        <FontAwesomeIcon icon={['far', 'envelope']} />
      </a>
    </li>
    <li>
      <a href="https://github.com/elramus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/lukeramus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </li>
  </Container>
)

export default Header
