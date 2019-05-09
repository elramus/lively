import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import featImgsLoaded from './featImgsLoaded/reducers'
import measurements from './measurements/reducers'
import selectedProject from './selectedProject/reducers'

const rootReducer = combineReducers({
  measurements,
  selectedProject,
  featImgsLoaded,
})

// Global State Type
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
)

export default store
