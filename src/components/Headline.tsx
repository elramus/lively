import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '../utils/styledComponents'
import { reportElement } from '../store/measurements/actions'
import { UiNames } from '../utils/globalTypes'
import { headlineCircuitEntrance } from '../utils/animations'

const Container = styled('div')`
  padding: 12.375em 0 5em 0;
  h1 {
    display: inline-block;
    position: relative;
    margin: 0 1.35em; // leave some extra room on the side for the splash circuits
  }
  .underline {
    position: absolute;
    bottom: -0.75em;
    width: 0.01%;
    left: 0;
    right: 0;
    margin: auto;
    height: 2px;
    background: ${props => props.theme.circuitPath};
    &:before, &:after {
      position: absolute;
      top: -3px;
      content: '';
      height: 8px;
      width: 8px;
      border-radius: 100%;
      background: ${props => props.theme.circuitPoint};
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
`

interface Props {
  reportElement: typeof reportElement;
}

class Headline extends Component<Props> {
  [UiNames.headline] = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const headline = this[UiNames.headline].current
    if (headline) {
      setTimeout(() => {
        headlineCircuitEntrance(headline)
      }, 500)
    }
  }

  render() {
    return (
      <Container>
        <h1>
          Hey! I'm Luke, and I like building useful and stylish spaces on the web.
          <div className="underline" ref={this[UiNames.headline]} />
        </h1>
      </Container>
    )
  }
}

const mapStateToProps = () => ({

})

export default connect(
  mapStateToProps,
  { reportElement },
)(Headline)
