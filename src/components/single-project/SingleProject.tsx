import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import projects from '../../data/projects'
import { AppState } from '../../store'
import { reportProject } from '../../store/measurements/actions'
import { MeasurementsState } from '../../store/measurements/types'
import C from '../../utils/constants'
import { measureElement } from '../../utils/measure'
import styled from '../../utils/styledComponents'
import ProjectCopy from './ProjectCopy'
import ProjectGallery from './ProjectGallery'
import ProjectSidebar from './ProjectSidebar'

const Container = styled('div')<{ isSelected: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr 400px;
  grid-column-gap: 3em;
  @media (max-width: ${props => props.theme.md}) {
    grid-template-columns: 250px 1fr;
    grid-row-gap: 2em;
  }
  @media (max-width: ${props => props.theme.sm}) {
    grid-template-columns: 1fr;
  }
`

interface Props {
  name: string;
  isSelected: boolean;
  measurements: MeasurementsState;
  reportProject: typeof reportProject;
}


class SingleProject extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.projectRef = null
  }

  componentDidMount() {
    window.addEventListener('resize', this.measureProjectTile)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.measureProjectTile)
  }

  measureProjectTile = () => {
    const { reportProject, name } = this.props
    const measurements = measureElement(this.projectRef)
    if (measurements) reportProject(name, measurements)
  }

  handleFtrImgLoad = () => {
    this.measureProjectTile()
  }

  setProjectRef = (el: HTMLDivElement) => {
    this.projectRef = el
  }

  projectRef: HTMLDivElement | null;

  render() {
    const { name, isSelected, measurements } = this.props
    const measuredProjects = measurements.projects
    const imgWidth = measuredProjects[name] ? measuredProjects[name].width : null
    const imgHeight = measuredProjects[name] ? measuredProjects[name].height : null
    const project = projects[name]

    return (
      <Container ref={this.setProjectRef} isSelected={isSelected} className="project-container">
        <ProjectSidebar
          project={project}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          isSelected={isSelected}
          handleFtrImgLoad={this.handleFtrImgLoad}
        />

        <CSSTransition
          mountOnEnter
          in={isSelected}
          classNames="fade-slide-up"
          timeout={C.ProjectContentsTransition}
          unmountOnExit
        >
          <ProjectCopy project={project} />
        </CSSTransition>

        <CSSTransition
          mountOnEnter
          in={isSelected}
          classNames="fade-slide-up"
          timeout={C.ProjectContentsTransition}
          unmountOnExit
        >
          <ProjectGallery
            project={project}
            isSelected={isSelected}
          />
        </CSSTransition>

      </Container>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  measurements: state.measurements,
})

export default connect(
  mapStateToProps,
  { reportProject },
)(SingleProject)
