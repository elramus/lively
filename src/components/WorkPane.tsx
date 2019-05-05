import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import projects from '../data/projects'
import { AppState } from '../store'
import { selectProject } from '../store/interactions/actions'
import { InteractionsState } from '../store/interactions/types'
import { MeasurementsState } from '../store/measurements/types'
import { enterProject, exitProject } from '../utils/animations'
import C from '../utils/constants'
import styled from '../utils/styledComponents'
import AllProjectsButton from './single-project/AllProjectsButton'
import SingleProject from './single-project/SingleProject'

const Container = styled('section')`
  position:relative;
  margin-top: 6em;
  min-height: 90vh;
`
const ProjectGrid = styled('div')`
  position: relative;
  display: grid;
  justify-content: center;
  margin: auto;
  grid-template-columns: 250px 250px 250px;
  grid-column-gap: 2em;
  @media (max-width: ${props => props.theme.md}) {
    grid-template-columns: 250px 250px;
  }
  @media (max-width: ${props => props.theme.sm}) {
    grid-template-columns: 1fr;
  }
`
const ProjectContainer = styled('div')`
  outline: 0;
`

interface Props {
  selectProject: typeof selectProject;
  interactions: InteractionsState;
  measurements: MeasurementsState;
}

interface State {
  galleryImgsLoadedCount: number;
}

class WorkPane extends Component<Props, State> {
  projectGridRef: null | HTMLDivElement;
  projectRefs: {
    [key: string]: null | HTMLDivElement;
  }

  constructor(props: Props) {
    super(props)
    this.projectRefs = {}
    this.projectGridRef = null
  }

  handleProjectClick = (name: string) => {
    const {
      interactions, measurements, selectProject,
    } = this.props
    const { selectedProject } = interactions
    const measuredProjects = measurements.projects
    if (!selectedProject) {
      enterProject(
        name,
        this.projectRefs,
        measuredProjects,
        this.projectGridRef,
        selectProject,
      )
    }
  }

  handleProjectKeyPress = (name: string) => {
    this.handleProjectClick(name)
  }

  handleAllProjectsClick = () => {
    const {
      interactions, measurements, selectProject,
    } = this.props
    const { selectedProject } = interactions
    const measuredProjects = measurements.projects
    if (selectedProject) {
      exitProject(
        selectedProject,
        this.projectRefs,
        measuredProjects,
        this.projectGridRef,
        selectProject,
      )
    }
  }

  render() {
    const { interactions } = this.props
    const { selectedProject } = interactions

    return (
      <Container>
        <CSSTransition
          mountOnEnter
          in={selectedProject !== null}
          timeout={C.ProjectContentsTransition}
          classNames="fade-slide-down"
          unmountOnExit
        >
          <AllProjectsButton clickHandler={() => this.handleAllProjectsClick()} />
        </CSSTransition>
        <ProjectGrid ref={div => this.projectGridRef = div}>
          {Object.keys(projects).map(name => (
            <ProjectContainer
              key={name}
              onClick={() => this.handleProjectClick(name)}
              onKeyPress={() => this.handleProjectKeyPress(name)}
              ref={div => this.projectRefs[name] = div}
              tabIndex={selectedProject === name ? undefined : 0}
              role="button"
            >
              <SingleProject name={name} isSelected={selectedProject === name} />
            </ProjectContainer>
          ))}
        </ProjectGrid>
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
  { selectProject },
)(WorkPane)
