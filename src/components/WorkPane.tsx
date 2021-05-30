import { Component } from 'react'

import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import projects from '../data/projects'
import { AppState } from '../store'
import { FeatImgsLoadedState } from '../store/featImgsLoaded/types'
import { MeasurementsState } from '../store/measurements/types'
import { selectProject } from '../store/selectedProject/actions'
import { SelectedProjectState } from '../store/selectedProject/types'
import { enterProject, exitProject, initialWorkPaneReveal } from '../utils/animations'
import C from '../utils/constants'
import SingleProject from './single-project/SingleProject'
import TextButton from './TextButton'

const Container = styled('section')`
	position: relative;
	margin-top: 4em;
	.portfolio-back-button {
		position: absolute;
		top: -3.7em;
	}
`
const ProjectGrid = styled('div')`
	position: relative;
	display: grid;
	justify-content: center;
	margin: auto;
	grid-template-columns: 250px 250px 250px;
	grid-column-gap: 2em;
	@media (max-width: ${props => props.theme.md}) {
		grid-template-columns: 250px 250px;
	}
	@media (max-width: ${props => props.theme.sm}) {
		grid-template-columns: 1fr;
	}
`
const ProjectContainer = styled('div')`
	opacity: 0;
`

interface Props {
	selectProject: typeof selectProject
	selectedProject: SelectedProjectState
	measurements: MeasurementsState
	featImgsLoaded: FeatImgsLoadedState
}
interface State {
	readyToReveal: boolean
}

class WorkPane extends Component<Props, State> {
	projectGridRef: null | HTMLDivElement
	projectContRefs: {
		[key: string]: null | HTMLDivElement
	}

	constructor(props: Props) {
		super(props)
		this.projectContRefs = {}
		this.projectGridRef = null
		this.state = {
			readyToReveal: false,
		}
	}

	componentDidMount() {
		const { featImgsLoaded } = this.props
		const { readyToReveal } = this.state
		if (featImgsLoaded >= Object.keys(projects).length && !readyToReveal) {
			this.setState({ readyToReveal: true })
			initialWorkPaneReveal(this.projectContRefs)
		}
		window.addEventListener('keydown', this.handleKeyDown)
	}

	componentDidUpdate() {
		const { featImgsLoaded } = this.props
		const { readyToReveal } = this.state
		if (featImgsLoaded >= Object.keys(projects).length && !readyToReveal) {
			this.setState({ readyToReveal: true })
			initialWorkPaneReveal(this.projectContRefs)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown)
	}

	handleProjectClick = (name: string) => {
		this.openProject(name)
	}

	handleProjectKeyPress = (name: string) => {
		this.openProject(name)
	}

	handleAllProjectsClick = () => {
		this.closeProject()
	}

	handleKeyDown = (e: KeyboardEvent) => {
		const { selectedProject } = this.props
		if (selectedProject && e.which === 27) {
			this.closeProject()
		}
	}

	openProject = (name: string) => {
		const { selectedProject, measurements, selectProject } = this.props
		const measuredProjects = measurements.projects
		if (!selectedProject) {
			enterProject(
				name,
				this.projectContRefs,
				measuredProjects,
				this.projectGridRef,
				selectProject
			)
		}
	}

	closeProject = () => {
		const { selectedProject, measurements, selectProject } = this.props
		const measuredProjects = measurements.projects
		if (selectedProject) {
			exitProject(
				selectedProject,
				this.projectContRefs,
				measuredProjects,
				this.projectGridRef,
				selectProject
			)
		}
	}

	render() {
		const { selectedProject } = this.props

		return (
			<Container>
				<CSSTransition
					mountOnEnter
					in={selectedProject !== null}
					timeout={C.ProjectContentsTransition}
					classNames="fade-slide-down"
					unmountOnExit
				>
					<div className="portfolio-back-button">
						<TextButton
							text="Back To Portfolio"
							leadingIcon={['far', 'long-arrow-left']}
							onClick={() => this.handleAllProjectsClick()}
							noBg
						/>
					</div>
				</CSSTransition>

				<ProjectGrid ref={div => (this.projectGridRef = div)}>
					{Object.keys(projects).map(projectId => (
						<ProjectContainer
							key={projectId}
							onClick={() => this.handleProjectClick(projectId)}
							onKeyPress={() => this.handleProjectKeyPress(projectId)}
							ref={div => (this.projectContRefs[projectId] = div)}
							tabIndex={selectedProject === projectId ? undefined : 0}
							role="button"
						>
							<SingleProject
								projectId={projectId}
								isSelected={selectedProject === projectId}
							/>
						</ProjectContainer>
					))}
				</ProjectGrid>
			</Container>
		)
	}
}

const mapStateToProps = ({ measurements, selectedProject, featImgsLoaded }: AppState) => ({
	measurements,
	selectedProject,
	featImgsLoaded,
})

export default connect(mapStateToProps, {
	selectProject,
})(WorkPane)
