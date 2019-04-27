import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import styled from '../utils/styledComponents'
import projects from '../data/projects'
import SingleProject from './SingleProject'
import { enterProject, exitProject } from '../utils/animations'
import C from '../utils/constants'
import TextButton from './TextButton'
import PaneHeadline from './PaneHeadline'
import { AppState } from '../store'
import { selectProject } from '../store/interactions/actions'
import { InteractionsState } from '../store/interactions/types'
import { MeasurementsState } from '../store/measurements/types'

const Container = styled('section')`
  min-height: 90vh;
`
/**
 * An inner container is necessary because we need to give some addition left padding to
 * project grid, but it can't actually be on it because offsetLeft measurements don't
 * include padding. That leads to a jump between where a project is animated to and where
 * it snaps to once grid switches to block.
 */
const GridContainer = styled('div')`
  position: relative;
  padding-left: 2.25em; /* use these to adjust the sides of the expanded project */
  padding-right: 1em;
  .text-button {
    position: absolute;
    top: -3.7em;
  }
  @media(max-width: ${props => props.theme.sm}) {
    padding-left: 1em;
  }
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

interface OwnProps {
  measurePanes: Function;
}
interface ConnectedProps {
  selectProject: typeof selectProject;
  interactions: InteractionsState;
  measurements: MeasurementsState;
}
type WorkPaneProps = OwnProps & ConnectedProps

interface State {
  galleryImgsLoadedCount: number;
}

class WorkPane extends Component<WorkPaneProps, State> {
  projectGridRef: null | HTMLDivElement;
  projectRefs: {
    [key: string]: null | HTMLDivElement;
  }

  constructor(props: WorkPaneProps) {
    super(props)
    this.projectRefs = {}
    this.projectGridRef = null
  }

  handleProjectClick = (name: string) => {
    const {
      interactions, measurements, selectProject, measurePanes,
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
        measurePanes,
      )
    }
  }

  handleProjectKeyPress = (name: string) => {
    this.handleProjectClick(name)
  }

  handleAllProjectsClick = () => {
    const {
      interactions, measurements, selectProject, measurePanes,
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
        measurePanes,
      )
    }
  }

  render() {
    const {
      interactions,
    } = this.props
    const { selectedProject } = interactions

    return (
      <Container>
        <PaneHeadline text="Here are some projects I've had the opportunity to work on recently" />
        <GridContainer>
          <CSSTransition
            mountOnEnter
            in={selectedProject !== null}
            timeout={C.ProjectContentsTransition}
            classNames="fade-slide-down"
            unmountOnExit
          >
            <TextButton
              onClick={() => this.handleAllProjectsClick()}
              icon={['far', 'long-arrow-left']}
              text="All Projects"
            />
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
        </GridContainer>
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
