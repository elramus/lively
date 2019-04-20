import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../utils/styledComponents'
import { Project } from '../utils/globalTypes'
import C from '../utils/constants'

const Container = styled('div')<{ isSelected: boolean }>`
  position: relative;
  /* flex: 0 0 250px; */
  cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
  .img-container {
    margin-bottom: 2em;
    height: 15em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${props => (props.isSelected ? '1' : '0.75')};
    box-shadow: ${props => props.theme.bigBoxShadow};
    transition: transform 150ms ease-out, filter 150ms ease-out, opacity 150ms ease-out;
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
const ViewProjectButton = styled('a')`
  display: block;
  padding: 1em;
  margin-bottom: 2em;
  border-radius: 7px;
  text-align: center;
  background: ${props => props.theme.red};
  color: ${props => props.theme.darkBlue};
  font-size: ${props => props.theme.ms5};
  svg {
    margin-left: 0.5em;
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
            <ViewProjectButton
              href={project.url}
              className="view-project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
                View Live Site <FontAwesomeIcon icon={['fas', 'external-link-square']} />
            </ViewProjectButton>
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
