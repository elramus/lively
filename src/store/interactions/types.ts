// Selected Project State
export interface InteractionsState {
  selectedProject: string | null;
  hoveredNavLink: string | null;
  visiblePane: string;
}

// Redux Actions Types
export const SELECT_PROJECT = 'SELECT_PROJECT'
export const SET_HOVERED_NAV_LINK = 'SET_HOVERED_NAV_LINK'
export const SET_VISIBLE_PANE = 'SET_VISIBLE_PANE'

// Individual Actions
export interface SelectProjectAction {
  type: typeof SELECT_PROJECT;
  name: string;
}
export interface SetHoveredNavLinkAction {
  type: typeof SET_HOVERED_NAV_LINK;
  name: string | null;
}
export interface SetVisiblePaneAction {
  type: typeof SET_VISIBLE_PANE;
  name: string;
}

// All Actions
export type InteractionsActions =
  SelectProjectAction
  | SetHoveredNavLinkAction
  | SetVisiblePaneAction
