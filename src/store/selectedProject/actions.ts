import { SELECT_PROJECT, SelectProjectAction } from './types'

export const selectProject = (name: string | null): SelectProjectAction => ({
	type: SELECT_PROJECT,
	name,
})
