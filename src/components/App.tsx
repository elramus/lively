import React from 'react'

import styled from '../utils/styledComponents'
import Footer from './Footer'
import Header from './Header'
import WorkPane from './WorkPane'

const Container = styled('div')`
  position: relative;
  padding: 0 2em;
  margin: 0 auto;
  max-width: ${props => props.theme.globalMaxWidth};
`

const App = () => (
  <Container>
    <Header />
    <WorkPane />
    <Footer />
  </Container>
)

export default App
