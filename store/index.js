import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import groups from './groups'
import recipes from './recipes'

const middleware = applyMiddleware(thunk)

const reducer = combineReducers({groups, recipes})
export default createStore(reducer, middleware)

export * from './groups'
export * from './recipes'
