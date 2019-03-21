import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

export default (reducer) => {
  const dispatchSpy = jest.fn(() => ({}))
  const reducerSpy = (state, action) => dispatchSpy(action)

  const combinedReducers = combineReducers({
    reducerSpy,
    ...reducer
  })

  const store = createStore(
    combinedReducers,
    applyMiddleware(thunk)
  )

  return { store, dispatchSpy }
}