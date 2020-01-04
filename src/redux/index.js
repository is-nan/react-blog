import thunkMiddleware from 'redux-thunk';
import { createStore,combineReducers,applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
const middlewares = [
  thunkMiddleware
]
const enhancer = combineReducers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)
export default function configStore () {
  const store = createStore(rootReducer, enhancer)
  return store
}
