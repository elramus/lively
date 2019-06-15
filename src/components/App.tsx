import React from 'react'
import { Route } from 'react-router-dom'
import styled from '../utils/styledComponents'
import Footer from './Footer'
import Header from './Header'
import WorkPane from './WorkPane'
import About from './About'

const Container = styled('div')`
  position: relative;
  padding: 0 2em;
  margin: 0 auto;
  max-width: ${props => props.theme.globalMaxWidth};
`

const App = () => (
  <Container>
    <Header />
    <Route exact path="/" component={WorkPane} />
    <Route exact path="/about" component={About} />
    <Footer />
  </Container>
)

export default App
