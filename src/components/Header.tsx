import React from 'react'

import me from '../media/luke-headshot-150.jpg'
import styled from '../utils/styledComponents'
import Nav from './Nav'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  margin: 0 auto;
  .left {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .headshot {
    display: inline-block;
    height: 3.5em;
    width: 3.5em;
    margin-right: 1em;
    border-radius: 100%;
    background-image: url(${me});
    background-size: cover;
  }
  h1 {
    letter-spacing: 1px;
    margin: 0 0 0.15em 0;
  }
`

const Header = () => (
  <Container>
    <div className="left">
      <div className="headshot" />
      <div>
        <h1>D. Luke Ramus</h1>
        <h4>UI / UX Developer</h4>
      </div>
    </div>
    <Nav />
  </Container>
)

export default Header
