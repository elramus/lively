import React, { Component } from 'react'
import { connect } from 'react-redux'
import _throttle from 'lodash/throttle'
import { isEqual } from 'lodash'
import styled from '../utils/styledComponents'
import SplashPane from './SplashPane'
import WorkPane from './WorkPane'
import AboutPane from './AboutPane'
import ContactPane from './ContactPane'
import NavLinkCircuits from './NavLinkCircuits'
import { UiNames } from '../utils/globalTypes'
import { measureElement } from '../utils/measure'
import { reportElement } from '../store/measurements/actions'
import { setVisiblePane } from '../store/interactions/actions'
import { AppState } from '../store'
import { MeasurementsState } from '../store/measurements/types'
import { InteractionsState } from '../store/interactions/types'
import SplashCircuits from './SplashCircuits'
import Footer from './Footer'

const Container = styled('div')`
  position: relative;
  .pane-container {
    padding: 1em;
  }
`

interface Props {
  reportElement: typeof reportElement;
  setVisiblePane: typeof setVisiblePane;
  measurements: MeasurementsState;
  interactions: InteractionsState;
}

class App extends Component<Props, {}> {
  paneRefs: {
    [key: string]: null | HTMLDivElement;
  }
  handleScrollThrottled: Function
  handleResizeThrottled: Function

  constructor(props: Props) {
    super(props)
    this.paneRefs = {}
    this.handleScrollThrottled = _throttle(() => {
      this.handleScroll()
    }, 500)
    this.handleResizeThrottled = _throttle(() => {
      this.handleResize()
    }, 500)
  }

  componentDidMount() {
    this.measurePanes()
    window.addEventListener('resize', () => this.handleResizeThrottled())
    window.addEventListener('scroll', () => this.handleScrollThrottled())
  }

  componentDidUpdate(prevProps: Props) {
    const { measurements } = this.props
    if (!isEqual(prevProps.measurements.projects, measurements.projects)) {
      this.measurePanes()
    }
  }

  handleResize = () => {
    this.measurePanes()
  }

  handleScroll = () => {
    const pos: number = window.pageYOffset
    this.choosePane(pos)
  }

  /**
   * At 75% of the way towards the offset top of each pane, that's where
   * we'll do the switch to focused on that.
   */
  choosePane = (pos: number) => {
    const { interactions, measurements, setVisiblePane } = this.props
    const measuredElements = measurements.elements
    const { visiblePane } = interactions
    if (pos > measuredElements[UiNames.ContactPane].offsetTop * 0.75) {
      if (visiblePane !== UiNames.ContactPane) setVisiblePane(UiNames.ContactPane)
      return false
    }
    if (pos > measuredElements[UiNames.AboutPane].offsetTop * 0.75) {
      if (visiblePane !== UiNames.AboutPane) setVisiblePane(UiNames.AboutPane)
      return false
    }
    if (pos > measuredElements[UiNames.WorkPane].offsetTop * 0.75) {
      if (visiblePane !== UiNames.WorkPane) setVisiblePane(UiNames.WorkPane)
      return false
    }
    // Otherwise just set to Splash Pane
    if (visiblePane !== UiNames.SplashPane) setVisiblePane(UiNames.SplashPane)
    return false
  }

  measurePanes = () => {
    const { reportElement } = this.props
    const splashMeasurements = measureElement(this.paneRefs[UiNames.SplashPane])
    const workMeasurements = measureElement(this.paneRefs[UiNames.WorkPane])
    const aboutMeasurements = measureElement(this.paneRefs[UiNames.AboutPane])
    const contactMeasurements = measureElement(this.paneRefs[UiNames.ContactPane])

    if (splashMeasurements) reportElement(UiNames.SplashPane, splashMeasurements)
    if (workMeasurements) reportElement(UiNames.WorkPane, workMeasurements)
    if (aboutMeasurements) reportElement(UiNames.AboutPane, aboutMeasurements)
    if (contactMeasurements) reportElement(UiNames.ContactPane, contactMeasurements)
  }

  render() {
    return (
      <Container>

        <NavLinkCircuits />
        <SplashCircuits />

        <div
          id="splash-pane"
          className="pane-container"
          ref={div => this.paneRefs[UiNames.SplashPane] = div}
        >
          <SplashPane />
        </div>

        <div
          id="work-pane"
          className="pane-container"
          ref={div => this.paneRefs[UiNames.WorkPane] = div}
        >
          {/* Pass down measurePanes because it needs to be able to remotely
          fire it during entering/exiting project animations */}
          <WorkPane measurePanes={this.measurePanes} />
        </div>

        <div
          id="about-pane"
          className="pane-container"
          ref={div => this.paneRefs[UiNames.AboutPane] = div}
        >
          <AboutPane />
        </div>

        <div
          id="contact-pane"
          className="pane-container"
          ref={div => this.paneRefs[UiNames.ContactPane] = div}
        >
          <ContactPane />
        </div>

        <Footer />
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
  { reportElement, setVisiblePane },
)(App)
