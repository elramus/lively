import { InteractionsActions, InteractionsState, SELECT_PROJECT } from './types'

export const initialInteractionsState: InteractionsState = {
  selectedProject: null,
}

const interactions = (
  state: InteractionsState = initialInteractionsState,
  action: InteractionsActions,
): InteractionsState => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.name,
      }
    default:
      return state
  }
}

export default interactions
