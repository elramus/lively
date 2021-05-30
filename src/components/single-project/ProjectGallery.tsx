import { FC } from 'react'

import ImageZoom from 'react-medium-image-zoom'
import styled from 'styled-components'

import { Project } from '../../utils/globalTypes'
import { theme } from '../../utils/theme'

const Container = styled('div')`
	max-width: 400px; /* same as its column width in SingleProject */
	margin-left: auto;
	margin-right: auto;
	@media (max-width: ${props => props.theme.md}) {
		grid-column-start: span 2;
		text-align: center;
	}
	@media (max-width: ${props => props.theme.sm}) {
		grid-column-start: span 1;
		text-align: center;
	}
	img {
		box-shadow: ${props => props.theme.bigBoxShadow};
		border-radius: 4px;
		margin-bottom: 1em;
		opacity: 0.9;
		transition: opacity 150ms ease-out;
		&:hover {
			opacity: 1;
		}
	}
`

interface Props {
	project: Project
	isSelected: boolean
}

const ProjectGallery: FC<Props> = ({ project }) => (
	<Container>
		{project.galleryImgsSm.map((image, i) => (
			<ImageZoom
				key={image}
				image={{
					src: image,
					alt: `${project.name} gallery ${i}`,
				}}
				zoomImage={{
					src: project.galleryImgsLg ? project.galleryImgsLg[i] : image,
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
