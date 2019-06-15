import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import projects from '../data/projects'
import { AppState } from '../store'
import { FeatImgsLoadedState } from '../store/featImgsLoaded/types'
import { MeasurementsState } from '../store/measurements/types'
import { selectProject } from '../store/selectedProject/actions'
import { SelectedProjectState } from '../store/selectedProject/types'
import { enterProject, exitProject, initialWorkPaneReveal } from '../utils/animations'
import C from '../utils/constants'
import styled from '../utils/styledComponents'
import AllProjectsButton from './single-project/AllProjectsButton'
import SingleProject from './single-project/SingleProject'

const Container = styled('section')`
  position:relative;
  margin-top: 6em;
  /* min-height: 90vh; */
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
  opacity: 0;
`

interface Props {
  selectProject: typeof selectProject;
  selectedProject: SelectedProjectState;
  measurements: MeasurementsState;
  featImgsLoaded: FeatImgsLoadedState;
}
interface State {
  readyToReveal: boolean;
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
    this.state = {
      readyToReveal: false,
    }
  }

  componentDidMount() {
    const { featImgsLoaded } = this.props
    const { readyToReveal } = this.state
    if (featImgsLoaded >= Object.keys(projects).length && !readyToReveal) {
      this.setState({ readyToReveal: true })
      initialWorkPaneReveal(this.projectRefs)
    }
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentDidUpdate() {
    const { featImgsLoaded } = this.props
    const { readyToReveal } = this.state
    if (featImgsLoaded >= Object.keys(projects).length && !readyToReveal) {
      this.setState({ readyToReveal: true })
      initialWorkPaneReveal(this.projectRefs)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleProjectClick = (name: string) => {
    this.openProject(name)
  }

  handleProjectKeyPress = (name: string) => {
    this.openProject(name)
  }

  handleAllProjectsClick = () => {
    this.closeProject()
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { selectedProject } = this.props
    if (selectedProject && e.which === 27) {
      this.closeProject()
    }
  }

  openProject = (name: string) => {
    const { selectedProject, measurements, selectProject } = this.props
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

  closeProject = () => {
    const { selectedProject, measurements, selectProject } = this.props
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
    const { selectedProject } = this.props

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

const mapStateToProps = ({ measurements, selectedProject, featImgsLoaded }: AppState) => ({
  measurements,
  selectedProject,
  featImgsLoaded,
})

export default connect(mapStateToProps, {
  selectProject,
})(WorkPane)
