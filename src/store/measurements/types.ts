import { ElMeasurements } from '../../utils/globalTypes'

export interface MeasurementsState {
	projects: {
		[key: string]: ElMeasurements
	}
}

export const REPORT_PROJECT = 'REPORT_PROJECT'

// Redux Actions
export interface ReportProjectAction {
	type: typeof REPORT_PROJECT
	projectId: string
	measurements: ElMeasurements
}

// All actions unioned as a type
export type MeasurementsActionTypes = ReportProjectAction
