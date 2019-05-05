import { Back, Power4, TimelineLite } from 'gsap'

import C from './constants'
import { ElMeasurements } from './globalTypes'

export function enterProject(
  name: string,
  projectRefs: { [key: string]: null | HTMLDivElement },
  measuredProjects: { [key: string]: ElMeasurements },
  projectGridRef: null | HTMLDivElement,
  selectProjectDispatch: Function,
) {
  const projectMeasurements = measuredProjects[name]
  const selectProjectTimeline = new TimelineLite()
  const projectToOpen = projectRefs[name]
  const projectsToHide = Object.keys(projectRefs)
    .filter(n => n !== name)
    .map(n => projectRefs[n])

  if (projectToOpen && projectGridRef) {
    selectProjectTimeline
      .staggerTo(projectsToHide,
        0.15,
        { ease: Power4.easeOut, opacity: 0, y: 20 },
        0.02)
      .to(projectToOpen,
        0.35,
        { ease: Back.easeInOut.config(0.5), x: -projectMeasurements.offsetLeft, y: -projectMeasurements.offsetTop })
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
  }
}

export function exitProject(
  selectedProject: string,
  projectRefs: { [key: string]: null | HTMLDivElement },
  measuredProjects: { [key: string]: ElMeasurements },
  projectGridRef: null | HTMLDivElement,
  selectProjectDispatch: Function,
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
        { ease: Back.easeInOut.config(0.5), x: 0, y: 0 })
      .staggerTo(projectsToReveal,
        0.25,
        { opacity: 1, y: 0 },
        0.05)
  }
}
