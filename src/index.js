/**
 * Created by lenovo on 2018/3/7.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from "./App";
import { counter } from './index.redux'

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension(): ()=>{}// redux调试插件
))

function Two() {
  return (
    <h1>二班</h1>
  )
}
function Three() {
  return (
    <h1>三班</h1>
  )
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">一班</Link>
          </li>
          <li>
            <Link to="/two">二班</Link>
          </li>
          <li>
            <Link to="/three">三班</Link>
          </li>
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/two" component={Two}></Route>
        <Route path="/three" component={Three}></Route>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root')
)
