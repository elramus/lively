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
import { navLinkCircuitEntrance } from '../utils/animations'

const Container = styled('div') <{ rdyForCircuits: boolean }>`
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
      transition: stroke-dashoffset ${C.LineDashOffsetTransition}ms ease-out, stroke 150ms ease-out;
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

class NavLinkCircuits extends Component<Props, State> {
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
    // setTimeout(() => {
    //   navLinkCircuitEntrance(this.pathRefs[UiNames.WorkPath])
    // }, 700)
    // setTimeout(() => {
    //   navLinkCircuitEntrance(this.pathRefs[UiNames.AboutPath])
    // }, 900)
    // setTimeout(() => {
    //   navLinkCircuitEntrance(this.pathRefs[UiNames.ContactPath])
    // }, 1100)
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
    const { measurements, interactions } = this.props
    const measuredElements = measurements.elements
    const measuredPaths = measurements.paths
    const { hoveredNavLink, visiblePane } = interactions
    const aboutLink = measuredElements[UiNames.AboutLink]
    const aboutPane = measuredElements[UiNames.AboutPane]
    const aboutPath = measuredPaths[UiNames.AboutPath]
    const contactLink = measuredElements[UiNames.ContactLink]
    const contactPane = measuredElements[UiNames.ContactPane]
    const contactPath = measuredPaths[UiNames.ContactPath]
    const splashPane = measuredElements[UiNames.SplashPane]
    const workLink = measuredElements[UiNames.WorkLink]
    const workPane = measuredElements[UiNames.WorkPane]
    const workPath = measuredPaths[UiNames.WorkPath]


    if (Object.keys(measuredElements).length === 0) {
      return <div />
    }

    return (
      <Container rdyForCircuits={rdyForCircuits}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            id={UiNames.WorkPath}
            ref={div => this.pathRefs[UiNames.WorkPath] = div}
            stroke={(hoveredNavLink === UiNames.WorkLink || visiblePane === UiNames.WorkPane)
              ? theme.red
              : theme.circuitPath
            }
            d={`
              M ${this.initialPoints(UiNames.WorkLink).left} ${this.initialPoints(UiNames.WorkLink).top}
              v ${(splashPane.height - (workLink.top + workLink.height)) / 2 + splashPane.padding}
              H ${splashPane.width - splashPane.padding * 3}
              V ${workPane.offsetTop - workPane.padding}
              l -${workPane.padding} ${workPane.padding}
              H ${workPane.padding * 3}
              l -${workPane.padding} ${workPane.padding}
            `}
          />
          {workPath && (
            <circle
              cx={workPath.endPointX}
              cy={workPath.endPointY}
              r="4"
              fill={(hoveredNavLink === UiNames.WorkLink || visiblePane === UiNames.WorkPane)
                ? theme.red
                : theme.circuitPoint
              }
            />
          )}

          <path
            id={UiNames.AboutPath}
            ref={div => this.pathRefs[UiNames.AboutPath] = div}
            stroke={(hoveredNavLink === UiNames.AboutLink || visiblePane === UiNames.AboutPane)
              ? theme.blue
              : theme.circuitPath
            }
            d={`
              M ${this.initialPoints(UiNames.AboutLink).left} ${this.initialPoints(UiNames.AboutLink).top}
              v ${(splashPane.height - (aboutLink.top + aboutLink.height)) / 2}
              H ${splashPane.width - splashPane.padding * 2}
              V ${aboutPane.offsetTop - aboutPane.padding}
              l -${aboutPane.padding} ${aboutPane.padding}
              H ${aboutPane.padding * 3}
              l -${aboutPane.padding} -${aboutPane.padding}
            `}
          />
          {aboutPath && (
            <circle
              cx={aboutPath.endPointX}
              cy={aboutPath.endPointY}
              r="4"
              fill={(hoveredNavLink === UiNames.AboutLink || visiblePane === UiNames.AboutPane)
                ? theme.blue
                : theme.circuitPoint
              }
            />
          )}

          <path
            id={UiNames.ContactPath}
            ref={div => this.pathRefs[UiNames.ContactPath] = div}
            stroke={(hoveredNavLink === UiNames.ContactLink || visiblePane === UiNames.ContactPane)
              ? theme.green
              : theme.circuitPath
            }
            d={`
              M ${this.initialPoints(UiNames.ContactLink).left} ${this.initialPoints(UiNames.ContactLink).top}
              v ${(splashPane.height - (contactLink.top + contactLink.height)) / 2 - splashPane.padding}
              H ${splashPane.width - splashPane.padding}
              V ${contactPane.offsetTop}
              l -${contactPane.padding} ${contactPane.padding}
              H ${(contactPane.width / 2)}
              l -${contactPane.padding} ${contactPane.padding}
              v 110
              h 150
              h -300
            `}
          />

          {/* dots at the start of the nav circuit paths */}
          {workPath && (
            <>
              <circle
                className="workPathBlip"
                cx={workPath.startPointX}
                cy={workPath.startPointY}
                r="4"
                fill={(hoveredNavLink === UiNames.WorkLink || visiblePane === UiNames.WorkPane)
                  ? theme.red
                  : theme.circuitPoint
                }
              />
              <circle
                className="aboutPathBlip"
                cx={aboutPath.startPointX}
                cy={aboutPath.startPointY}
                r="4"
                fill={(hoveredNavLink === UiNames.AboutLink || visiblePane === UiNames.AboutPane)
                  ? theme.blue
                  : theme.circuitPoint
                }
              />
              <circle
                className="contactPathBlip"
                cx={contactPath.startPointX}
                cy={contactPath.startPointY}
                r="4"
                fill={(hoveredNavLink === UiNames.ContactLink || visiblePane === UiNames.ContactPane)
                  ? theme.green
                  : theme.circuitPoint
                }
              />
            </>
          )}
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
)(NavLinkCircuits)
