import { ElMeasurements } from '../../utils/globalTypes'
import { REPORT_PROJECT, ReportProjectAction } from './types'

export const reportProject = (
	projectId: string,
	measurements: ElMeasurements
): ReportProjectAction => ({
	type: REPORT_PROJECT,
	projectId,
	measurements,
})
