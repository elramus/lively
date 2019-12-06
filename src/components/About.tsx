import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from '../utils/styledComponents'
import javascript from '../media/tools/javascript.png'
import laravel from '../media/tools/laravel.png'
import photoshop from '../media/tools/photoshop.png'
import react from '../media/tools/react.png'
import sass from '../media/tools/sass.png'
import sketch from '../media/tools/sketch.png'
import typescript from '../media/tools/typescript.png'
import wordpress from '../media/tools/wordpress.png'
import PortfolioButton from './PortfolioButton'

const Container = styled('div')`
  max-width: 45em;
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
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    li {
      list-style-type: none;
      max-width: 2em;
      opacity: 0.75;
      transition: opacity 100ms ease-out;
      &:hover {
        opacity: 1;
      }
    }
  }
`

const About = ({ history }: RouteComponentProps) => (
  <Container>
    <PortfolioButton clickHandler={() => history.push('/')} />
    <h1>About Luke</h1>
    <p>Hi there, I’m a front-end engineer and UI/UX designer. I get my kicks from creating web experiences that magically wrestle complexity into delightful simplicity. <strong>But really I just love making great tools for people so they can work smarter.</strong></p>
    <p>I have an MS in Human-Computer Interaction and a voracious appetite for learning new tech and building things. My favorite tools these days are <strong>React / Redux, TypeScript,</strong> and <strong>Laravel</strong>. Currently I work at the University of Chicago Law School where we build custom web applications for faculty, students, and staff when off-the-shelf solutions don't quite fit our needs.</p>
    <ul>
      <li>
        <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
          <img src={react} alt="react" />
        </a>
      </li>
      <li>
        <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noopener noreferrer">
          <img src={typescript} alt="typescript" />
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <img src={javascript} alt="javascript" />
        </a>
      </li>
      <li>
        <a href="https://github.com/laravel/laravel" target="_blank" rel="noopener noreferrer">
          <img src={laravel} alt="laravel" />
        </a>
      </li>
      <li>
        <a href="https://github.com/sass/sass" target="_blank" rel="noopener noreferrer">
          <img src={sass} alt="sass" />
        </a>
      </li>
      <li>
        <a href="https://github.com/WordPress/WordPress" target="_blank" rel="noopener noreferrer">
          <img src={wordpress} alt="wordpress" />
        </a>
      </li>
      <li>
        <a href="https://sketch.com" target="_blank" rel="noopener noreferrer">
          <img src={sketch} alt="sketch" />
        </a>
      </li>
      <li>
        <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
          <img src={photoshop} alt="photoshop" />
        </a>
      </li>
    </ul>
  </Container>
)

export default About
