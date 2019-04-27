import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import styled from '../utils/styledComponents'
import projects from '../data/projects'
import C from '../utils/constants'
import { measureElement } from '../utils/measure'
import ProjectSidebar from './ProjectSidebar'
import { MeasurementsState } from '../store/measurements/types'
import { reportProject } from '../store/measurements/actions'
import { AppState } from '../store'
import ProjectGallery from './ProjectGallery'
import ProjectCopy from './ProjectCopy'

const Container = styled('div')<{ isSelected: boolean}>`
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-column-gap: 2em;
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

interface State {
  galleryImgsRdy: boolean;
  galleryImgsLoaded: number;
}

class SingleProject extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.projectRef = null
    this.state = {
      galleryImgsRdy: false,
      galleryImgsLoaded: 0,
    }
  }

  // componentDidUpdate() {
  //   const { galleryImgsRdy, galleryImgsLoaded } = this.state
  //   const { name } = this.props
  //   const project = projects[name]
  //   if (!galleryImgsRdy && galleryImgsLoaded >= project.galleryImgs.length) {
  //     this.setState({ galleryImgsRdy: true })
  //   }
  // }

  measureProjectTile = () => {
    const { reportProject, name } = this.props
    const measurements = measureElement(this.projectRef)
    if (measurements) reportProject(name, measurements)
  }

  handleFtrImgLoad = () => {
    this.measureProjectTile()
  }

  handleGalleryImgLoad = () => {
    const { galleryImgsRdy } = this.state
    if (!galleryImgsRdy) {
      this.setState(prevState => ({
        galleryImgsLoaded: prevState.galleryImgsLoaded + 1,
      }))
    }
  }

  setProjectRef = (el: HTMLDivElement) => {
    this.projectRef = el
  }

  private projectRef: HTMLDivElement | null;

  render() {
    const { name, isSelected, measurements } = this.props
    const measuredProjects = measurements.projects
    const imgWidth = measuredProjects[name] ? measuredProjects[name].width : null
    const imgHeight = measuredProjects[name] ? measuredProjects[name].height : null
    const project = projects[name]

    return (
      <Container ref={this.setProjectRef} isSelected={isSelected}>
        <ProjectSidebar
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          isSelected={isSelected}
          project={project}
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
