export type FeatImgsLoadedState = number;

export const INCREMENT_IMGS_LOADED = 'INCREMENT_IMGS_LOADED'

export interface IncrementImgsLoadedAction {
  type: typeof INCREMENT_IMGS_LOADED;
}

// All Actions
export type FeatImgsLoadedActions = IncrementImgsLoadedAction
