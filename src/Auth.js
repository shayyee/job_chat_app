/**
 * Created by lenovo on 2018/3/7.
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from "./Auth.redux"

// 两个reducer,每个reducer都有一个state
// 合并reducer

@connect(
  state=>state.auth,
  { login }
)
class Auth extends Component{
  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null}
        <h2>请先登录</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth