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

import './index.css'
import reducers from './reducers'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authRoute/authroute'
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension(): ()=>{}// redux调试插件
))

function Boss() {
  return <h1>Boss</h1>
}
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/bossinfo" component={Boss}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root')
)
