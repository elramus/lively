import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styled from '../utils/styledComponents'

const Container = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6em 0 1em 0;
  p {
    font-family: ${props => props.theme.headingFont};
    font-size: ${props => props.theme.ms(-2)};
    text-transform: uppercase;
    opacity: 0.5;
  }
  a {
    color: white;

  }
  svg {
    margin-left: 0.25em;
  }
`

const Footer = () => (
  <Container>
    <p>&copy; {new Date().getFullYear()} Daniel Luke Ramus. <a href="https://github.com/elramus/lively" target="_blank" rel="noopener noreferrer">View source code on  <FontAwesomeIcon icon={['fab', 'github']} /></a></p>
  </Container>
)

export default Footer
