// Selected Project State
export interface InteractionsState {
  selectedProject: string | null;
}

// Redux Actions Types
export const SELECT_PROJECT = 'SELECT_PROJECT'

// Individual Actions
export interface SelectProjectAction {
  type: typeof SELECT_PROJECT;
  name: string;
}

// All Actions
export type InteractionsActions = SelectProjectAction
