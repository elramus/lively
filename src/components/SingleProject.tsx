import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import styled from '../utils/styledComponents'
import projects from '../data/projects'
import C from '../utils/constants'
import { measureElement } from '../utils/measure'
import ProjectLeft from './ProjectLeft'
import { MeasurementsState } from '../store/measurements/types'
import { reportProject } from '../store/measurements/actions'
import { AppState } from '../store'
import { theme } from '../utils/theme'

const Container = styled('div')`
  position: relative;
  display: flex;
`
const Copy = styled('div')`
  flex: 0 1 50%;
  padding: 0 2em;
  h1 {
    margin-top: 0;
  }
  h1, h2, h3, h4, p {
    margin-bottom: 1em;
  }
  ul {
    margin: 1em 0 0 1.5em;
  }
`
const Gallery = styled('div') <{ galleryImgsRdy: boolean }>`
  flex: 0 1 25em;
  padding-left: 1em;
  img {
    box-shadow: ${props => props.theme.bigBoxShadow};
    opacity: ${props => (props.galleryImgsRdy ? '1' : '0')};
    margin-bottom: 1em;
  }
`

interface Props {
  // Connected Props
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

  componentDidUpdate() {
    const { galleryImgsRdy, galleryImgsLoaded } = this.state
    const { name } = this.props
    const project = projects[name]
    if (!galleryImgsRdy && galleryImgsLoaded >= project.galleryImgs.length) {
      this.setState({ galleryImgsRdy: true })
    }
  }

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

  getClassNames = (): string => {
    const { isSelected } = this.props
    let classNames = ''
    if (isSelected) classNames += 'selected'
    return classNames
  }

  setProjectRef = (el: HTMLDivElement) => {
    this.projectRef = el
  }

  private projectRef: HTMLDivElement | null;

  render() {
    const { galleryImgsRdy } = this.state
    const {
      name,
      isSelected,
      measurements,
    } = this.props
    const measuredProjects = measurements.projects
    const imgWidth = measuredProjects[name] ? measuredProjects[name].width : null
    const imgHeight = measuredProjects[name] ? measuredProjects[name].height : null
    const project = projects[name]

    return (
      <Container className={this.getClassNames()} ref={this.setProjectRef}>
        <ProjectLeft
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
          <Copy>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            {project.approach.length > 0 && (
              <>
                <h3 style={{ marginTop: '2em' }}>What I Did:</h3>
                <ul>
                  {project.approach.map(task => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </>
            )}
          </Copy>
        </CSSTransition>
        {project.galleryImgs.length > 0 && (
          <CSSTransition
            mountOnEnter
            in={isSelected}
            classNames="fade-slide-up"
            timeout={C.ProjectContentsTransition}
            unmountOnExit
          >
            <Gallery galleryImgsRdy={galleryImgsRdy}>
              {project.galleryImgs.map((image, i) => (
                <ImageZoom
                  key={image}
                  image={{
                    src: image,
                    alt: `${project.name} gallery ${i}`,
                    onLoad: () => this.handleGalleryImgLoad(),
                  }}
                  defaultStyles={{
                    overlay: {
                      backgroundColor: theme.darkBlue,
                    },
                  }}
                />
              ))}
            </Gallery>
          </CSSTransition>
        )}
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
