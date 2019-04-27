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
    background-color: ${props => props.theme.darkBlue};
  }
  body {
    font-size: 16px;
    font-weight: 300;
    font-family: 'libre franklin', sans-serif;
    color: ${props => props.theme.offWhite};
    line-height: 1.75;
  }
  section {
    position: relative;
    z-index: 10;
    padding: 0 2em 4em 0;
  }
  img {
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'pragati narrow', sans-serif;
    font-weight: normal;
    line-height: 1;
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
    font-weight: bold;
    text-transform: uppercase;
  }
  h5 {
    font-size: ${props => props.theme.ms5};
  }
  h6 {
    font-size: ${props => props.theme.ms6};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.darkGray};
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

  /* Mobile */
  .mobile-hidden {
    @media(max-width: ${props => props.theme.sm}) {
      display: none;
    }
  }
`

export default GlobalStyles
