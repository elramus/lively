import {
  MeasurementsState,
  MeasurementsActionTypes,
  REPORT_ELEMENT,
  REPORT_PROJECT,
  REPORT_PATH,
} from './types'

export const initialMeasurementsState: MeasurementsState = {
  elements: {}, // Panes and Links... mb split up?
  projects: {},
  paths: {},
}

const measurements = (
  state: MeasurementsState = initialMeasurementsState,
  action: MeasurementsActionTypes,
): MeasurementsState => {
  switch (action.type) {
    case REPORT_ELEMENT:
      return {
        ...state,
        elements: {
          ...state.elements,
          [action.name]: action.measurements,
        },
      }
    case REPORT_PROJECT:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.name]: action.measurements,
        },
      }
    case REPORT_PATH:
      return {
        ...state,
        paths: {
          ...state.paths,
          [action.name]: action.measurements,
        },
      }
    default:
      return state
  }
}

export default measurements
