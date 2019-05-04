import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setVisiblePane } from '../store/interactions/actions'
import { reportElement } from '../store/measurements/actions'
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
const Background = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
 background: rgb(2,0,36);
background: linear-gradient(165deg, rgba(2,0,36,1) 30%, rgba(0,71,59,1) 100%);
`

class App extends Component {
  componentDidMount() {

  }

  handleResize = () => {

  }

  render() {
    return (
      <Container>
        <Background />
        <Header />
        <WorkPane />
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = () => ({

})

export default connect(
  mapStateToProps,
  { reportElement, setVisiblePane },
)(App)
