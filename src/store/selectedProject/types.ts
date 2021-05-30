export type SelectedProjectState = string | null

export const SELECT_PROJECT = 'SELECT_PROJECT'

export interface SelectProjectAction {
	type: typeof SELECT_PROJECT
	name: string | null
}

export type SelectedProjectActions = SelectProjectAction
