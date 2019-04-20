import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import styled from '../utils/styledComponents'
import { Project } from '../utils/globalTypes'
import { theme } from '../utils/theme'

const Container = styled('div')`
  @media(max-width: ${props => props.theme.md}) {
    grid-column-start: span 2;
    text-align: center;
  }
  @media(max-width: ${props => props.theme.sm}) {
    grid-column-start: span 1;
    text-align: center;
  }
  img {
    box-shadow: ${props => props.theme.bigBoxShadow};
    margin-bottom: 1em;
  }
`

interface Props {
  project: Project;
  isSelected: boolean;
}

const ProjectGallery = ({
  project,
}: Props) => (
  <Container>
    {project.galleryImgs.map((image, i) => (
      <ImageZoom
        key={image}
        image={{
          src: image,
          alt: `${project.name} gallery ${i}`,
        }}
        defaultStyles={{
          overlay: {
            backgroundColor: theme.darkBlue,
          },
        }}
      />
    ))}
  </Container>
)

export default ProjectGallery
