import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollLink } from 'react-scroll'
import styled from '../utils/styledComponents'
import { theme } from '../utils/theme'
import { measureElement } from '../utils/measure'
import { UiNames } from '../utils/globalTypes'
import { AppState } from '../store'
import { reportElement } from '../store/measurements/actions'
import { MeasurementsState } from '../store/measurements/types'
import { setHoveredNavLink } from '../store/interactions/actions'
import Headline from './Headline'

const Container = styled('section')`
  height: 100vh;
  text-align: center;
  padding: 0;
`
const NavItem = styled('li') <{ hoverColor: string }>`
  display: inline-block;
  list-style-type: none;
  cursor: pointer;
  a {
    position: relative;
    display: flex;
    align-items: center;
    font-family: 'pragati narrow', sans-serif;
    padding: 0 1.5em;
    font-size: ${props => props.theme.ms3};
    transition: transform 150ms ease-out;
    .linkIcon {
      margin-right: 0.5em;
    }
    .fa-angle-down {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      opacity: 0;
      transform: translateY(-1em);
      transition: transform 150ms ease-out, opacity 150ms ease-out;
    }
    &:hover, &:focus {
      outline: none;
      color: ${props => props.hoverColor};
      transform: translateY(-0.5em);
      .fa-angle-down {
        opacity: 1;
        transform: translateY(0.5em);
      }
    }
  }
`

interface Props {
  measurements: MeasurementsState;
  reportElement: typeof reportElement;
  setHoveredNavLink: typeof setHoveredNavLink;
}

class SplashPane extends Component<Props> {
  [UiNames.WorkLink] = React.createRef<HTMLLIElement>();
  [UiNames.AboutLink] = React.createRef<HTMLLIElement>();
  [UiNames.ContactLink] = React.createRef<HTMLLIElement>();

  componentDidMount() {
    this.measureElements()
    window.addEventListener('resize', this.measureElements)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.measureElements)
  }

  measureElements = () => {
    const { reportElement } = this.props
    const workLinkMeasurements = measureElement(this.workLink.current)
    if (workLinkMeasurements) reportElement(UiNames.WorkLink, workLinkMeasurements)
    const aboutLinkMeasurements = measureElement(this.aboutLink.current)
    if (aboutLinkMeasurements) reportElement(UiNames.AboutLink, aboutLinkMeasurements)
    const contactLinkMeasurements = measureElement(this.contactLink.current)
    if (contactLinkMeasurements) reportElement(UiNames.ContactLink, contactLinkMeasurements)
  }

  handleNavLinkHover = (name: string | null) => {
    const { setHoveredNavLink } = this.props
    setHoveredNavLink(name)
  }

  render() {
    return (
      <Container id="intro">
        <Headline />
        <ul>
          <NavItem
            hoverColor={theme.red}
            ref={this.workLink}
            onMouseEnter={() => this.handleNavLinkHover(UiNames.WorkLink)}
            onMouseLeave={() => this.handleNavLinkHover(null)}
          >
            <ScrollLink to="work-pane" smooth duration={400} offset={-20} style={{ color: theme.red }}>
              <FontAwesomeIcon className="linkIcon" icon={['far', 'wrench']} />
              Work
              <FontAwesomeIcon icon={['far', 'angle-down']} />
            </ScrollLink>
          </NavItem>

          <NavItem
            hoverColor={theme.blue}
            ref={this.aboutLink}
            onMouseEnter={() => this.handleNavLinkHover(UiNames.AboutLink)}
            onMouseLeave={() => this.handleNavLinkHover(null)}
          >
            <ScrollLink to="about-pane" smooth duration={400} offset={-30} style={{ color: theme.blue }}>
              <FontAwesomeIcon className="linkIcon" icon={['far', 'hand-spock']} />
              About
              <FontAwesomeIcon icon={['far', 'angle-down']} />
            </ScrollLink>
          </NavItem>

          <NavItem
            hoverColor={theme.green}
            ref={this.contactLink}
            onMouseEnter={() => this.handleNavLinkHover(UiNames.ContactLink)}
            onMouseLeave={() => this.handleNavLinkHover(null)}
          >
            <ScrollLink to="contact-pane" smooth duration={400} style={{ color: theme.green }}>
              <FontAwesomeIcon className="linkIcon" icon={['far', 'envelope']} />
              Contact
              <FontAwesomeIcon icon={['far', 'angle-down']} />
            </ScrollLink>
          </NavItem>
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  measurements: state.measurements,
})

export default connect(
  mapStateToProps,
  { reportElement, setHoveredNavLink },
)(SplashPane)
