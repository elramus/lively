import { ElMeasurements, PathMeasurements } from '../../utils/globalTypes'

// Describe store object
export interface MeasurementsState {
  elements: {
    [key: string]: ElMeasurements;
  };
  projects: {
    // For now, project measurements are the same as element measurements.
    // Feel free to break apart.
    [key: string]: ElMeasurements;
  };
  paths: {
    [key: string]: PathMeasurements;
  };
}

// Redux Action Types
export const REPORT_ELEMENT = 'REPORT_ELEMENT'
export const REPORT_PROJECT = 'REPORT_PROJECT'
export const REPORT_PATH = 'REPORT_PATH'

// Redux Actions
export interface ReportElementAction {
  type: typeof REPORT_ELEMENT;
  name: string;
  measurements: ElMeasurements;
}
export interface ReportProjectAction {
  type: typeof REPORT_PROJECT;
  name: string;
  measurements: ElMeasurements;
}
export interface ReportPathAction {
  type: typeof REPORT_PATH;
  name: string;
  measurements: PathMeasurements;
}

// All actions unioned as a type
export type MeasurementsActionTypes = ReportElementAction | ReportProjectAction | ReportPathAction
