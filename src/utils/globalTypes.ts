import { IconName, IconPrefix } from '@fortawesome/pro-solid-svg-icons'

export enum UiNames {
	AboutLink = 'aboutLink',
	AboutPane = 'aboutPane',
	AboutPath = 'aboutPath',
	ContactLink = 'contactLink',
	ContactPane = 'contactPane',
	ContactPath = 'contactPath',
	SplashPane = 'splashPane',
	WorkLink = 'workLink',
	WorkPane = 'workPane',
	WorkPath = 'workPath',
	headline = 'headline',
}

export interface Project {
	name: string
	description: string
	approach: string[]
	featuredImg: string
	galleryImgsSm: string[]
	galleryImgsLg?: string[]
	url?: string
	github?: string
	tech: {
		img?: string
		icon?: [IconPrefix, IconName]
		label: string
	}[]
}

export interface Projects {
	[key: string]: Project
}

export interface ElMeasurements {
	height: number
	width: number
	top: number
	left: number
	offsetTop: number
	offsetLeft: number
	padding: number
}

export interface MeasuredElements {
	[key: string]: ElMeasurements
}

export type SubmitElMeasurements = (name: string, measurements: ElMeasurements) => void

export interface PathMeasurements {
	length: number
	endPointX: number
	endPointY: number
	startPointX: number
	startPointY: number
}

export interface MeasuredPaths {
	[key: string]: PathMeasurements
}
