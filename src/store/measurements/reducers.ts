import { MeasurementsActionTypes, MeasurementsState, REPORT_PROJECT } from './types'

export const initialMeasurementsState: MeasurementsState = {
	projects: {},
}

const measurements = (
	state: MeasurementsState = initialMeasurementsState,
	action: MeasurementsActionTypes
): MeasurementsState => {
	switch (action.type) {
		case REPORT_PROJECT:
			return {
				...state,
				projects: {
					...state.projects,
					[action.projectId]: action.measurements,
				},
			}
		default:
			return state
	}
}

export default measurements
