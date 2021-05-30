import { FeatImgsLoadedActions, FeatImgsLoadedState, INCREMENT_IMGS_LOADED } from './types'

export const initialFeatImgsLoadedState: FeatImgsLoadedState = 0

const featImgsLoaded = (
	state: FeatImgsLoadedState = initialFeatImgsLoadedState,
	action: FeatImgsLoadedActions
): FeatImgsLoadedState => {
	switch (action.type) {
		case INCREMENT_IMGS_LOADED:
			return state + 1
		default:
			return state
	}
}

export default featImgsLoaded
