import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../utils/styledComponents'
import { Project } from '../utils/globalTypes'
import C from '../utils/constants'

const Container = styled('div') <{ isSelected: boolean }>`
  position: relative;
  flex: 0 0 250px;
  text-align: center;
  cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
  .img-container {
    height: 15em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // filter: ${props => (props.isSelected ? 'saturate(1)' : 'saturate(0)')};
    opacity: ${props => (props.isSelected ? '1' : '0.75')};
    box-shadow: ${props => props.theme.bigBoxShadow};
    transition: transform 150ms ease-out, filter 150ms ease-out, opacity 150ms ease-out;
    img {
      display: none; // only used for tracking when img loads
    }
  }
  .view-project-button {
    display: block;
    padding: 1em;
    margin-top: 2em;
    border-radius: 7px;
    background: ${props => props.theme.red};
    color: ${props => props.theme.darkBlue};
    font-size: ${props => props.theme.ms5};
    svg {
      margin-left: 0.5em;
    }
  }
  &:hover {
    .img-container {
      // transform: ${props => (props.isSelected ? 'scale(1)' : 'scale(0.85)')};
      // filter: saturate(1);
      opacity: 1;
    }
  }
`

interface Props {
  imgWidth: number | null;
  imgHeight: number | null;
  isSelected: boolean;
  project: Project;
  handleFtrImgLoad: Function;
}

const ProjectLeft = ({
  isSelected, project, handleFtrImgLoad,
}: Props) => (
  <Container isSelected={isSelected}>
    <div className="img-container" style={{ backgroundImage: `url(${project.featuredImg})` }}>
      <img
        src={project.featuredImg}
        alt={project.name}
        onLoad={() => handleFtrImgLoad()}
      />
    </div>
    {project.url && (
      <CSSTransition
        mountOnEnter
        in={isSelected}
        classNames="fade-slide-up"
        timeout={C.ProjectContentsTransition}
        unmountOnExit
      >
        <a
          href={project.url}
          className="view-project-button"
          target="_blank"
          rel="noopener noreferrer"
        >
            View Live Site <FontAwesomeIcon icon={['fas', 'external-link-square']} />
        </a>
      </CSSTransition>
    )}
  </Container>
)

export default ProjectLeft
