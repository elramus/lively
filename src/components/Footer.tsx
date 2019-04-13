import React from 'react'
import styled from '../utils/styledComponents'

const Container = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  p {
    font-size: ${props => props.theme.ms6};
    opacity: 0.5;
    text-transform: uppercase;
  }
`

const Footer = () => (
  <Container>
    <p>&copy; {new Date().getFullYear()} Daniel Luke Ramus</p>
  </Container>
)

export default Footer
