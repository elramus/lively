import {
  SelectProjectAction,
  SELECT_PROJECT,
  SetHoveredNavLinkAction,
  SET_HOVERED_NAV_LINK,
  SetVisiblePaneAction,
  SET_VISIBLE_PANE,
} from './types'

export const selectProject = (
  name: string,
): SelectProjectAction => ({
  type: SELECT_PROJECT,
  name,
})

export const setHoveredNavLink = (
  name: string | null,
): SetHoveredNavLinkAction => ({
  type: SET_HOVERED_NAV_LINK,
  name,
})

export const setVisiblePane = (
  name: string,
): SetVisiblePaneAction => ({
  type: SET_VISIBLE_PANE,
  name,
})
