import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import C from '../../utils/constants'
import { Project } from '../../utils/globalTypes'
import styled from '../../utils/styledComponents'
import TextButton from '../TextButton'

const Container = styled('div')<{ isSelected: boolean }>`
  position: relative;
  cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
  .img-container {
    margin-bottom: 2em;
    height: 15em;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    opacity: ${props => (props.isSelected ? '1' : '0.75')};
    box-shadow: ${props => props.theme.bigBoxShadow};
    border-radius: 7px;
    transition: transform 150ms ease-out, opacity 150ms ease-out;
    img {
      display: none;
    }
  }
  &:hover {
    .img-container {
      opacity: 1;
    }
  }
`
const TechList = styled('ul')`
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.25em;
    list-style-type: none;
    .icon-container {
      padding-right: 0.5em;
      width: 1.5em;
      .svg-inline--fa {
        position: relative;
        top: -3px;
      }
      img {
        position: relative;
        top: -2px;
        left: 2px;
        max-width: 1em;
      }
    }
    span {
      font-size: ${props => props.theme.ms(-1)};
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

const ProjectSidebar = ({
  isSelected, project, handleFtrImgLoad,
}: Props) => {
  function handleViewLive() {
    if (project.url) window.open(project.url, '_blank')
  }

  function handleViewCode() {
    if (project.github) window.open(project.github, '_blank')
  }

  return (
    <Container isSelected={isSelected}>
      <div className="img-container" style={{ backgroundImage: `url(${project.featuredImg})` }}>
        {/* The image is display:none, but we use this to trigger onLoad */}
        <img
          src={project.featuredImg}
          alt={project.name}
          onLoad={() => handleFtrImgLoad()}
        />
      </div>
      {(project.url || project.tech.length > 0) && (
        <CSSTransition
          mountOnEnter
          in={isSelected}
          classNames="fade-slide-up"
          timeout={C.ProjectContentsTransition}
          unmountOnExit
        >
          <div>
            {project.url && (
              <TextButton
                text="Live Site"
                trailingIcon={['far', 'external-link-square']}
                onClick={handleViewLive}
                width="100%"
              />
            )}
            {project.github && (
              <TextButton
                text="Github"
                trailingIcon={['fab', 'github']}
                onClick={handleViewCode}
                width="100%"
              />
            )}
            {project.tech.length > 0 && (
              <TechList>
                {project.tech.map(t => (
                  <li key={t.label}>
                    <div className="icon-container">
                      {t.icon && (
                        <FontAwesomeIcon icon={t.icon} fixedWidth />
                      )}
                      {t.img && (
                        <img src={t.img} alt={t.label} />
                      )}
                    </div>
                    <span>{t.label}</span>
                  </li>
                ))}
              </TechList>
            )}
          </div>
        </CSSTransition>
      )}
    </Container>
  )
}

export default ProjectSidebar
