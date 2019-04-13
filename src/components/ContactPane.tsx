import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../utils/styledComponents'

const Container = styled('section')`
  padding-bottom: 10em;
  .links {
    text-align: center;
    margin-top: 5em;
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 2em;
      width: 2em;
      margin: 0 1.5em;
      padding: 2em;
      border-radius: 100%;
      background-color: ${props => props.theme.green};
      color: ${props => props.theme.darkBlue};
      transition: color 100ms ease-out;
      svg {
        font-size: ${props => props.theme.ms1};
      }
      &:hover, &:focus {
        color: white;
      }
    }
  }
`

const ContactPane = () => (
  <Container>
    <div className="links">
      <a href="https://github.com/elramus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="mailto:luke.ramus@gmail.com">
        <FontAwesomeIcon icon={['far', 'envelope']} />
      </a>
      <a href="https://www.linkedin.com/in/lukeramus" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </a>
    </div>
  </Container>
)

export default ContactPane
