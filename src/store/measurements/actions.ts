import { ElMeasurements } from '../../utils/globalTypes'
import { REPORT_PROJECT, ReportProjectAction } from './types'

export const reportProject = (
  name: string,
  measurements: ElMeasurements,
): ReportProjectAction => ({
  type: REPORT_PROJECT,
  name,
  measurements,
})
