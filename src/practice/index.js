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

// import { counter } from './index.redux'
import reducers from './reducers'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension(): ()=>{}// redux调试插件
))
// console.log(store.getState());
// class Test extends React.Component{
//   render() {
//     console.log(this.props)
//     // this.props.history.push('/')
//     return (
//       <h2>Not found</h2>
//     )
//   }
// }
// 登录 没有登录信息 统一跳转到login
// 页面 导航+显示+注销
//   一班
//   二班
//   三班
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/*只渲染命中的第一个Route*/}
        <Route path="/login" exact component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="dashboard"></Redirect>
      </Switch>
      {/*<div>*/}
        {/*<ul>*/}
          {/*<li>*/}
            {/*<Link to="/">一班</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/two">二班</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/three">三班</Link>*/}
          {/*</li>*/}
        {/*</ul>*/}
        {/*<Switch>*/}
          {/*/!*只渲染命中的第一个Route*!/*/}
          {/*<Route path="/" exact component={App}></Route>*/}
          {/*<Route path="/two" component={Two}></Route>*/}
          {/*<Route path="/three" component={Three}></Route>*/}
          {/*<Route path="/:location" component={Test}></Route>*/}
        {/*</Switch>*/}
      {/*</div>*/}
    </BrowserRouter>
  </Provider>), document.getElementById('root')
)
