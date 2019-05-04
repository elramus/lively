import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

import C from '../../utils/constants'
import { Project } from '../../utils/globalTypes'
import styled from '../../utils/styledComponents'
import ViewLive from './ViewLive'

const Container = styled('div')<{ isSelected: boolean }>`
  position: relative;
  cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
  .img-container {
    margin-bottom: 2em;
    height: 15em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${props => (props.isSelected ? '1' : '0.75')};
    box-shadow: ${props => props.theme.bigBoxShadow};
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
    align-items: baseline;
    margin-bottom: 0.25em;
    list-style-type: none;
    div {
      text-align: center;
      padding-right: 0.5em;
      .svg-inline--fa {
        position: relative;
        top: 1px;
      }
    }
    span {
      font-size: ${props => props.theme.ms5};
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
}: Props) => (
  <Container isSelected={isSelected}>
    <div className="img-container" style={{ backgroundImage: `url(${project.featuredImg})` }}>
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
            <ViewLive project={project} />
          )}
          {project.tech.length > 0 && (
            <TechList>
              {project.tech.map(t => (
                <li key={t.label}>
                  <div>
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

export default ProjectSidebar
