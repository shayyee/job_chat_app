/**
 * Created by lenovo on 2018/3/7.
 */
import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from "./App";
import { logout } from './Auth.redux'

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
@connect(
  // 需要state里的什么属性放到props
  state=>state.auth,
  // 需要什么action放到props 自动dispatch
  { logout }
)
class Dashboard extends Component{
  render() {
    const match = this.props.match
    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        {this.props.isAuth ? <button onClick={this.props.logout}>注销</button>:null}
        <ul>
          <li>
            <Link to={match.url}>一班</Link>
          </li>
          <li>
            <Link to={`${match.url}/two`}>二班</Link>
          </li>
          <li>
            <Link to={`${match.url}/three`}>三班</Link>
          </li>
        </ul>
        <Route path={match.url} exact component={App}></Route>
        <Route path={`${match.url}/two`} component={Two}></Route>
        <Route path={`${match.url}/three`} component={Three}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard