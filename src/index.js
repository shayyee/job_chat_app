/**
 * Created by lenovo on 2018/3/7.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import reducers from './reducers'
import './config'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension(): ()=>{}// redux调试插件
))

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
    </BrowserRouter>
  </Provider>), document.getElementById('root')
)
