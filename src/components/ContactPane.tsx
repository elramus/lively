import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../utils/styledComponents'

const Container = styled('section')`
  padding-bottom: 10em;
  padding-right: 0;
  text-align: center;
  .links {
    text-align: center;
    margin-top: 5em;
    @media (max-width: ${props => props.theme.sm}) {
      display: flex;
      justify-content: space-between;
      max-width: 20em;
      margin-left: auto;
      margin-right: auto;
    }
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
      @media(max-width: ${props => props.theme.sm}) {
        position: relative;
        top: 0.5em;
        height: 1.5em;
        width: 1.5em;
        margin: 0;
        padding: 1.5em;
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
