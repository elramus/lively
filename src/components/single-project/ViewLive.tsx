import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { Project } from '../../utils/globalTypes'
import styled from '../../utils/styledComponents'

const Container = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin-bottom: 2em;
  border-radius: 7px;
  background: ${props => props.theme.green};
  color: ${props => props.theme.darkBlue};
  transition: background 75ms ease-out, color 75ms ease-out;
  svg {
    position: relative;
    top: -2px;
    margin-left: 0.75em;
  }
  &:hover {
    background: rgba(255,255,255, .15);
    color: white;
  }
`

interface Props {
  project: Project;
}

const ViewLive = ({ project }: Props) => (
  <Container
    href={project.url}
    className="view-project-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h5>View Live Site</h5>
    <FontAwesomeIcon icon={['far', 'external-link-square']} />
  </Container>
)

export default ViewLive
