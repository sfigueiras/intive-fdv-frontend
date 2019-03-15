import React from 'react'
import { render } from 'react-dom'
import './index.css'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './players/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)