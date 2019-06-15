import asfaltLight from '../media/asfalt-light.png'
import { createGlobalStyle } from './styledComponents'

const GlobalStyles = createGlobalStyle`
  /* global */
  * {
    border: 0;
    padding: 0;
    margin: 0;
  }
  html, body {
    box-sizing: border-box;
    background: rgb(2,0,36);
    background-image: url(${asfaltLight}), linear-gradient(175deg, rgba(2,0,36,1) 50%, rgba(0,40,34,1) 100%);
    background-attachment: fixed;
  }
  body {
    font-size: 16px;
    font-family: ${props => props.theme.paragraphFont};
    color: white;
    line-height: 1.75;
  }
  img {
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.headingFont};
    font-weight: normal;
    line-height: 1;
    opacity: .9;
  }
  h1 {
    font-size: ${props => props.theme.ms1};
  }
  h2 {
    font-size: ${props => props.theme.ms2};
  }
  h3 {
    font-size: ${props => props.theme.ms3};
  }
  h4 {
    font-size: ${props => props.theme.ms4};
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }
  h5 {
    font-size: ${props => props.theme.ms5};
    text-transform: uppercase;
  }
  h6 {
    font-size: ${props => props.theme.ms6};
  }
  p {
    line-height: 1.95;
    letter-spacing: .2px;
    opacity: .9;
  }
  a {
    text-decoration: none;
  }
  strong {
    font-weight: 700;
  }
  button {
    color: inherit;
  }

  /* Transitions */
  .fade-slide-up-enter {
    opacity: 0;
    transform: translateY(-0.25em);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-up-enter-active, .fade-slide-up-enter-done {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-up-exit {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-up-exit-active, .fade-slide-up-exit-done {
    opacity: 0;
    transform: translateY(-0.25em);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-down-enter {
    opacity: 0;
    transform: translateY(0.25em);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-down-enter-active, .fade-slide-down-enter-done {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-down-exit {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .fade-slide-down-exit-active, .fade-slide-down-exit-done {
    opacity: 0;
    transform: translateY(0.25em);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }

  /* Animations */
  @keyframes show {
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* Mobile */
  .mobile-hidden {
    @media(max-width: ${props => props.theme.sm}) {
      display: none;
    }
  }
`

export default GlobalStyles
