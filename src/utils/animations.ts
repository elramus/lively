import { TimelineLite, Power4 } from 'gsap'
import C from './constants'
import { theme } from './theme'
import { ElMeasurements } from './globalTypes'

export function enterProject(
  name: string,
  projectRefs: { [key: string]: null | HTMLDivElement },
  measuredProjects: { [key: string]: ElMeasurements },
  projectGridRef: null | HTMLDivElement,
  selectProjectDispatch: Function,
  measurePanes: Function,
) {
  const projectMeasurements = measuredProjects[name]
  const selectProjectTimeline = new TimelineLite()
  const projectToOpen = projectRefs[name]
  const projectsToHide = Object.keys(projectRefs)
    .filter(n => n !== name)
    .map(n => projectRefs[n])

  if (projectToOpen && projectGridRef) {
    selectProjectTimeline
      .to(projectsToHide,
        0.15,
        { ease: Power4.easeOut, opacity: 0, y: 20 })
      .to(projectToOpen,
        0.35,
        { ease: Power4.easeOut, x: -projectMeasurements.offsetLeft, y: -projectMeasurements.offsetTop })
      .call(() => selectProjectDispatch(name)) // triggers CSSTransition of inner content
      .set(projectToOpen, {
        x: 0, y: 0,
      })
      .set(projectsToHide, {
        display: 'none',
      })
      .set(projectGridRef, {
        // switch the grid to plain 'ol block when showing project inner content
        display: 'block',
      })
      .to({}, (C.ProjectContentsTransition / 1000), {})
      .call(() => measurePanes())
  }
}

export function exitProject(
  selectedProject: string,
  projectRefs: { [key: string]: null | HTMLDivElement },
  measuredProjects: { [key: string]: ElMeasurements },
  projectGridRef: null | HTMLDivElement,
  selectProjectDispatch: Function,
  measurePanes: Function,
) {
  const projectMeasurements = measuredProjects[selectedProject]
  const showAllProjectsTimeline = new TimelineLite()
  const projectToClose = projectRefs[selectedProject]
  const projectsToReveal = Object.keys(projectRefs)
    .filter(name => name !== selectedProject)
    .map(name => projectRefs[name])

  if (projectGridRef && projectToClose) {
    selectProjectDispatch(null) // hides project inner contents

    showAllProjectsTimeline
      .to({}, (C.ProjectContentsTransition / 1000), {})
      .set(projectGridRef, {
        display: 'grid',
      })
      .set(projectsToReveal, {
        display: 'block',
      })
      .set(projectToClose, {
        x: -projectMeasurements.offsetLeft, y: -projectMeasurements.offsetTop,
      })
      .to(projectToClose,
        0.35,
        { x: 0, y: 0 })
      .to(projectsToReveal,
        0.15,
        { opacity: 1, y: 0 })
      .call(() => measurePanes())
  }
}

export function headlineCircuitEntrance(line: HTMLDivElement) {
  const sizeTimeline = new TimelineLite()
  sizeTimeline
    .to(line, 3, {
      width: '100%',
    })
}

export function navLinkCircuitEntrance(line: SVGPathElement | null) {
  if (line) {
    const colorTimeline = new TimelineLite()
    colorTimeline
      .to(line, 0.25, {
        stroke: 'white',
      })
      .to(line, 0.25, {
        stroke: theme.red,
      })
      .to(line, 0.25, {
        stroke: theme.green,
      })
      .to(line, 0.25, {
        stroke: theme.blue,
      })
      .to(line, 0.25, {
        stroke: theme.lightGray,
      })
      .to(line, 0.25, {
        stroke: theme.red,
      })
      .to(line, 0.25, {
        stroke: theme.green,
      })
      .to(line, 0.25, {
        stroke: theme.blue,
      })
      .to(line, 0.25, {
        stroke: theme.red,
      })
      .to(line, 0.25, {
        stroke: theme.green,
      })
      .to(line, 0.25, {
        stroke: theme.blue,
      })
      .to(line, 0.25, {
        stroke: theme.circuitPath,
      })
      .call(() => {
        // Remove in the inline style property so we can still use the dynamic
        // stroke property originally assigned.
        line.style.removeProperty('stroke')
      })
  }
}
