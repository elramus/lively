import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'
import styled from '../utils/styledComponents'
import { UiNames } from '../utils/globalTypes'
import { measureLine } from '../utils/measure'
import C from '../utils/constants'
import { MeasurementsState } from '../store/measurements/types'
import { AppState } from '../store'
import { InteractionsState } from '../store/interactions/types'
import { theme } from '../utils/theme'
import { reportPath } from '../store/measurements/actions'

const Container = styled('div')<{ rdyForCircuits: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transition: opacity 500ms ease-out;
  svg {
    path {
      stroke-width: 2;
      fill: transparent;
      stroke-dasharray: 5000;
      stroke-dashoffset: ${props => (props.rdyForCircuits ? 0 : 5000)};
      transition: stroke-dashoffset ${C.LineDashOffsetTransition}ms ease-out;
    }
  }
`

interface Props {
  measurements: MeasurementsState;
  interactions: InteractionsState;
  reportPath: typeof reportPath;
}
interface State {
  rdyForCircuits: boolean;
}

class DecorativeCircuits extends Component<Props, State> {
  pathRefs: {
    [key: string]: null | SVGPathElement;
  }

  constructor(props: Props) {
    super(props)
    this.pathRefs = {}
    this.state = {
      rdyForCircuits: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ rdyForCircuits: true })
    }, 500)
  }

  componentDidUpdate(prevProps: Props) {
    const { measurements } = this.props
    if (!isEqual(prevProps.measurements.elements, measurements.elements)) {
      this.measureAllLines()
    }
  }

  measureAllLines = () => {
    const { reportPath } = this.props
    Object.keys(this.pathRefs).forEach((pathName) => {
      const measurements = measureLine(this.pathRefs[pathName])
      if (measurements) reportPath(pathName, measurements)
    })
  }

  initialPoints = (navLink: UiNames): { [key: string]: number } => {
    const { measurements } = this.props
    const measuredElements = measurements.elements
    const top = measuredElements[navLink].top + measuredElements[navLink].height
    const left = measuredElements[navLink].left + measuredElements[navLink].width / 2
    return {
      top,
      left,
    }
  }

  render() {
    const { rdyForCircuits } = this.state
    const { measurements } = this.props
    const measuredElements = measurements.elements
    const contactPane = measuredElements[UiNames.ContactPane]

    if (!(UiNames.SplashPane in measuredElements)) {
      return null
    }

    const { padding, width, height } = measuredElements.splashPane

    return (
      <Container rdyForCircuits={rdyForCircuits}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke={theme.circuitPath}
            d={`
              M 0 0
              l ${padding * 2} ${padding * 2}
              H ${(width / 2) - padding}
              l ${padding} -${padding}
            `}
          />

          <path
            stroke={theme.circuitPath}
            d={`
              M ${width / 2} ${padding}
              H ${width - padding * 4}
              l ${padding * 3} ${padding * 3}
              V ${height / 2}
              l ${padding} ${padding}
            `}
          />

          <path
            stroke={theme.circuitPath}
            d={`
              M ${width / 2} ${padding * 2}
              H ${width - padding * 4}
              l ${padding * 2} ${padding * 2}
              V ${height / 2}
              l ${padding * 2} ${padding * 2}
            `}
          />

          <path
            stroke={theme.circuitPath}
            d={`
              M ${width / 2} ${padding * 3}
              H ${width - padding * 4}
              l ${padding} ${padding}
              V ${height / 2}
              l ${padding * 3} ${padding * 3}
            `}
          />

          <circle
            cx={width / 2}
            cy={padding}
            r="4"
            fill={theme.circuitPoint}
          />
          <circle
            cx={width / 2}
            cy={padding * 2}
            r="4"
            fill={theme.circuitPoint}
          />
          <circle
            cx={width / 2}
            cy={padding * 3}
            r="4"
            fill={theme.circuitPoint}
          />

          {/* bottom of the page circuits. Hide them on mobile. */}
          <path
            className="mobile-hidden"
            stroke={theme.circuitPath}
            d={`
              M 0 ${contactPane.offsetTop - 200}
              h ${contactPane.width / 10 + contactPane.padding * 2}
              l ${contactPane.padding} ${contactPane.padding}
              v 1500
            `}
          />
          <path
            className="mobile-hidden"
            stroke={theme.circuitPath}
            d={`
              M 0 ${contactPane.offsetTop - 200 + contactPane.padding}
              h ${contactPane.width / 10 + contactPane.padding}
              l ${contactPane.padding} ${contactPane.padding}
              v 1500
            `}
          />
          <path
            className="mobile-hidden"
            stroke={theme.circuitPath}
            d={`
              M 0 ${contactPane.offsetTop - 200 + (contactPane.padding * 2)}
              h ${contactPane.width / 10}
              l ${contactPane.padding} ${contactPane.padding}
              v 1500
            `}
          />
        </svg>
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  measurements: state.measurements,
  interactions: state.interactions,
})

export default connect(
  mapStateToProps,
  { reportPath },
)(DecorativeCircuits)
