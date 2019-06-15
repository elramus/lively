import React from 'react'
import styled from '../utils/styledComponents'
import tools from '../media/tools-horizontal.png'

const Container = styled('div')`
  max-width: 50em;
  margin: 0 auto 6em auto;
  text-align: center;
  opacity: 0;
  transform: translateY(0.5em);
  animation: show 500ms forwards;
  h1 {
    margin: 2em 0;
  }
  p {
    margin-bottom: 1em;
    text-align: left;
  }
  img {
    width: 30em;
    margin-top: 4em;
  }
`

const About = () => (
  <Container>
    <h1>About Luke</h1>
    <p>Hi there, I’m a front-end engineer and user interface designer. I get my kicks from creating web experiences that magically wrestle complexity into delightful simplicity. <strong>But really I just love making great tools for people so they can work smarter.</strong></p>
    <p>My voracious appetite for learning and building along with an MS in Human-Computer Interaction has given me an eclectic background that touches the whole user-centered design lifecycle. Currently I work at the University of Chicago Law School where we build custom web applications for faculty, students, and staff when off-the-shelf solutions don't quite fit our needs. My favorite tools these days are React / Redux, TypeScript, and Laravel.</p>
    <img src={tools} alt="Some of my favorite tools" />
  </Container>
)

export default About
