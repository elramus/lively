import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styled from '../utils/styledComponents'

const Container = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0 1em 0;
  p {
    font-family: ${props => props.theme.headingFont};
    font-size: ${props => props.theme.ms6};
    text-transform: uppercase;
    opacity: 0.5;
  }
  svg {
    color: ${props => props.theme.green};
    margin-left: 0.25em;
  }
`

const Footer = () => (
  <Container>
    <p>&copy; {new Date().getFullYear()} Daniel Luke Ramus. View source code on <a href="https://github.com/elramus/lively" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></p>
  </Container>
)

export default Footer
