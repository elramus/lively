import { ElMeasurements, PathMeasurements } from '../../utils/globalTypes'
import {
  REPORT_ELEMENT,
  ReportElementAction,
  REPORT_PROJECT,
  ReportProjectAction,
  REPORT_PATH,
  ReportPathAction,
} from './types'

export const reportElement = (
  name: string,
  measurements: ElMeasurements,
): ReportElementAction => ({
  type: REPORT_ELEMENT,
  name,
  measurements,
})

export const reportProject = (
  name: string,
  measurements: ElMeasurements,
): ReportProjectAction => ({
  type: REPORT_PROJECT,
  name,
  measurements,
})

export const reportPath = (
  name: string,
  measurements: PathMeasurements,
): ReportPathAction => ({
  type: REPORT_PATH,
  name,
  measurements,
})
