import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import projects from '../../data/projects'
import { AppState } from '../../store'
import { incrementImgsLoaded } from '../../store/featImgsLoaded/actions'
import { reportProject } from '../../store/measurements/actions'
import { MeasurementsState } from '../../store/measurements/types'
import C from '../../utils/constants'
import { measureElement } from '../../utils/measure'
import styled from '../../utils/styledComponents'
import ProjectCopy from './ProjectCopy'
import ProjectGallery from './ProjectGallery'
import ProjectSidebar from './ProjectSidebar'
import { selectProject } from '../../store/selectedProject/actions'

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

interface StoreProps {
  reportProject: typeof reportProject;
  incrementImgsLoaded: typeof incrementImgsLoaded;
  selectProject: typeof selectProject;
}
interface OwnProps {
  projectId: string;
  isSelected: boolean;
  measurements: MeasurementsState;
}
type Props = StoreProps & OwnProps

class SingleProject extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.projectRef = null
  }

  componentDidMount() {
    window.addEventListener('resize', this.measureProjectTile)
  }

  componentWillUnmount() {
    const { selectProject } = this.props
    selectProject(null)
    window.removeEventListener('resize', this.measureProjectTile)
  }

  measureProjectTile = () => {
    const { reportProject, projectId } = this.props
    const measurements = measureElement(this.projectRef)
    if (measurements) reportProject(projectId, measurements)
  }

  handleFtrImgLoad = () => {
    const { incrementImgsLoaded } = this.props
    incrementImgsLoaded()
    this.measureProjectTile()
  }

  setProjectRef = (el: HTMLDivElement) => {
    this.projectRef = el
  }

  projectRef: HTMLDivElement | null;

  render() {
    const { projectId, isSelected, measurements } = this.props
    const measuredProjects = measurements.projects
    const imgWidth = measuredProjects[projectId] ? measuredProjects[projectId].width : null
    const imgHeight = measuredProjects[projectId] ? measuredProjects[projectId].height : null
    const project = projects[projectId as keyof typeof projects]

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

export default connect(mapStateToProps, {
  reportProject,
  incrementImgsLoaded,
  selectProject,
})(SingleProject)
