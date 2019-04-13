import {
  SELECT_PROJECT,
  InteractionsActions,
  InteractionsState,
  SET_HOVERED_NAV_LINK,
  SET_VISIBLE_PANE,
} from './types'
import { UiNames } from '../../utils/globalTypes'

export const initialInteractionsState: InteractionsState = {
  selectedProject: null,
  hoveredNavLink: null,
  visiblePane: UiNames.SplashPane,
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
    case SET_HOVERED_NAV_LINK:
      return {
        ...state,
        hoveredNavLink: action.name,
      }
    case SET_VISIBLE_PANE:
      return {
        ...state,
        visiblePane: action.name,
      }
    default:
      return state
  }
}

export default interactions
