import { SELECT_PROJECT, SelectedProjectActions, SelectedProjectState } from './types'

export const initialSelectedProjectState: SelectedProjectState = null

const selectedProject = (
  state: SelectedProjectState = initialSelectedProjectState,
  action: SelectedProjectActions,
): SelectedProjectState => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.name
    default:
      return state
  }
}

export default selectedProject
