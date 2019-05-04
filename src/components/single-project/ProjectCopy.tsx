import React from 'react'

import { Project } from '../../utils/globalTypes'
import styled from '../../utils/styledComponents'

const Container = styled('div')`
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

interface Props {
  project: Project;
}

const ProjectCopy = ({ project }: Props) => (
  <Container>
    <h1>{project.name}</h1>
    <p>{project.description}</p>
    {project.approach.length > 0 && (
      <>
        <h3 style={{ marginTop: '2em' }}>Approach:</h3>
        <ul>
          {project.approach.map(task => (
            <li key={task}>
              <p>{task}</p>
            </li>
          ))}
        </ul>
      </>
    )}
  </Container>
)

export default ProjectCopy
