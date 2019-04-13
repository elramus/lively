import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import measurements from './measurements/reducers'
import interactions from './interactions/reducers'

const rootReducer = combineReducers({
  measurements,
  interactions,
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
